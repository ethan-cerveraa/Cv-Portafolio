'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Sazon from '@/assets/LaSazon.png';
import Once from '@/assets/OnceUponTime.png';
import Mind from '@/assets/MindScope.png';
import TarjetaDigitales from "@/assets/TarjetasDigitales.png"
import Luft from '@/assets/Luft.png';
import LunaArana from '@/assets/LunaArana.png';
import Evoke from '@/assets/Evoke.png';
import AlcerGroup from '@/assets/AlcerGroup.png';

/* =========================================================
   👉 Datos (agrega/edita proyectos aquí)
   - Para añadir un proyecto nuevo, solo agrega otro objeto
     al arreglo "PROJECTS". No hay que tocar el JSX.
   ========================================================= */
type Project = {
    title: string;
    image: StaticImageData;
    description: string;
    stack: string[];           // chips de tecnologías
    href?: string;             // demo o detalle (opcional)
    repo?: string;             // repositorio (opcional)
};

const PROJECTS: Project[] = [
    {
        title: 'La Sazón de Hopper',
        image: Sazon,
        description:
            'Página web personalizada para un negocio de catering con enfoque elegante.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://lasazonhopper.com/', // cambia por tu URL pública si la tienes
    },
    {
        title: 'Once Upon a Time',
        image: Once,
        description:
            'Explora destinos del mundo con experiencias únicas guiadas por expertos.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://once-upona-time.netlify.app/',
    },
    {
        title: 'MindScope',
        image: Mind,
        description:
            'Solución en la nube para optimizar la administración de pruebas psicométricas.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://mindscope-landing.netlify.app/',
    },
    {
        title: 'Luft',
        image: Luft,
        description:
            'Proyectos de aire lavado, maquinas y proyectos de aire acondicionado, Somos Proveedores de confianza.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://luft.com.mx/',
    },
    {
        title: 'Luna Arana',
        image: LunaArana,
        description:
            'En LUNA ARANA te ofrecemos diversas opciones de hospedaje y vivienda para distintos gustos y necesidades.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://lunaarana.com/',
    },
    {
        title: 'Alcer Group',
        image: AlcerGroup,
        description:
            'Alcer Group como un grupo empresarial enfocado en soluciones integrales para industria, tecnología y servicios especializados.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://alcergroup.com/',
    },
    {
        title: 'Evoke',
        image: Evoke,
        description:
            'Landing page enfocada en Evoke, una unidad especializada de AlCer Group orientada a proyectos creativos y tecnológicos. El sitio prioriza la experiencia visual.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://evoke.alcergroup.com/',
    },
    {
        title: 'Tarjetas Digitales',
        image: TarjetaDigitales,
        description:
            'Creación de tarjetas digitales para empresas y tarjetas personales.',
        stack: ['Next.js', 'Tailwind CSS', 'React', 'Figma', 'JavaScript', 'TypeScript'],
        href: 'https://avalia.avaliadentalgroup.com/',
    },
];

/* ======================= Card ======================= */

function ProjectCard({ p }: { p: Project }) {
    return (
        <article
            className="
        group overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10
        shadow-[0_10px_30px_-12px_rgba(0,0,0,.65)] transition
        hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_14px_40px_-12px_rgba(0,0,0,.7)]
      "
        >
            {/* Imagen */}
            <a href={p.href ?? '#'} target={p.href ? '_blank' : undefined} rel="noopener noreferrer">
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        priority
                        className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    {/* sutil overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
            </a>

            {/* Texto */}
            <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.description}</p>

                {/* Chips de stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                        <span
                            key={tech}
                            className="
                rounded-full border border-white/15 bg-white/[0.04]
                px-3 py-1 text-xs font-semibold text-white/80
              "
                        >
              {tech}
            </span>
                    ))}
                </div>

                {/* Acciones (opcional) */}
                {(p.href || p.repo) && (
                    <div className="mt-4 flex gap-3">
                        {p.href && (
                            <a
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-black hover:opacity-90"
                            >
                                Ver proyecto
                            </a>
                        )}
                        {p.repo && (
                            <a
                                href={p.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/5"
                            >
                                Repositorio
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

/* =================== Componente principal =================== */

export default function MisProyectos() {
    return (
        <section id="Proyectos" className="bg-[#0B0B0C] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Mis Proyectos</h2>
                    <div className="mx-auto mt-2 h-1 w-28 rounded bg-white/20" />
                    <p className="mx-auto mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Explora mis últimos proyectos en los que aplico mis habilidades para
                        crear aplicaciones web funcionales y atractivas.
                    </p>
                </div>

                {/* Grid */}
                <div
                    className="
            mt-12 grid gap-6 sm:gap-7
            md:grid-cols-2 xl:grid-cols-3
          "
                >
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.title} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
