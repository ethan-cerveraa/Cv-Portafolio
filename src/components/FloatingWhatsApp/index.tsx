'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=+5215661201760&text=Me%20interesan%20tus%20servicios,%20me%20podrias%20ayudar."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat por WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg transition-all duration-300 hover:scale-110"
        >
            <FaWhatsapp size={22} className="animate-pulse" />
        </a>
    );
}
