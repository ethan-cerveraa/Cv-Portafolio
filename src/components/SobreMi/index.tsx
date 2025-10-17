'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Sobremi from '@/assets/SobreMi.png';
import { HiOutlineUser } from 'react-icons/hi';
import { PiGraduationCap, PiBriefcase } from 'react-icons/pi';

type TabKey = 'personal' | 'educacion' | 'experience';

export default function SobreMi() {
    const [tab, setTab] = useState<TabKey>('personal');

    return (
        <section id="SobreMi" className="bg-[#0B0B0C] text-white overflow-x-clip">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Sobre Mi.</h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded bg-white/20" />
                    <p className="mx-auto mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Soy un Jr Software Engineer con más de 4 años de experiencia creando interfaces
                        modernas, intuitivas y adaptables. Me enfoco en rendimiento, accesibilidad y
                        diseño responsivo bajo metodologías ágiles.
                    </p>
                </div>

                {/* Grid principal */}
                <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
                    {/* Imagen centrada */}
                    <div className="flex items-center justify-center min-w-0">
                        <figure className="relative w-full max-w-2xl overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,.7)]">
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src={Sobremi}
                                    alt="Foto - Sobre mí"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                            </div>
                        </figure>
                    </div>

                    {/* Panel derecho */}
                    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 min-w-0">
                        {/* Tabs */}
                        <TabsGroup tab={tab} onChange={setTab} />

                        {/* Contenido (altura fija + fade) */}
                        <div className="relative mt-6">
                            <div className="min-h-[320px] md:min-h-[300px]">
                                <Fade show={tab === 'personal'}>
                                    <Personal />
                                </Fade>
                                <Fade show={tab === 'educacion'}>
                                    <Education />
                                </Fade>
                                <Fade show={tab === 'experience'}>
                                    <Experience />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ----------------- UI de Tabs ----------------- */
function TabsGroup({
                       tab,
                       onChange,
                   }: {
    tab: TabKey;
    onChange: (t: TabKey) => void;
}) {
    const base =
        'flex items-center justify-center rounded-lg p-3 sm:px-5 sm:py-3 text-[15px] font-semibold transition-colors focus:outline-none min-w-0';
    const inactive = 'text-white/60';
    const active = 'bg-white/10 text-white ring-1 ring-[#EFCB76]';

    return (
        <>
            {/* MÓVIL: solo íconos, bien separados */}
            <div className="sm:hidden flex justify-center gap-5 mt-1">
                <button
                    className={`${base} ${tab === 'personal' ? active : inactive}`}
                    onClick={() => onChange('personal')}
                    type="button"
                    aria-label="Personal"
                >
                    <HiOutlineUser className="text-[28px]" />
                </button>

                <button
                    className={`${base} ${tab === 'educacion' ? active : inactive}`}
                    onClick={() => onChange('educacion')}
                    type="button"
                    aria-label="Educación"
                >
                    <PiGraduationCap className="text-[28px]" />
                </button>

                <button
                    className={`${base} ${tab === 'experience' ? active : inactive}`}
                    onClick={() => onChange('experience')}
                    type="button"
                    aria-label="Experiencias"
                >
                    <PiBriefcase className="text-[28px]" />
                </button>
            </div>

            {/* TABLET / DESKTOP: con texto */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-3">
                {[
                    { k: 'personal', icon: <HiOutlineUser className="text-lg shrink-0" />, txt: 'Personal.' },
                    { k: 'educacion', icon: <PiGraduationCap className="text-lg shrink-0" />, txt: 'Educación.' },
                    { k: 'experience', icon: <PiBriefcase className="text-lg shrink-0" />, txt: 'Experiencias.' },
                ].map(({ k, icon, txt }) => {
                    const activeBtn = tab === (k as TabKey);
                    return (
                        <button
                            key={k}
                            className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-base font-semibold transition min-w-0
                ${
                                activeBtn
                                    ? 'border-[#EFCB76] text-white shadow-[0_0_0_2px_rgba(239,203,118,.9)] bg-white/[0.06]'
                                    : 'border-white/15 bg-white/[0.02] text-white/70 hover:bg-white/[0.06]'
                            }`}
                            onClick={() => onChange(k as TabKey)}
                            type="button"
                            aria-pressed={activeBtn}
                        >
                            {icon}
                            <span className="whitespace-nowrap">{txt}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}

/* ----------------- Contenidos ----------------- */
function Personal() {
    return (
        <div className="space-y-4 text-base leading-relaxed text-white/85 md:text-[17px]">
            <p>
                Hola, soy Ethan Cervera, un apasionado Jr. Software Engineer con 4 años de
                experiencia en el mundo del desarrollo web. Me enfoco en construir interfaces
                atractivas, intuitivas y adaptables, priorizando la experiencia del usuario.
            </p>
            <p>
                Trabajo con <b>React, Next.js, Tailwind CSS, JavaScript y TypeScript</b>, transformando
                ideas en productos funcionales, limpios y bien estructurados.
            </p>
            <p>
                Soy proactivo, detallista y con buena comunicación; me integro con facilidad a equipos
                y entornos dinámicos.
            </p>
        </div>
    );
}

function Education() {
    return (
        <div className="divide-y divide-white/10 text-white/85">
            <div className="py-3">
                <h4 className="font-semibold">Arte Digital y Multimedia</h4>
                <p className="text-white/60">Universidad UTEL - 2024</p>
            </div>
            <div className="py-3">
                <h4 className="font-semibold">DEV.F</h4>
                <p className="text-white/60">Programador - 2023 - 2024</p>
            </div>
            <div className="py-3">
                <h4 className="font-semibold">Santander | Open Academy</h4>
                <p className="text-white/60">Fundamentos de ChatGPT - 2025 - 2025</p>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className="divide-y divide-white/10 text-white/85">
            <div className="py-3">
                <h4 className="font-semibold">Junior Frontend Developer</h4>
                <p className="text-white/60">CloudKeter — 2023–2024</p>
                <p className="mt-2">
                    Interfaces con React, Next.js, TypeScript y Tailwind. Integración con Figma,
                    accesibilidad y performance.
                </p>
            </div>
            <div className="py-3">
                <h4 className="font-semibold">Desarrollador web</h4>
                <p className="text-white/60">Wide Publicity — 2021–2022</p>
                <p className="mt-2">
                    Desarrollo de sitios, mejora de UI/UX y colaboración con equipos de diseño.
                </p>
            </div>
        </div>
    );
}

/* --------- Fade suave sin “saltos” --------- */
function Fade({ show, children }: { show: boolean; children: React.ReactNode }) {
    return (
        <div
            className={[
                'transition-opacity duration-300',
                show ? 'opacity-100' : 'pointer-events-none opacity-0 absolute inset-0',
            ].join(' ')}
        >
            {children}
        </div>
    );
}
