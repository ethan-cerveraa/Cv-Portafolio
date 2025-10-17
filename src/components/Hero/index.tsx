'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/Logo-EC.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Hero() {
    const phrases = useMemo(
        () => ['Frontend Developer.', 'UI/UX Enthusiast.', 'Problem Solver.'],
        []
    );

    const [phraseIndex, setPhraseIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    const typingSpeed = deleting ? 35 : 65;
    const holdTime = 1200;

    useEffect(() => {
        const current = phrases[phraseIndex];
        if (!deleting && subIndex === current.length) {
            const t = setTimeout(() => setDeleting(true), holdTime);
            return () => clearTimeout(t);
        }
        if (deleting && subIndex === 0) {
            setDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const t = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(t);
    }, [subIndex, deleting, phraseIndex, phrases]);

    const typed = phrases[phraseIndex].slice(0, subIndex);

    return (
    <section id="Inicio" aria-label="Sección de inicio" className="relative bg-[#0B0B0C] text-white mt-12 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
        <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-8 md:pt-24 lg:pt-28">
            <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
                {/* LEFT SIDE */}
                <div className="order-2 lg:order-1">
                    {/* Badge */}
                    <span className="inline-block rounded-full bg-white/5 px-4 py-1 text-sm font-semibold text-white/80 ring-1 ring-white/10">
              Jr Software Engineer.
            </span>
                    {/* Title */}
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Hola, soy Ethan
                    </h1>
                    {/* typing line */}
                    <p className="mt-2 text-4xl font-bold text-white/90 sm:text-[28px]">
                        <span>{typed}</span>
                        <span className="caret" />
                    </p>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                        Soy un programador Front-end Developer con 4 años de experiencia. Mi
                        enfoque principal es el diseño y desarrollo de interfaces de usuario
                        intuitivas y receptivas. Tengo experiencia trabajando en equipos
                        colaborativos, donde he demostrado habilidades de comunicación
                        efectiva y capacidad para trabajar bajo presión.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                            Mira mis trabajos.
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                            Contáctame.
                        </a>
                    </div>

                    {/* Social icons */}
                    <div className="mt-7 flex items-center gap-6 text-xl text-white/70">
                        <a href="https://github.com/ethan-cerveraa" target="_blank" className="hover:text-white">
                            <FaGithub size={25}/>
                        </a>
                        <a href="https://www.linkedin.com/in/ethan-cervera-2a4495287/" target="_blank" className="hover:text-white">
                            <FaLinkedin size={25}/>
                        </a>
                        <a href="mailto:devnathee@gmail.com" className="hover:text-white">
                            <IoMdMail size={25}/>
                        </a>
                    </div>

                    {/* Disponible visible solo en mobile/tablet */}
                    <div className="mt-8 flex items-center justify-start sm:justify-center lg:hidden">
                        <div className="flex items-center gap-2 rounded-full bg-[#121316] px-3 py-2 text-sm text-white/90 ring-1 ring-white/10">
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                            Disponible…
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (Solo visible en desktop) */}
                <div className="order-1 hidden lg:block lg:order-2">
                    <div className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[520px]">
                        <div className="relative aspect-square rounded-full border-8 border-[#121316] p-3 md:p-4">
                            <div className="relative h-full w-full rounded-full border-8 border-[#24262B] bg-[#0F1011] p-2 md:p-3">
                                <div className="h-full w-full overflow-hidden rounded-full">
                                    <Image
                                        src={Logo}
                                        alt="Ethan"
                                        className="h-full w-full object-cover"
                                        priority
                                    />
                                </div>

                                {/* Disponible visible solo en desktop */}
                                <div className="absolute -bottom-6 left-4 sm:-bottom-7">
                                    <div className="flex items-center gap-2 rounded-full bg-[#121316] px-3 py-2 text-sm text-white/90 ring-1 ring-white/10">
                      <span className="relative inline-flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </span>
                                        Disponible…
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* estilos locales */}
        <style jsx>{`
        .caret {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          margin-left: 3px;
          background: #ffffff;
          animation: blink 0.9s steps(1) infinite;
          vertical-align: -2px;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
);
}

export default Hero;
