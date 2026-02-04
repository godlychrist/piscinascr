"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Piscina ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={100}
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2 rounded-full transition-all ${index === currentImage
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
