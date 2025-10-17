'use client';
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function Contacto() {
    return (
        <section id="Contact" className="bg-[#0B0B0C] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Ponte en contacto</h2>
                    <div className="mx-auto mt-2 h-1 w-28 rounded bg-white/20" />
                    <p className="mx-auto mt-6 max-w-3xl text-white/70 leading-relaxed">
                        ¿Tienes un proyecto en mente o quieres hablar de posibles oportunidades?
                        Estaré encantado de conocerte.
                    </p>
                </div>

                {/* Grid principal (info + social/estado) */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {/* IZQUIERDA: Información de contacto */}
                    <div className="space-y-4">
                        <h3 className="mb-2 text-xl font-semibold">Información de contacto.</h3>

                        <ContactItem
                            icon={<MdOutlineEmail size={20} />}
                            title="Gmail"
                            content={
                                <a href="mailto:devnathee@gmail.com" className="hover:underline decoration-white/30">
                                    devnathee@gmail.com
                                </a>
                            }
                        />
                        <ContactItem
                            icon={<FaPhoneAlt size={18} />}
                            title="Teléfono"
                            content={
                                <a href="tel:+525514005619" className="hover:underline decoration-white/30">
                                    +52 (55) 1400 5619
                                </a>
                            }
                        />

                        <ContactItem
                            icon={<FaLocationDot size={20} />}
                            title="Ubicación"
                            content={<span>Ciudad de México</span>}
                        />
                    </div>

                    {/* DERECHA: Social + Estado */}
                    <div className="space-y-4">
                        <h3 className="mb-2 text-xl font-semibold">Conéctate conmigo.</h3>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://github.com/ethan-cerveraa"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/10"
                                rel="noreferrer"
                            >
                                <FaGithub />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ethan-cervera-2a4495287/"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/10"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                                LinkedIn
                            </a>
                        </div>

                        {/* Estado / Disponible */}
                        <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                            <h4 className="text-lg font-semibold">Situación actual</h4>

                            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#121316] px-3 py-2 text-sm text-white/90 ring-1 ring-white/10">
                <span className="relative inline-flex h-2.5 w-2.5">
                  {/* halo que parpadea */}
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                    {/* punto */}
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                </span>
                                <span className="font-semibold">Disponible para trabajos</span>
                            </div>

                            <p className="mt-4 text-sm text-white/70">
                                Actualmente estoy buscando nuevas oportunidades. Si tienes un proyecto que
                                necesite mi experiencia, ¡no dudes en ponerte en contacto conmigo!
                            </p>
                        </div>
                    </div>
                </div>

                {/* FORMULARIO – ancho completo */}
                <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                    <h3 className="text-xl font-semibold tracking-wider">Contáctanos</h3>

                    <form
                        action="https://formsubmit.co/lunaaranamexico@gmail.com"
                        method="POST"
                        className="mt-6 space-y-6"
                    >
                        {/* FormSubmit config */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="Contacto web - Portafolio" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" className="hidden" />

                        {/* Nombre / Apellido */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Field label="Nombre" htmlFor="nombre">
                                <input
                                    id="nombre"
                                    name="Nombre"
                                    required
                                    className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                                />
                            </Field>

                            <Field label="Apellido" htmlFor="apellido">
                                <input
                                    id="apellido"
                                    name="Apellido"
                                    required
                                    className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                                />
                            </Field>
                        </div>

                        {/* Email */}
                        <Field label="Email" htmlFor="email">
                            <input
                                id="email"
                                type="email"
                                name="Email"
                                required
                                className="w-full border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
                            />
                        </Field>

                        {/* Interés */}
                        <div>
                            <span className="block text-sm mb-3 text-white/90">Me interesa:</span>
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input type="radio" name="Interes" value="Rentar" required className="accent-white"/>
                                    Pagina Web
                                </label>
                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input type="radio" name="Interes" value="Servicio Extra" className="accent-white" />
                                    Landing Page
                                </label>
                                <label className="inline-flex cursor-pointer items-center gap-2">
                                    <input type="radio" name="Interes" value="Servicio Extra" className="accent-white" />
                                    Otro
                                </label>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <Field label="Mensaje" htmlFor="mensaje">
              <textarea
                  id="mensaje"
                  name="Mensaje"
                  rows={4}
                  className="w-full resize-none border-b border-white/30 bg-transparent py-2 outline-none transition focus:border-white"
              />
                        </Field>

                        {/* Botón enviar (verde parpadeo sutil al icono-punto) */}
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="
                  inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-2
                  text-sm font-semibold text-black transition hover:bg-emerald-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400/50
                "
                            >
                <span className="relative inline-flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black/50"></span>
                </span>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ---------- Subcomponentes ---------- */

function ContactItem({
                         icon,
                         title,
                         content,
                     }: {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}) {
    return (
        <div
            className="
        flex items-center gap-4 rounded-2xl bg-white/5 p-5
        ring-1 ring-white/10 transition hover:bg-white/7
      "
        >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="text-sm text-white/60">{title}</div>
                <div className="truncate text-[15px] font-medium">{content}</div>
            </div>
        </div>
    );
}

function Field({
                   label,
                   htmlFor,
                   children,
               }: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <label htmlFor={htmlFor} className="block text-sm">
            <span className="mb-2 block text-white/90">{label}</span>
            {children}
        </label>
    );
}
