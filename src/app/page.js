// Esta es la pagina principal
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/piscina1.jpeg", "/piscina2.jpeg"];

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

      {/* Nuestra Historia Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-16"></div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Piscinas Costa Rica
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    La división construcción de <span className="font-semibold text-indigo-600">Mercado Digital</span>,
                    se llama Piscinas Costa Rica.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Actualmente hemos construido y entregado satisfactoriamente{" "}
                    <span className="font-bold text-indigo-600 text-2xl">179 piscinas</span>{" "}
                    a nuestros clientes abarcando zonas desde:
                  </p>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Talamanca</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Limón</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Siquirres</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Guápiles</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>San Carlos</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Grecia</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Sarchi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Alajuela</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Guanacaste</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Heredia</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Cartago</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Uvita</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Osa</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Palmar</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Jaco</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600 italic mt-4">
                    Y continuamos expandiendo nuestra cobertura por todo Costa Rica...
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/piscina3.jpeg"
                  alt="Piscina Costa Rica"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
