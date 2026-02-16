import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Tu correo donde quieres recibir las notificaciones
const TO_EMAIL = 'cristopherquiros2@gmail.com';

export async function POST(request) {
  try {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      console.error('Error: RESEND_API_KEY no está configurada en las variables de entorno.');
      return NextResponse.json(
        { error: 'Error de configuración en el servidor' },
        { status: 500 }
      );
    }

    const resend = new Resend(key);
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: nombre, email y mensaje' },
        { status: 400 }
      );
    }

    // Enviar el correo usando Resend
    const data = await resend.emails.send({
      from: `${name} - PiscinasCR <onboarding@resend.dev>`,
      to: TO_EMAIL,
      subject: `Nuevo mensaje de Contacto: ${subject || 'Sin Asunto'}`,
      replyTo: email, // Corregido: Ahora sí funcionará el botón Responder en tu correo
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
              .field { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 15px; }
              .field-label { font-weight: bold; color: #4f46e5; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 5px; display: block; }
              .field-value { font-size: 1.1rem; color: #1f2937; }
              .message-box { background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5; margin-top: 10px; }
              .footer { text-align: center; margin-top: 25px; color: #6b7280; font-size: 0.85rem; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin:0; font-size: 24px;">Nuevo Lead - PiscinasCR</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="field-label">Nombre del Cliente</span>
                <span class="field-value">${name}</span>
              </div>
              
              <div class="field">
                <span class="field-label">Correo Electrónico</span>
                <span class="field-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="field">
                <span class="field-label">Teléfono</span>
                <span class="field-value"><a href="tel:${phone}">${phone || 'No proporcionado'}</a></span>
              </div>
              
              <div class="field">
                <span class="field-label">Asunto</span>
                <span class="field-value">${subject || 'Consulta General'}</span>
              </div>
              
              <div class="field" style="border-bottom: none;">
                <span class="field-label">Mensaje</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Este correo fue enviado desde el formulario de contacto de PiscinasCR.</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente',
        id: data.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API Contact:', error);
    return NextResponse.json(
      {
        error: 'Hubo un error al procesar tu solicitud',
        details: error.message
      },
      { status: 500 }
    );
  }
}
