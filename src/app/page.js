// Esta es la pagina principal
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/piscina1.jpg", "/piscina2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Transparent Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Full-screen Image Slider */}
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

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Piscinas CR
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
              Construimos los sueños de tu hogar
            </p>
            <a
              href="#contacto"
              className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>

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
    </div>
  );
}
