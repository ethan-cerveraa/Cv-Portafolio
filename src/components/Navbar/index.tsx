'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const LINKS = [
    { href: '#Inicio',    label: 'Inicio.' },
    { href: '#SobreMi',   label: 'Sobre mi.' },
    { href: '#Proyectos', label: 'Proyectos.' },
    { href: '#Habilidades', label: 'Habilidades.' },
    { href: '#Contacto',  label: 'Contacto.' },
];

function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>(LINKS[0].href); // ✅ consistente con LINKS

    // Aparición suave al montar
    useEffect(() => setMounted(true), []);

    // Seguir la sección activa (usa los IDs de tus bloques)
    useEffect(() => {
        const handler = () => {
            const sections = LINKS
                .map(l => document.querySelector(l.href) as HTMLElement | null)
                .filter((el): el is HTMLElement => Boolean(el));

            const y = window.scrollY + window.innerHeight * 0.35;
            for (const s of sections) {
                if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
                    setActive(`#${s.id}`);
                    break;
                }
            }
        };
        handler();
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    // Respetar preferencia guardada (opcional; no causa warnings)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldDark = saved ? saved === 'dark' : prefersDark;
        document.documentElement.classList.toggle('dark', shouldDark);
    }, []);

    return (
        <header
            className={[
                'fixed inset-x-0 top-0 z-50',
                'backdrop-blur',
                'border-b border-white/5',
                'transition-all duration-500',
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3',
            ].join(' ')}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 my-8 flex items-center justify-between">
                {/* Marca */}
                <Link href={LINKS[0].href} className="text-white font-semibold tracking-tight text-xl hover:opacity-90">
                    Ethan Cervera
                </Link>

                {/* Links desktop */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                    {LINKS.map(({ href, label }) => {
                        const isActive = active === href;
                        return (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={[
                                        'text-base text-zinc-300 hover:text-white transition-colors',
                                        'relative after:absolute after:left-0 after:-bottom-2 after:h-[2px]',
                                        'after:rounded-full after:transition-all',
                                        isActive ? 'text-white after:w-full after:bg-white' : 'after:w-0 after:bg-white/60',
                                    ].join(' ')}
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Botón móvil */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={() => setOpen(v => !v)}
                        aria-label="Abrir menú"
                        aria-expanded={open}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-white/10 text-zinc-200 hover:bg-white/10"
                    >
                        {/* ícono hamburguesa / X */}
                        <svg className={`h-5 w-5 ${open ? 'hidden' : 'block'}`} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg className={`h-5 w-5 ${open ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none">
                            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Menú móvil */}
            <div
                className={[
                    'md:hidden overflow-hidden transition-[max-height] bg-black',
                    open ? 'max-h-96' : 'max-h-0',
                ].join(' ')}
            >
                <ul className="px-4 sm:px-6 lg:px-10 pb-4 space-y-2">
                    {LINKS.map(({ href, label }) => {
                        const isActive = active === href;
                        return (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={[
                                        'block rounded-md px-3 py-2 text-sm transition-colors',
                                        isActive ? 'bg-white text-black' : 'text-zinc-300 hover:text-white',
                                    ].join(' ')}
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
