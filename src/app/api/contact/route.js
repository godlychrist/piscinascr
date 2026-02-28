import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Correo donde recibirás las notificaciones
const TO_EMAIL = 'cristopherquiros2@gmail.com';

// Forzar que la ruta sea dinámica para evitar problemas en producción con el caching
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const key = process.env.RESEND_API_KEY;

    if (!key) {
      console.error('[API Contact] Error: RESEND_API_KEY no encontrada.');
      return NextResponse.json(
        { error: 'Error de configuración en el servidor: Falta API Key' },
        { status: 500 }
      );
    }

    const resend = new Resend(key);
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validación básica de campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    console.log(`[API Contact] Intentando enviar correo desde ${email} para ${name}...`);

    // Enviar el correo usando Resend
    // Usamos un formato más seguro para el campo 'from'
    const { data, error } = await resend.emails.send({
      from: 'Piscinas Costa Rica <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nueva consulta: ${subject || 'Sin asunto'} — ${name}`,
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nueva Consulta - PiscinasCR</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f4f8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.12);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a2e4d 0%,#0e7490 100%);padding:40px 48px;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Piscinas Costa Rica</h1>
            </td>
          </tr>

          <!-- SENDER INFO PILL -->
          <tr>
            <td style="background:#ffffff;padding:28px 48px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;">
                    <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">De parte de</p>
                    <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#0f172a;">${name}</p>
                    <a href="mailto:${email}" style="color:#0e7490;font-size:13px;text-decoration:none;font-weight:500;">↩ Responder a ${email}</a>
                    ${phone ? `<p style="margin:6px 0 0;font-size:13px;color:#334155;font-weight:500;">📞 <a href="tel:${phone}" style="color:#0e7490;text-decoration:none;font-weight:600;">${phone}</a></p>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SUBJECT -->
          <tr>
            <td style="background:#ffffff;padding:24px 48px 0;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94a3b8;">Asunto</p>
              <p style="margin:0;font-size:20px;font-weight:700;color:#0f172a;">${subject || 'Sin asunto'}</p>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="background:#ffffff;padding:20px 48px 0;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;" />
            </td>
          </tr>

          <!-- MESSAGE BODY -->
          <tr>
            <td style="background:#ffffff;padding:24px 48px 36px;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94a3b8;">Mensaje</p>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#334155;white-space:pre-wrap;">${message}</p>
            </td>
          </tr>

          <!-- CTA BUTTON -->
          <tr>
            <td style="background:#ffffff;padding:0 48px 40px;text-align:center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Tu consulta')}"
                 style="display:inline-block;background:linear-gradient(135deg,#0a2e4d,#0e7490);color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 32px;border-radius:50px;letter-spacing:0.05em;">
                ✉ Responder a ${name}
              </a>
            </td>
          </tr>



        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    if (error) {
      console.error('[API Contact] Error de Resend:', error);
      return NextResponse.json(
        {
          error: 'Resend no pudo enviar el correo',
          details: error.message || 'Error desconocido'
        },
        { status: 500 }
      );
    }

    console.log('[API Contact] Correo enviado con éxito:', data?.id);

    return NextResponse.json(
      {
        success: true,
        message: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
        id: data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[API Contact] Error inesperado:', error);
    return NextResponse.json(
      {
        error: 'Error interno del servidor',
        details: error.message
      },
      { status: 500 }
    );
  }
}

