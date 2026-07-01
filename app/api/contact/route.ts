import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { nombre, email } = body;

  await resend.emails.send({
    from: "RASTECH Leads <onboarding@resend.dev>",
    to: "rubenamirkhanyan12@gmail.com",
    replyTo: email,
    subject: `Nuevo lead — ${nombre}`,
    html: `<h2>${nombre}</h2><p>Email: ${email}</p>`,
  });

  await resend.emails.send({
    from: "RASTECH Leads <onboarding@resend.dev>",
    to: email,
    subject: "Recibimos tu solicitud",
    html: `<p>Hola ${nombre}, recibimos tu solicitud.</p>`,
  });

  return Response.json({ ok: true });
}
