"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Proyectos', href: '/proyects' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <header>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-lg py-1"
                    : "bg-gradient-to-b from-black/60 to-transparent py-4"
                    }`}
                aria-label="Navegación principal"
            >
                <div className="mx-auto max-w-full px-2 sm:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-4 group" aria-label={`Ir al inicio de ${SITE_NAME}`}>
                            <div className="relative h-20 w-20 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="" // Decorativo porque el nombre está al lado
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className={`font-black text-2xl md:text-3xl tracking-tighter transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"
                                }`}>
                                Piscinas <span className="text-indigo-500">Costa Rica</span>
                            </span>
                        </Link>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${scrolled
                                            ? isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                            : isActive ? "bg-white text-indigo-600" : "text-white/90 hover:bg-white/20 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            <a
                                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="ml-4 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-extrabold text-white uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30"
                            >
                                WhatsApp
                            </a>
                        </div>

                        {/* Mobile button */}
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            className={`md:hidden inline-flex items-center justify-center rounded-full p-3 transition-colors ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/20"
                                }`}
                            aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        >
                            <span className="text-2xl font-bold" aria-hidden="true">{open ? "✕" : "☰"}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile menu - Floating Island Style */}
                <div
                    id="mobile-menu"
                    className={`md:hidden absolute top-24 right-6 w-72 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[60] ${open
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-90 -translate-y-4 pointer-events-none"
                        }`}
                >
                    <div className="bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden">
                        <div className="p-6 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        onClick={() => setOpen(false)}
                                        href={link.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`flex items-center justify-between group rounded-[1.5rem] px-5 py-4 transition-all ${isActive ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"
                                            }`}
                                    >
                                        <span className={`text-lg font-bold ${isActive ? 'text-white' : scrolled ? 'text-gray-800' : 'text-gray-900'} group-hover:text-white transition-colors`}>
                                            {link.name}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full ${isActive ? "bg-white/20" : "bg-indigo-50"} group-hover:bg-white/20 flex items-center justify-center transition-colors`}>
                                            <svg className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-600'} group-hover:text-white transform group-hover:translate-x-0.5 transition-all`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Link>
                                );
                            })}

                            <div className="pt-4 px-2">
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-3 rounded-[1.5rem] bg-indigo-600 px-6 py-5 text-base font-black text-white shadow-xl shadow-indigo-200 active:scale-95 transition-all hover:bg-indigo-700"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Click-outside overlay */}
                {open && (
                    <div
                        className="fixed inset-0 z-[55] md:hidden"
                        onClick={() => setOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </nav>
        </header>
    );
}
