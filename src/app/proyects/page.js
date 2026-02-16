import Header from "../components/header";
import Footer from "../components/footer";
import ProjectSlider from "../components/ProjectSlider";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
    title: `Proyectos de Piscinas | ${SITE_NAME}`,
    description: "Explora nuestra galería de proyectos terminados en Costa Rica. Galería de piscinas de fibra de vidrio y concreto construidas con los más altos estándares.",
};

export default function ProyectsPage() {
    return (
        <div className="min-h-screen bg-gray-50 overflow-hidden">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-20">
                {/* Section Header */}
                <header className="text-center mb-16 px-4">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Catálogo de <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">Excelencia</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Explora nuestra selección de los mejores proyectos realizados por {SITE_NAME}.
                        Diseños únicos que combinan elegancia, durabilidad y la última tecnología.
                    </p>
                    <div className="flex justify-center mt-8" aria-hidden="true">
                        <div className="w-16 h-1 bg-brand-blue rounded-full"></div>
                        <div className="w-4 h-1 bg-brand-cyan rounded-full mx-2"></div>
                        <div className="w-16 h-1 bg-brand-blue rounded-full"></div>
                    </div>
                </header>

                {/* Interactive Slider Component */}
                <section className="relative" aria-label="Carrusel de proyectos destacados">
                    <ProjectSlider />
                </section>

                {/* Call to Action */}
                <section className="mt-24 text-center bg-brand-blue rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">¿Listo para construir tu oasis?</h2>
                        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                            Transformamos cualquier espacio exterior en un destino de lujo. Solicita tu asesoría gratuita hoy mismo.
                        </p>
                        <a
                            href="/contacto"
                            className="inline-block bg-white text-brand-blue px-12 py-5 rounded-2xl font-black text-xl hover:bg-brand-cyan hover:text-white transition-all shadow-xl hover:shadow-white/20 transform hover:scale-105"
                        >
                            Empezar mi Cotización
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
