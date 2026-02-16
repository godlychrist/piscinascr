import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

const SocialIcon = ({ name }) => {
    switch (name.toLowerCase()) {
        case 'facebook':
        case 'facebook alternativo':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            );
        case 'instagram':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.11-2.85-.68-3.93-1.65-.21-.2-.39-.42-.57-.65v8.73c0 1.47-.26 2.99-1.07 4.19-2.03 3.12-6.1 4.23-9.39 2.76-3-1.33-4.67-4.64-4.08-7.86.5-2.53 2.62-4.58 5.14-5.13 1.05-.23 2.15-.17 3.17.15v4.27c-.44-.13-.9-.23-1.35-.23-1.5 0-3.03.88-3.6 2.26-.52 1.25-.11 2.84.95 3.66.86.66 2.04.75 3.01.27.63-.31 1.05-.97 1.25-1.65.05-.23.08-.47.08-.71V0z" />
                </svg>
            );
        default:
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            );
    }
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-white/5 pt-20 pb-10 overflow-hidden relative" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Información de la empresa y contacto</h2>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-4 group" aria-label={`Ir al inicio de ${SITE_NAME}`}>
                            <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="" // Decorativo porque el nombre literal está al lado
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white leading-none">
                                    Piscinas <span className="text-brand-cyan">Costa Rica</span>
                                </h3>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Excelencia en cada gota</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Líderes en Costa Rica en el diseño, construcción y mantenimiento de paraísos acuáticos personalizados. Combinamos tecnología y arte para elevar tu estilo de vida.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-brand-blue hover:border-brand-cyan transition-all focus:ring-2 focus:ring-brand-cyan outline-none group shadow-lg"
                                    aria-label={`Sigue a ${SITE_NAME} en ${social.name}`}
                                >
                                    <div className="group-hover:scale-110 transition-transform">
                                        <SocialIcon name={social.name} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <nav className="lg:col-span-3 space-y-8" aria-label="Enlaces rápidos del footer">
                        <h4 className="text-white font-bold text-lg uppercase tracking-widest">Navegación</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Inicio', href: '/' },
                                { name: 'Galería de Proyectos', href: '/proyects' },
                                { name: 'Contacto Directo', href: '/contacto' },
                                { name: 'Sobre Nosotros', href: '/#sobre-nosotros' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-500 hover:text-brand-cyan transition-colors font-medium flex items-center group focus:text-brand-cyan outline-none">
                                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden="true"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className="lg:col-span-4 space-y-8" aria-label="Información de contacto">
                        <h4 className="text-white font-bold text-lg uppercase tracking-widest">Atención al Cliente</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-cyan shrink-0" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs font-bold uppercase mb-1">WhatsApp & Llamadas</p>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-bold text-lg hover:text-brand-cyan transition-colors focus:text-brand-cyan outline-none">{CONTACT_INFO.phone}</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-cyan shrink-0" aria-hidden="true">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs font-bold uppercase mb-1">Correo soporte</p>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-bold text-lg hover:text-brand-cyan transition-colors break-all focus:text-brand-cyan outline-none">{CONTACT_INFO.email}</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
                    <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.</p>
                    <nav className="flex gap-8" aria-label="Enlaces legales">
                        <a href="#" className="hover:text-white focus:text-white transition-colors outline-none">Términos de Servicio</a>
                        <a href="#" className="hover:text-white focus:text-white transition-colors outline-none">Privacidad</a>
                        <a href="#" className="hover:text-white focus:text-white transition-colors outline-none">Sitemap</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}