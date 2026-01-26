"use client";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ProyectsPage() {
    const projects = [
        {
            id: 1,
            title: "Residencial Premium",
            location: "Escazú, San José",
            description: "Construcción integral en concreto con acabados en vitrocerámica española y sistema de filtración inteligente de última generación.",
            image: "/piscina1.jpeg",
            type: "Concreto",
            features: ["Iluminación LED", "Vitrocerámica", "Climatizada"]
        },
        {
            id: 2,
            title: "Familiar Confort",
            location: "Heredia",
            description: "Piscina de fibra de vidrio de nuestro taller, instalada en tiempo récord con deck de madera sintética y sistema de hidromasaje.",
            image: "/piscina2.jpeg",
            type: "Fibra de Vidrio",
            features: ["Instalación Rápida", "Hidromasaje", "Bajo Mantenimiento"]
        },
        {
            id: 3,
            title: "Proyecto Oasis",
            location: "Guanacaste",
            description: "Diseño moderno con borde infinito y acabados de alta resistencia, ideal para zonas costeras y climas tropicales.",
            image: "/piscina3.jpeg",
            type: "Concreto",
            features: ["Borde Infinito", "Pintura Epóxica", "Vista Panorámica"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Nuestros Proyectos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Desde tinas de fibra de vidrio hasta complejos proyectos en concreto.
                        Cada piscina es una obra de arte diseñada para durar.
                    </p>
                    <div className="w-24 h-1.5 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                        >
                            {/* Image Section */}
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                                        {project.type}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <div className="flex items-center text-indigo-500 mb-3">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm font-semibold tracking-wide uppercase">{project.location}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.features.map((feature, idx) => (
                                        <span key={idx} className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-lg">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-indigo-200">
                                        Ver Detalles del Proyecto
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
