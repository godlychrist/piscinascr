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
      from: 'PiscinasCR <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `Nuevo Mensaje: ${subject || 'Consulta'} de ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
          <p><strong>Asunto:</strong> ${subject || 'Sin asunto'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
            Este mensaje fue enviado desde el sitio web PiscinasCR
          </footer>
        </div>
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

