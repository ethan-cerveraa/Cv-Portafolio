'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import Image, { type StaticImageData } from 'next/image';
import DevF from '@/assets/DevF.png';
import Santander from '@/assets/Santander.png';

type Slide = {
    img: StaticImageData;   // ✅ en lugar de "any"
    title: string;
    desc: string;
};
const SLIDES: Slide[] = [
    {
        img: DevF,
        title: 'DEV.F – Programador',
        desc: 'Formación intensiva en desarrollo web: React, Next.js, TypeScript y mejores prácticas.',
    },
    {
        img: Santander,
        title: 'Santander | Open Academy',
        desc: 'Fundamentos de IA/ChatGPT. Enfoque en productividad, prompts y ética.',
    },
];

export default function Certificados() {
    const [index, setIndex] = useState(0);
    // ✅ Compatible en browser y Node: evita errores de tipo
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const touchStart = useRef<number | null>(null);

    const next = useCallback(
        () => setIndex((i) => (i + 1) % SLIDES.length),
        []
    );

    const prev = useCallback(
        () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
        []
    );

    const stop = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    const start = useCallback(() => {
        stop();
        timeoutRef.current = setTimeout(next, 6000);
    }, [next, stop]);

    // ⏱️ Auto-slide con deps correctas (sin warnings)
    useEffect(() => {
        start();
        return () => stop();
    }, [index, start, stop]);

    // Soporte táctil (mobile)
    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStart.current == null) return;
        const diff = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(diff) > 50) (diff > 0 ? prev() : next());
        touchStart.current = null;
    };

    // Navegación por teclado
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [next, prev]);

    return (
        <section id="certificados" className="bg-[#0B0B0C] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Mis Certificados</h2>
                    <div className="mx-auto mt-2 h-1 w-28 rounded bg-white/20" />
                    <p className="mx-auto mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Un vistazo a cursos y acreditaciones que respaldan mi experiencia.
                    </p>
                </div>

                {/* Carrusel */}
                <div
                    className="relative mx-auto mt-10 max-w-4xl select-none"
                    onMouseEnter={stop}
                    onMouseLeave={start}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Slides */}
                    <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {SLIDES.map((s, i) => (
                                <article
                                    key={s.title + i}
                                    className="w-full shrink-0 grid gap-0 md:grid-cols-2"
                                    aria-roledescription="slide"
                                    aria-label={`${i + 1} de ${SLIDES.length}`}
                                >
                                    {/* Imagen */}
                                    <div className="relative aspect-[16/10] w-full md:aspect-auto md:h-[300px]">
                                        <Image
                                            src={s.img}
                                            alt={s.title}
                                            fill
                                            priority={i === index}
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>

                                    {/* Texto */}
                                    <div className="flex flex-col justify-center gap-3 p-6">
                                        <h3 className="text-xl font-semibold sm:text-2xl">{s.title}</h3>
                                        <p className="text-white/70 leading-relaxed">{s.desc}</p>
                                        <div className="mt-2 text-sm text-white/50">
                                            Certificado {i + 1} / {SLIDES.length}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Controles */}
                    <button
                        onClick={prev}
                        aria-label="Anterior"
                        className="group absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90 group-hover:opacity-100">
                            <path fill="currentColor" d="M15.5 19L8.5 12l7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        aria-label="Siguiente"
                        className="group absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90 group-hover:opacity-100">
                            <path fill="currentColor" d="M8.5 5l7 7l-7 7" />
                        </svg>
                    </button>

                    {/* Indicadores */}
                    <div className="mt-5 flex items-center justify-center gap-2">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Ir al certificado ${i + 1}`}
                                className={[
                                    'h-2.5 w-2.5 rounded-full transition-all',
                                    index === i ? 'w-6 bg-white' : 'bg-white/40 hover:bg-white/70',
                                ].join(' ')}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
