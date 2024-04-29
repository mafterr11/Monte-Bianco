"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const brands = [
  {
    icon: "/marci/puff.png",
    alt: "Logo marca Puff - șervețele, hârtie igienică și batiste de lux",
    fadeSpeed: 0.2,
  },
  {
    icon: "/marci/fiore.png",
    alt: "Logo marca Fiore - șervețele și hârtie igienică",
    fadeSpeed: 0.4,
  },
  {
    icon: "/marci/neve.png",
    alt: "Logo marca Neve - role de hârtie igienică de înaltă calitate",
    fadeSpeed: 0.6,
  },
  {
    icon: "/marci/MBP.png",
    alt: "Logo Monte Bianco Profesional - soluții de hârtie pentru afaceri",
    fadeSpeed: 0.8,
  },
  {
    icon: "/marci/horeca.png",
    alt: "Logo Horeca - produse de hârtie pentru hoteluri, restaurante și cafenele",
    fadeSpeed: 1,
    class: "max-md:absolute left-24 bottom-20"
  },
];

const Brands = () => {
  return (
    <section className="max-md:container max-md:grid max-md:grid-cols-2 max-md:gap-12 flex flex-row items-center justify-center xl:gap-x-28 max-md:pt-28 max-md:pb-40 py-24 relative">
      {brands.map((brand, index) => (
        <motion.div  
        variants={fadeIn('down', brand.fadeSpeed)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        key={index}
        className={`${brand.class} z-40`}
        >
          <Image src={brand.icon} width={180} height={70} alt={brand.alt} className="h-auto" />
        </motion.div>
      ))}
      <div className='absolute inset-0 z-50'></div>
    </section>
  );
};

export default Brands;
