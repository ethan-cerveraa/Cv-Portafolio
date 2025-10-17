'use client';
import React from 'react';
import { LuRocket } from 'react-icons/lu';
import { GrStorage } from 'react-icons/gr';
import { TbWorld } from 'react-icons/tb';
import { FaPenNib, FaRegClock } from 'react-icons/fa';
import { IoCodeSharp } from 'react-icons/io5';

type SocialSkill = {
    label: string;
    Icon: React.ComponentType<{ className?: string; size?: number }>;
};

const SKILLS: SocialSkill[] = [
    { label: 'Resolución de problemas', Icon: LuRocket },
    { label: 'Trabajo en equipo', Icon: GrStorage },
    { label: 'Comunicación', Icon: TbWorld },
    { label: 'Atención al detalle', Icon: FaPenNib },
    { label: 'Gestión del tiempo', Icon: FaRegClock },
    { label: 'Aprendizaje continuo', Icon: IoCodeSharp },
];

function HabilidadesSociales() {
    return (
        <section className="bg-[#0B0B0C] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-16">
                {/* Título */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Habilidades sociales</h2>
                    <div className="mx-auto mt-2 h-1 w-28 rounded bg-white/20" />
                </div>

                {/* Grid de tarjetas */}
                <div
                    className="
            mt-10 grid gap-4
            grid-cols-1
            xs:grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
          "
                >
                    {SKILLS.map(({ label, Icon }) => (
                        <article
                            key={label}
                            className="
                group rounded-2xl bg-white/[0.07] p-5
                ring-1 ring-white/10
                shadow-[0_10px_25px_-15px_rgba(0,0,0,.8)]
                transition
                hover:bg-white/[0.1]
                hover:shadow-[0_18px_35px_-20px_rgba(0,0,0,.9)]
                flex flex-col items-center justify-center text-center
              "
                            aria-label={label}
                        >
                            {/* Icono */}
                            <div
                                className="
                  grid place-items-center h-12 w-12 rounded-full
                  bg-black/60 ring-1 ring-white/10
                  transition
                  group-hover:bg-black/70
                  mb-4
                "
                            >
                                <Icon className="text-white" size={20} />
                            </div>

                            {/* Texto */}
                            <h3 className="text-[15px] font-semibold leading-tight text-white/90">
                                {label}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HabilidadesSociales;
