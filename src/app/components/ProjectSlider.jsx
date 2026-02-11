'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/lib/constants';

export default function ProjectSlider({ limit }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const displayProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
    const hasMultiplePages = displayProjects.length > itemsToShow;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(Math.min(2, displayProjects.length));
            } else {
                setItemsToShow(Math.min(3, displayProjects.length));
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [displayProjects.length]);

    const nextSlide = useCallback(() => {
        if (!hasMultiplePages) return;
        setCurrentIndex((prev) => (prev + 1) % (displayProjects.length - itemsToShow + 1));
    }, [itemsToShow, displayProjects.length, hasMultiplePages]);

    const prevSlide = () => {
        if (!hasMultiplePages) return;
        setCurrentIndex((prev) => (prev === 0 ? displayProjects.length - itemsToShow : prev - 1));
    };

    useEffect(() => {
        if (!hasMultiplePages) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, hasMultiplePages]);

    const renderStars = (rating) => {
        return (
            <div className="flex items-center space-x-1 mb-3" aria-label={`Calificación: ${rating} de 5 estrellas`}>
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section
            className={`relative group/slider py-8 ${!hasMultiplePages ? 'max-w-4xl mx-auto' : ''}`}
            aria-roledescription="carousel"
            aria-label="Proyectos realizados"
        >
            {/* Nav Arrows - Only show if there are more projects than slots */}
            {hasMultiplePages && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:block focus:opacity-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                        aria-label="Anterior proyecto"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:block focus:opacity-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                        aria-label="Siguiente proyecto"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            <div className="overflow-hidden">
                <div
                    className={`flex transition-transform duration-700 ease-in-out ${!hasMultiplePages ? 'justify-center' : ''}`}
                    style={{
                        transform: hasMultiplePages ? `translateX(-${currentIndex * (100 / itemsToShow)}%)` : 'none',
                        width: '100%'
                    }}
                    role="list"
                >
                    {displayProjects.map((project) => (
                        <div
                            key={project.id}
                            className="px-4 shrink-0 transition-all duration-500"
                            style={{ width: `${100 / itemsToShow}%` }}
                            role="listitem"
                        >
                            <article className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col">
                                {/* Image Section */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={`Proyecto finalizado: ${project.title} en ${project.location}`}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center text-indigo-500 mb-3">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm font-semibold tracking-wide uppercase">{project.location}</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-800 mb-1 leading-tight">
                                        {project.title}
                                    </h3>

                                    {renderStars(project.rating)}

                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3 font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {project.features.map((feature, idx) => (
                                            <span key={idx} className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-indigo-600 focus:bg-indigo-600 transition-colors shadow-lg active:scale-95 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Ver Detalles del Proyecto
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots - Only show if there are more projects than slots */}
            {hasMultiplePages && (
                <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Seleccionar conjunto de proyectos">
                    {[...Array(displayProjects.length - itemsToShow + 1)].map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={currentIndex === i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 transition-all duration-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none ${currentIndex === i ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                            aria-label={`Ir al grupo de proyectos ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
