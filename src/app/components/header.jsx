"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-1"
            : "bg-gradient-to-b from-black/60 to-transparent py-4"
            }`}>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt={`${SITE_NAME} Logo`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"
                            }`}>
                            Piscinas <span className="text-indigo-500">Costa Rica</span>
                        </span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {[
                            { name: 'Inicio', href: '/' },
                            { name: 'Proyectos', href: '/proyects' },
                            { name: 'Contacto', href: '/contacto' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${scrolled
                                    ? "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                    : "text-white/90 hover:bg-white/20 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

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
                        className={`md:hidden inline-flex items-center justify-center rounded-full p-3 transition-colors ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/20"
                            }`}
                        aria-label="Abrir menú"
                    >
                        <span className="text-2xl font-bold">{open ? "✕" : "☰"}</span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden bg-white shadow-2xl ${open ? "max-h-[400px] border-t border-gray-100" : "max-h-0"
                }`}>
                <div className="px-6 py-8 space-y-4">
                    {[
                        { name: 'Inicio', href: '/' },
                        { name: 'Proyectos', href: '/proyects' },
                        { name: 'Contacto', href: '/contacto' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            onClick={() => setOpen(false)}
                            href={link.href}
                            className="block text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4">
                        <a
                            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-center rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200"
                        >
                            WhatsApp Directo
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
