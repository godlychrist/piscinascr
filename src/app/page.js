// Esta es la pagina principal
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

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
    <>
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
      {/* Sobre Nosotros Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Experience */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-indigo-600 mb-2">1+</h3>
              <p className="text-gray-600 font-medium text-lg">Año de experiencia en la construcción de piscinas</p>
            </div>

            {/* Card 2 - Pools Built */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600 font-medium text-lg">Piscinas construidas</p>
            </div>

            {/* Card 3 - Satisfied Clients */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-5xl font-bold text-green-600 mb-2">100+</h3>
              <p className="text-gray-600 font-medium text-lg">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
