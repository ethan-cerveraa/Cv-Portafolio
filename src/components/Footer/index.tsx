'use client';

import React from 'react';

/**
 * Footer
 * - 4 columnas (marca, enlaces, contacto, mensaje)
 * - Totalmente responsive
 * - Botón flotante “ir arriba” con scroll suave
 */
export default function Footer() {
    const year = new Date().getFullYear();

    const scrollTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#141415] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold">Ethan Cervera</h3>
                        <p className="mt-3 max-w-xs text-white/70">
                            Creación de experiencias digitales excepcionales con tecnologías web
                            modernas.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
                        <ul className="mt-4 space-y-2 text-white/80">
                            <li>
                                <a className="hover:text-white" href="#Inicio">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#SobreMi">
                                    Sobre mi
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#Habilidades">
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#Proyectos">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-white" href="#Contacto">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-lg font-semibold">Contact Info</h4>
                        <ul className="mt-4 space-y-2 text-white/80">
                            <li>Ciudad De Mexico.</li>
                            <li>
                                <a
                                    href="mailto:devnathee@gmail.com"
                                    className="hover:text-white"
                                >
                                    devnathee@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+5215661201760" className="hover:text-white">
                                    +52 1 56 6120 1760
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mensaje */}
                    <div>
                        <h4 className="text-lg font-semibold">Espero que pueda ayudarte.</h4>
                        <p className="mt-4 max-w-sm text-white/70">
                            Espero que mis servicios sean de gran ayuda para ustedes, Estoy a
                            sus órdenes.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-white/10" />

                {/* Bottom bar */}
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-white/60">
                        © {year} Ethan Cervera. All rights reserved.
                    </p>

                    {/* To top button */}
                    <button
                        onClick={scrollTop}
                        aria-label="Volver arriba"
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                        title="Ir arriba"
                    >
                        <svg
                            className="h-4 w-4 text-white/80 transition group-hover:text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
