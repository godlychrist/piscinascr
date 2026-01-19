"use client";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur border-b border-white/10">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-indigo-500/90" />
                        <span className="text-white font-semibold">Piscinas CR</span>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex items-center gap-2">
                        <a href="#inicio" className="rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Inicio
                        </a>
                        <a href="#proyectos" className="rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Proyectos
                        </a>
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
                    <div className="mx-auto max-w-screen-2xl px-4 py-3 space-y-2">
                        <a onClick={() => setOpen(false)} href="#inicio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Inicio
                        </a>
                        <a onClick={() => setOpen(false)} href="#proyectos" className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Proyectos
                        </a>
                        <a onClick={() => setOpen(false)} href="#contacto" className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white">
                            Contacto
                        </a>
                        <a
                            href="https://wa.me/506XXXXXXXX"
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
