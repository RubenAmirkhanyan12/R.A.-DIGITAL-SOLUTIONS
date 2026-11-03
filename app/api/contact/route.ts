import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { OFFER, SITE } from "../../lib/site-config";

const TO = SITE.email;
const FROM = "RASTECH Leads <onboarding@resend.dev>";

function formatRows(data: Record<string, string>): string {
  return Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k}: ${v}`)
    .join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { consent, ...fields }: { consent?: unknown } & Record<string, string> = await req.json();
    if (consent !== true) {
      return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
    }
    const consentAt = new Date().toISOString();
    const { sector, nombre, email, ...rest } = fields;

    const sectorLabels: Record<string, string> = {
      restaurantes: "RESTAURANTE",
      ecommerce:    "E-COMMERCE",
      agencias:     "AGENCIA",
      otros:        "OTRO SECTOR",
    };
    const sectorLabel = sectorLabels[sector] ?? sector?.toUpperCase() ?? "DESCONOCIDO";
    const subject = `Nuevo lead ${sectorLabel} — ${nombre ?? "sin nombre"}`;

    const text = `
NUEVO LEAD — RASTECH
────────────────────────────────────
Sector:  ${sectorLabel}
Nombre:  ${nombre ?? "—"}
Email:   ${email ?? "—"}

Datos del formulario:
${formatRows(rest) || "  (ninguno)"}

Consentimiento aceptado el ${consentAt}

────────────────────────────────────
Responde directamente a: ${email ?? "—"}
`.trim();

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email || undefined,
      subject,
      text,
    });
    if (error) throw new Error(error.message);

    // Confirmación al cliente
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Recibimos tu solicitud — RASTECH Automatización",
        text: `Hola ${nombre ?? ""},

Recibimos tu solicitud correctamente.

Te responderé en ${OFFER.responseTime}.

Contacto directo:
  Email: ${SITE.email}
  Tel:   ${SITE.phone}

Un saludo,
Rubén — RASTECH Barcelona`.trim(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RASTECH /api/contact]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
