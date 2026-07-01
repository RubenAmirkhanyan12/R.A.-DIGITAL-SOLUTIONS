import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO = "rubenamirkhanyan12@gmail.com";
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
    const body: Record<string, string> = await req.json();
    const { sector, nombre, email, ...rest } = body;

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

────────────────────────────────────
Responde directamente a: ${email ?? "—"}
`.trim();

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email || undefined,
      subject,
      text,
    });

    // Confirmación al cliente
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Recibimos tu solicitud — RASTECH Automatización",
        text: `Hola ${nombre ?? ""},

Recibimos tu solicitud correctamente.

En las próximas 24-48 horas Rubén se pondrá en contacto contigo con una propuesta personalizada.

Contacto directo:
  Email: rubenamirkhanyan12@gmail.com
  Tel:   +34 613 361 115

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
