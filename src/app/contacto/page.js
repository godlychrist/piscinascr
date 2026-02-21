import Header from "../components/header";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";
import { SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = {
    title: `Contacto | ${SITE_NAME}`,
    description: `Contacta con los expertos en piscinas en Costa Rica. Solicita tu presupuesto sin compromiso para construcción, mantenimiento o remodelación de piscinas.`,
    alternates: {
        canonical: '/contacto',
    },
};

const SocialCardIcon = ({ name }) => {
    switch (name.toLowerCase()) {
        case 'facebook':
        case 'facebook alternativo':
            return (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            );
        case 'instagram':
            return (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.11-2.85-.68-3.93-1.65-.21-.2-.39-.42-.57-.65v8.73c0 1.47-.26 2.99-1.07 4.19-2.03 3.12-6.1 4.23-9.39 2.76-3-1.33-4.67-4.64-4.08-7.86.5-2.53 2.62-4.58 5.14-5.13 1.05-.23 2.15-.17 3.17.15v4.27c-.44-.13-.9-.23-1.35-.23-1.5 0-3.03.88-3.6 2.26-.52 1.25-.11 2.84.95 3.66.86.66 2.04.75 3.01.27.63-.31 1.05-.97 1.25-1.65.05-.23.08-.47.08-.71V0z" />
                </svg>
            );
        default:
            return null;
    }
};

export default function ContactoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue/90 py-24 px-6 text-white text-center">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-teal rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-brand-cyan/30 backdrop-blur-md border border-brand-cyan/30 rounded-full text-brand-cyan text-sm font-bold tracking-wider uppercase mb-6">
                        Comienza tu transformación
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Próximo Sueño</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        En {SITE_NAME} estamos listos para asesorarte y convertir tu espacio en un oasis de relajación y elegancia.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 -mt-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Side - Info Cards */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Phone */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 text-center sm:text-left">
                                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-blue mx-auto sm:mx-0">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">Llamadas Directas</h3>
                                <p className="text-2xl font-black text-gray-900 mb-1">{CONTACT_INFO.phone}</p>
                                <p className="text-gray-500 text-sm font-medium">Horario: {CONTACT_INFO.officeHours.weekdays}</p>
                            </div>

                            {/* Facebook Alternativo - Compact Placement */}
                            <a
                                href={SOCIAL_LINKS.find(s => s.name.toLowerCase().includes('alternativo'))?.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-[1.5rem] p-5 shadow-lg shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Facebook Alternativo</h3>
                                    <p className="text-sm font-black text-gray-900 group-hover:text-brand-blue transition-colors">Visitar Página Secundaria</p>
                                </div>
                                <svg className="w-4 h-4 ml-auto text-gray-300 group-hover:text-brand-blue transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 text-center sm:text-left">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 mx-auto sm:mx-0">
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.212-.242-.588-.487-.51-.67-.52-.172-.008-.37-.01-.568-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.344-4.225 9.809-9.886 9.81z" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">WhatsApp Directo</h3>
                                <p className="text-2xl font-black text-gray-900 mb-1">{CONTACT_INFO.whatsapp}</p>
                                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold flex items-center justify-center sm:justify-start hover:underline mt-2">
                                    Enviar mensaje <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </a>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1 text-center sm:text-left">
                                <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-brand-cyan mx-auto sm:mx-0">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">Correo Soporte</h3>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-black text-gray-900 break-all hover:text-brand-cyan transition-colors tracking-tight">{CONTACT_INFO.email}</a>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/60 overflow-hidden border border-gray-100">
                                <header className="bg-gray-900 p-8 md:p-12 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Presupuesto sin Compromiso</h2>
                                        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium">Cuéntanos sobre tu proyecto y uno de nuestros arquitectos de piscinas se pondrá en contacto contigo.</p>
                                    </div>
                                </header>
                                <div className="p-8 md:p-12">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Cards Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-brand-blue font-black text-xs uppercase tracking-[0.4em] mb-4">Conéctate con Nosotros</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 tracking-tight">Síguenos en <span className="text-brand-blue">Redes Sociales</span></h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SOCIAL_LINKS.filter(s => !s.name.toLowerCase().includes('alternativo')).map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center bg-gray-50 hover:bg-white border border-transparent hover:border-brand-cyan/20 p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-blue/10"
                            >
                                <div className={`w-20 h-20 shadow-lg rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${social.name.toLowerCase().includes('facebook') ? 'bg-brand-blue text-white shadow-brand-blue/20' :
                                    social.name.toLowerCase() === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-pink-200' :
                                        'bg-black text-white shadow-gray-200'
                                    }`}>
                                    <SocialCardIcon name={social.name} />
                                </div>
                                <span className="text-xl font-black text-gray-900 mb-1">{social.name}</span>
                                <span className="text-brand-blue text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver Perfil</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
