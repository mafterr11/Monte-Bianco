"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const brands = [
  {
    icon: "/marci/puff.png",
    name: "Logo marca Puff",
    fadeSpeed: 0.2,
  },
  {
    icon: "/marci/fiore.png",
    name: "Logo marca Fiore",
    fadeSpeed: 0.4,
  },
  {
    icon: "/marci/neve.png",
    name: "Logo marca Neve",
    fadeSpeed: 0.6,
  },
  {
    icon: "/marci/montebianco.png",
    name: "Logo marca Monte Bianco Profesional",
    fadeSpeed: 0.8,
  },
  {
    icon: "/marci/horeca.png",
    name: "Logo marca Horeca",
    fadeSpeed: 1,
  },
];

const Brands = () => {
  return (
    <section className="max-md:container max-md:grid max-md:grid-cols-2 max-md:gap-12 flex flex-row items-center justify-center xl:gap-x-28 max-md:pt-32 py-24">
      {brands.map((brand, index) => (
        <motion.div  
        variants={fadeIn('down', brand.fadeSpeed)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        key={index}>
          <Image src={brand.icon} width={150} height={70} alt={brand.name} className="w-auto" />
        </motion.div>
      ))}
    </section>
  );
};

export default Brands;
