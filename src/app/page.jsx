import Brands from "@/components/Brands";
import { Hero } from "@/components/pages/home/Hero";
import About from './../components/pages/home/About';
import PrivateLabel from './../components/pages/home/PrivateLabel';
import CTA from './../components/pages/home/CTA';
import Certificari from './../components/pages/home/Certificari';

export default function Acasa() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <PrivateLabel />
      <CTA />
      <Certificari />
    </main>
  );
}
