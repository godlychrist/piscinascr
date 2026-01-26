"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-4">
                        <div className="relative h-16 w-16 transition-transform hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt="Piscinas CR Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-white font-semibold text-xl">Piscinas CR</span>
                    </a>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex items-center gap-2">
                        <Link href="/" className="rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Inicio
                        </Link>
                        <Link href="/proyects" className="rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Proyectos
                        </Link>
                        <a href="#contacto" className="rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Contacto
                        </a>

                        <a
                            href="https://wa.me/50687596969"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2 rounded-md bg-indigo-500 px-4 py-2 text-base font-semibold text-white hover:bg-indigo-400"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Mobile button */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10 hover:text-white"
                        aria-label="Abrir menú"
                        aria-expanded={open}
                    >
                        {/* Icon simple */}
                        <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="sm:hidden border-t border-white/10">
                    <div className="mx-auto max-w-screen-2xl px-3 py-3 space-y-2">
                        <Link onClick={() => setOpen(false)} href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Inicio
                        </Link>
                        <Link onClick={() => setOpen(false)} href="/proyects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Proyectos
                        </Link>
                        <Link onClick={() => setOpen(false)} href="#contacto" className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Contacto
                        </Link>
                        <a
                            href="https://wa.me/50687596969"
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-md bg-indigo-500 px-3 py-2 text-base font-semibold text-white hover:bg-indigo-400"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
