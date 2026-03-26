import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');
  const url = request.nextUrl.clone();

  // 1. Forzar WWW y HTTPS (evitar problemas de canonicalización)
  if (host === 'piscinas-costarica.com' || 
      host.endsWith('.vercel.app') || 
      host.endsWith('.netlify.app')) {
    url.host = 'www.piscinas-costarica.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // 2. Si por alguna razón el bot de Google salta la redirección (p.ej. cache) 
  // o estamos en un subdominio que no queremos indexar, enviamos el header noindex.
  const response = NextResponse.next();
  if (host !== 'www.piscinas-costarica.com') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
