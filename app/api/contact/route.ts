import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { OFFER, SITE } from "../../lib/site-config";
import { CONTACT_LIMITS, isEmail, isValidContact, SECTOR_LABELS } from "../../lib/contact";

const TO = SITE.email;
const FROM = process.env.CONTACT_FROM || "RASTECH Leads <onboarding@resend.dev>";
const OPTIONAL_FIELDS = { empresa: "Empresa", horas: "Horas/semana" } as const;

const reject = (error: string) => NextResponse.json({ ok: false, error }, { status: 400 });
const field = (value: unknown) => (typeof value === "string" ? value.trim() : "");
// Solo el tipo de error: nunca datos del formulario en los registros
const errorName = (err: unknown) => (err instanceof Error ? err.name : "unknown");

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return reject("invalid_body");
  }
  if (!body || typeof body !== "object") return reject("invalid_body");
  if (body.consent !== true) return reject("consent_required");

  const nombre = field(body.nombre);
  const contacto = field(body.contacto);
  const mensaje = field(body.mensaje);
  if (!nombre) return reject("name_required");
  if (!contacto) return reject("contact_required");
  if (!mensaje) return reject("message_required");
  if (!isValidContact(contacto)) return reject("contact_invalid");

  const extras = Object.entries(OPTIONAL_FIELDS).map(([key, label]) => [label, field(body[key])] as const);
  const tooLong =
    nombre.length > CONTACT_LIMITS.nombre ||
    contacto.length > CONTACT_LIMITS.contacto ||
    mensaje.length > CONTACT_LIMITS.mensaje ||
    extras.some(([, value]) => value.length > CONTACT_LIMITS.extra);
  if (tooLong) return reject("too_long");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[RASTECH /api/contact] Falta RESEND_API_KEY: el mensaje no se ha enviado");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const email = isEmail(contacto) ? contacto : undefined;
  const sectorLabel = SECTOR_LABELS[field(body.sector)] ?? SECTOR_LABELS.home;
  const filledExtras = extras.filter(([, value]) => value);

  const text = `
NUEVO CONTACTO — RASTECH
────────────────────────────────────
Sector:    ${sectorLabel}
Nombre:    ${nombre}
Contacto:  ${contacto}

Qué quiere automatizar:
${mensaje}
${filledExtras.length ? `\n${filledExtras.map(([label, value]) => `${label}: ${value}`).join("\n")}\n` : ""}
Consentimiento aceptado el ${new Date().toISOString()}
`.trim();

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      ...(email && { replyTo: email }),
      subject: `Nuevo contacto ${sectorLabel} — ${nombre}`,
      text,
    });
    if (error) throw Object.assign(new Error("send_failed"), { name: error.name });
  } catch (err) {
    console.error("[RASTECH /api/contact] No se ha enviado el aviso al dueño:", errorName(err));
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }

  // El acuse es opcional: si falla, el mensaje al dueño ya ha salido
  if (email) {
    try {
      const { error } = await resend.emails.send({
        from: FROM,
        to: email,
        replyTo: TO,
        subject: "He recibido tu mensaje — RASTECH",
        text: `Hola ${nombre},

He recibido tu mensaje. Te respondo en ${OFFER.responseTime}.

Si quieres añadir algo, responde a este correo.

Un saludo,
${SITE.owner} — RASTECH`,
      });
      if (error) console.error("[RASTECH /api/contact] No se ha enviado el acuse:", error.name);
    } catch (err) {
      console.error("[RASTECH /api/contact] No se ha enviado el acuse:", errorName(err));
    }
  }

  return NextResponse.json({ ok: true });
}
