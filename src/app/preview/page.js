import Header from "../components/header";
import Footer from "../components/footer";
import HeroSlider from "../components/HeroSlider";
import ProjectSlider from "../components/ProjectSlider";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function PreviewPage() {
    const images = ["/piscina1.jpeg", "/piscina2.jpeg", "/piscina3.jpeg"];

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header />

            {/* Admin Header for Preview */}
            <div className="bg-indigo-900 text-white py-4 px-6 text-center mt-20">
                <h1 className="text-2xl font-black uppercase tracking-widest">Galeía Visual del Proyecto</h1>
                <p className="text-indigo-200">Aquí puedes ver cada sección diseñada en base al código actual</p>
            </div>

            <main className="space-y-32 py-20">

                {/* 1. SECCIÓN HERO */}
                <PreviewSection title="1. Sección de Inicio (Hero)" description="La primera impresión que tiene el usuario.">
                    <section id="inicio" className="relative h-[600px] w-full overflow-hidden rounded-[3rem] shadow-2xl">
                        <HeroSlider images={images} />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="max-w-4xl px-6 text-center">
                                <span className="inline-block px-4 py-1.5 bg-indigo-600/20 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-6">
                                    Excelencia en Construcción
                                </span>
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                                    Piscinas <span className="text-indigo-400">Costa Rica</span>
                                </h1>
                                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-medium">
                                    Creamos experiencias acuáticas de lujo que transforman tu hogar en un paraíso personal.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <div className="bg-indigo-600 text-white font-black px-8 py-4 rounded-xl text-lg">Solicitar Cotización</div>
                                    <div className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg">Ver Galería</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </PreviewSection>

                {/* 2. SECCIÓN HISTORIA */}
                <PreviewSection title="2. Historia y Tradición" description="Nuestra trayectoria de familia y visión.">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-12 rounded-[3rem] shadow-xl">
                        <div>
                            <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Nuestra Trayectoria</span>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1]">
                                Una Historia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Familia y Visión</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Piscinas Costa Rica nació hace 7 años en La Palmera de San Carlos, del sueño de una familia de seis hermanos que decidió apostar por el trabajo duro.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-indigo-50 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-indigo-600 mb-1">600+</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase">Proyectos</div>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-2xl">
                                    <div className="text-3xl font-black text-purple-600 mb-1">7+</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase">Años</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
                            <Image src="/piscina2.jpeg" alt="Historia" fill className="object-cover" />
                        </div>
                    </div>
                </PreviewSection>

                {/* 3. SECCIÓN PROYECTOS */}
                <PreviewSection title="3. Galería de Proyectos" description="Visualización de nuestros trabajos terminados.">
                    <div className="bg-gray-900 p-12 rounded-[3rem] shadow-2xl text-white">
                        <div className="mb-12 text-center">
                            <h3 className="text-4xl font-black mb-4">Catálogo de Excelencia</h3>
                            <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
                        </div>
                        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                            <ProjectSlider limit={2} />
                        </div>
                    </div>
                </PreviewSection>

                {/* 4. SECCIÓN CONTACTO */}
                <PreviewSection title="4. Formulario de Contacto" description="Interface para leads y presupuestos.">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto px-6">
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 italic text-gray-600">
                                "La mejor forma de empezar tu proyecto es con una asesoría profesional."
                            </div>
                            <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-lg text-white">
                                <h4 className="font-black text-xl mb-4">Datos de contacto</h4>
                                <p className="opacity-80 mb-2">{CONTACT_INFO.phone}</p>
                                <p className="opacity-80">{CONTACT_INFO.email}</p>
                            </div>
                        </div>
                        <div className="lg:col-span-8 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
                            <div className="bg-gray-800 p-8 text-white">
                                <h3 className="text-2xl font-black italic">Presupuesto sin compromiso</h3>
                            </div>
                            <div className="p-8">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </PreviewSection>

            </main>

            <Footer />
        </div>
    );
}

function PreviewSection({ title, description, children }) {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="mb-10 ml-4">
                <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm">{title.split('.')[0]}</span>
                    {title.split('. ')[1]}
                </h2>
                <p className="text-slate-500 mt-2 font-medium">{description}</p>
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-[3.5rem] border-4 border-dashed border-slate-200">
                {children}
            </div>
        </section>
    );
}
