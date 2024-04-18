"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';

const certificate = [
  {
    icon: "/certificari/1.png",
    name: "ISO 9001",
    fadeSpeed: 0.2,
  },
  {
    icon: "/certificari/2.png",
    name: "ISO 14001",
    fadeSpeed: 0.4,
  },
  {
    icon: "/certificari/3.png",
    name: "ISO 45001",
    fadeSpeed: 0.6,
  },
  {
    icon: "/certificari/4.png",
    name: "ISO 22716",
    fadeSpeed: 0.8,
  },
  {
    icon: "/certificari/5.png",
    name: "Responsible forestry certificate",
    fadeSpeed: 1,
  },
];

const Certificari = () => {
  return (
    <section className="flex flex-row flex-1 flex-wrap gap-8 items-center justify-center xl:gap-x-40 py-24">
      {certificate.map((certificat, index) => (
        <motion.div 
        variants={fadeIn('down', certificat.fadeSpeed)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
        key={index}>
          <Image src={certificat.icon} width={120} height={70} alt={certificat.name} />
        </motion.div>
      ))}
    </section>
  );
};

export default Certificari;
