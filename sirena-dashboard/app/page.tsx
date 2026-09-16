import Hero from "@/components/sections/Hero";
import MapaSection from "@/components/sections/MapaSection";
import BeneficiosSection from "@/components/sections/BeneficiosSection";
import CaracteristicasSection from "@/components/sections/CaracteristicasSection";
import ContactoSection from "@/components/sections/ContactoSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <MapaSection />
      <BeneficiosSection />
      <CaracteristicasSection />
      <ContactoSection />
      <Footer />
    </>
  );
}
