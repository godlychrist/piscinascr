"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000); // 6 seconds for better reading time

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Galería principal de piscinas de lujo"
        >
            <div className="sr-only" aria-live="polite">
                Mostrando imagen {currentImage + 1} de {images.length}
            </div>

            {images.map((src, index) => (
                <div
                    key={src}
                    aria-hidden={index !== currentImage}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Ambiente de piscina de lujo - Vista ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={100}
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

            {/* Slider Indicators */}
            <div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3"
                role="tablist"
                aria-label="Seleccionar imagen de fondo"
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={index === currentImage}
                        aria-label={`Ver imagen ${index + 1}`}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2 rounded-full transition-all focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none ${index === currentImage
                            ? "w-10 bg-white"
                            : "w-3 bg-white/50 hover:bg-white/75"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
