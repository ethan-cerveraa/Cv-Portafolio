import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import MisProyectos from "@/components/MisProyectos ";
import Certificados from "@/components/Certificados";
import MisHabilidades from "@/components/MisHabilidades";
import HabilidadesSociales from "@/components/HabilidadesSociales ";
import Contacto from "@/components/Contacto";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <SobreMi />
        <MisProyectos />
        <Certificados />
        <MisHabilidades />
        <HabilidadesSociales />
        <Contacto />
        <FloatingWhatsApp />
        <Footer />
    </div>
  );
}
