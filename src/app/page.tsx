import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import MisHabilidades from "@/components/MisHabilidades";
import HabilidadesSociales from "@/components/HabilidadesSociales ";
import MisProyectos from "@/components/MisProyectos ";
import Contacto from "@/components/Contacto";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <SobreMi />
        <MisHabilidades />
        <HabilidadesSociales />
        <MisProyectos />
        <Contacto />
        <FloatingWhatsApp />
        <Footer />
    </div>
  );
}
