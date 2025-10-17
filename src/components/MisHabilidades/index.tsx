'use client';
import React, { useEffect, useRef, useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { VscTools } from 'react-icons/vsc';
import { GrStorage } from 'react-icons/gr';

/* ================== DATA ================== */
const GROUPS: {
    title: string;
    icon?: React.ReactNode;
    items: { label: string; percent: number; color: string }[];
}[] = [
    {
        title: 'Technology.',
        items: [
            { label: 'HTML/CSS', percent: 95, color: 'from-orange-500 to-rose-500' },
            { label: 'JavaScript', percent: 90, color: 'from-yellow-400 to-yellow-500' },
            { label: 'TypeScript', percent: 90, color: 'from-sky-400 to-sky-600' },
            { label: 'React', percent: 85, color: 'from-cyan-400 to-sky-500' },
        ],
    },
    {
        title: 'Tools.',
        items: [
            { label: 'Node.js', percent: 70, color: 'from-emerald-500 to-lime-500' },
            { label: 'GitHub', percent: 88, color: 'from-slate-100 to-slate-300' },
            { label: 'Git', percent: 90, color: 'from-orange-500 to-rose-500' },
            { label: 'Tailwind CSS', percent: 90, color: 'from-cyan-400 to-teal-400' },
        ],
    },
    {
        title: 'Others.',
        items: [
            { label: 'Docker', percent: 45, color: 'from-sky-400 to-sky-600' },
            { label: 'Figma', percent: 70, color: 'from-white to-slate-200' },
            { label: 'UI/UX', percent: 84, color: 'from-fuchsia-500 to-pink-500' },
            { label: 'Next.js', percent: 85, color: 'from-neutral-900 to-neutral-700' },
        ],
    },
];

/* -------------- Hook: in-view -------------- */
function useInView<T extends HTMLElement>(margin = '0px 0px -80px 0px') {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect(); // dispara una sola vez
                    }
                });
            },
            { root: null, rootMargin: margin, threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [margin]);

    return { ref, visible };
}

/* -------------- ProgressBar -------------- */
function ProgressBar({
                         label,
                         percent,
                         color,
                         animate,
                     }: {
    label: string;
    percent: number;
    color: string; // Tailwind gradient classes, e.g. "from-cyan-400 to-blue-500"
    animate: boolean;
}) {
    return (
        <div className="w-full">
            <div className="mb-2 flex items-end justify-between text-[13px] sm:text-sm">
                <span className="text-white/90">{label}</span>
                <span className="text-white/60">{percent}%</span>
            </div>

            <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                    className={[
                        'h-full rounded-full bg-gradient-to-r',
                        color,
                        'transition-[width] duration-[1200ms] ease-out',
                    ].join(' ')}
                    style={{ width: animate ? `${percent}%` : '0%' }}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={animate ? percent : 0}
                    role="progressbar"
                />
            </div>
        </div>
    );
}

/* ================= Component ================= */
export default function MisHabilidades() {
    const { ref, visible } = useInView<HTMLDivElement>();

    // Íconos asignados por grupo (índice 0,1,2)
    const ICONS = [
        <GrTechnology key="tech" className="text-white/90" size={18} />,
        <VscTools key="tools" className="text-white/90" size={18} />,
        <GrStorage key="others" className="text-white/90" size={18} />,
    ];

    return (
        <section id="Habilidades" className="bg-[#0B0B0C] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Mis Habilidades.</h2>
                    <div className="mx-auto mt-2 h-1 w-28 rounded bg-white/20" />
                    <p className="mx-auto mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Estas son las tecnologías y herramientas que he adquirido a lo largo de mi
                        trayectoria.
                    </p>
                </div>

                {/* Grilla */}
                <div
                    ref={ref}
                    className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
                >
                    {GROUPS.map((group, i) => (
                        <div
                            key={group.title}
                            className="rounded-2xl bg-white/5 p-5 sm:p-6 ring-1 ring-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,.6)]"
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className="grid place-items-center h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/10">
                                    {ICONS[i] /* <- tu icono aquí */}
                                </div>
                                <h3 className="text-xl font-semibold">{group.title}</h3>
                            </div>

                            <div className="space-y-5">
                                {group.items.map((it) => (
                                    <ProgressBar
                                        key={it.label}
                                        label={it.label}
                                        percent={it.percent}
                                        color={it.color}
                                        animate={visible}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
