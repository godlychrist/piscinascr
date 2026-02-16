import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSlider from "./components/HeroSlider";
import ProjectSlider from "./components/ProjectSlider";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: `${SITE_NAME} | Inicio`,
  description: "Construimos y mantenemos las mejores piscinas de Costa Rica. Más de 179 proyectos entregados satisfactoriamente con calidad premium.",
};

export default function Home() {
  const images = ["/piscina1.jpeg", "/piscina2.jpeg", "/piscina3.jpeg"];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section - Full Height */}
      <section id="inicio" className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <HeroSlider images={images} />

        {/* Overlay with Gradient for visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-5xl px-6 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
              Piscinas <span className="text-brand-cyan">Costa Rica</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg text-white">
              Especialistas en diseño, fabricación, restauración e instalación de piscinas.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contacto"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-cyan text-white font-black px-10 py-5 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl shadow-brand-blue/40"
              >
                Solicitar Cotización
              </a>
              <a
                href="/proyects"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-5 rounded-2xl text-xl transition-all"
              >
                Ver Galería
              </a>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section id="sobre-nosotros" className="relative z-30 -mt-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Años de Experiencia', value: '10+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-brand-blue to-brand-cyan' },
            { label: 'Proyectos Entregados', value: '600+', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'from-brand-blue to-brand-teal' },
            { label: 'Clientes Satisfechos', value: '100%', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5', color: 'from-brand-teal to-brand-cyan' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-50 flex flex-col items-center text-center transition-all hover:-translate-y-4 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20 text-white`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -left-10 -top-10 w-64 h-64 bg-brand-cyan/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-teal/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="relative">
                <span className="text-brand-blue font-black text-sm uppercase tracking-[0.3em] mb-4 block">Nuestra Trayectoria</span>
                <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
                  Una Historia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Familia y Visión</span>
                </h3>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Piscinas Costa Rica nació hace <span className="font-bold text-gray-900">10 años</span> en La Palmera de San Carlos, del sueño de una familia de <span className="font-bold text-gray-900">siete hermanos</span> que decidió apostar por el trabajo duro, la disciplina y la unión para construir una empresa propia y dejar huella en el país.
                  </p>
                  <p>
                    Después de probar distintos caminos en <span className="font-bold text-gray-900">Mercado digital</span>, encontraron la oportunidad que transformó su historia: <span className="font-bold text-brand-blue uppercase">fabricar piscinas</span>. Desde el primer proyecto entendieron que no se trataba solo de construir, sino de entregar calidad real, con materiales de alto nivel, acabados impecables, tiempos de entrega rápidos y una <span className="italic">atención al cliente que marca la diferencia</span>.
                  </p>
                  <p>
                    Ese compromiso nos llevó a crecer sin detenernos. Hoy somos una de las empresas líderes del sector, con más de <span className="font-bold text-brand-blue">600 piscinas construidas</span> en todo Costa Rica y un equipo experto que domina cada etapa del proceso: <span className="text-brand-teal font-medium">diseño, fabricación, instalación y mantenimiento</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan to-brand-teal rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/piscina2.jpeg"
                    alt="Historia de éxito Piscinas Costa Rica"
                    width={800}
                    height={1000}
                    className="object-cover h-[600px] w-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                    <p className="text-white font-medium italic text-lg shadow-text">
                      "Piscinas Costa Rica no solo construye piscinas: construye sueños, confianza y proyectos que aumentan el valor de tu hogar."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-cyan/10 p-8 rounded-3xl border border-brand-cyan/20">
              <h4 className="text-xl font-black text-brand-teal mb-4">Innovación Constante</h4>
              <p className="text-gray-700">Hoy también desarrollamos casas modulares, llevando el mismo estándar de excelencia que nos convirtió en referencia nacional en piscinas.</p>
            </div>
            <div className="bg-brand-teal/10 p-8 rounded-3xl border border-brand-teal/20">
              <h4 className="text-xl font-black text-brand-blue mb-4">Nuestro Éxito</h4>
              <p className="text-gray-700">Nuestro éxito se basa en algo simple pero poderoso: cumplimos lo que prometemos y superamos expectativas. Por eso, cientos de familias ya disfrutan de una piscina hecha por nuestro equipo, y cada nuevo proyecto es una oportunidad para demostrar por qué somos la mejor opción del país.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Excellence Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-blue font-black text-sm uppercase tracking-[0.3em] mb-4 block">Nuestro Compromiso</span>
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
              Calidad que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Perdura</span>
            </h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              En {SITE_NAME}, no solo construimos piscinas; creamos el centro de entretenimiento de tu hogar.
              Utilizamos materiales de primera y tecnología de punta para garantizar durabilidad y bajo mantenimiento.
            </p>
            <div className="space-y-6">
              {[
                'Construcción en Concreto y Fibra de Vidrio',
                'Sistemas de Automatización Inteligente',
                'Mantenimiento Especializado Profesional',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-lg font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-brand-cyan/10 rounded-[3rem] -rotate-3"></div>
            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/piscina3.jpeg"
                alt={`Proyecto de piscina de lujo por ${SITE_NAME}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Using our new Slider */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-brand-blue font-black text-sm uppercase tracking-[0.3em] mb-4 text-center md:text-left block">Portafolio Premium</span>
            <h3 className="text-5xl font-black text-gray-900 text-center md:text-left tracking-tight">Proyectos <span className="text-brand-blue underline decoration-brand-cyan/30 underline-offset-8">Destacados</span></h3>
          </div>
          <a href="/proyects" className="bg-white border-2 border-brand-blue text-brand-blue font-bold px-8 py-4 rounded-2xl hover:bg-brand-blue hover:text-white transition-all text-center">
            Ver todos los proyectos
          </a>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4">
          <ProjectSlider limit={2} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
