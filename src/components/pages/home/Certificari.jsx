"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const certificate = [
  {
    icon: "/certificari/1.png",
    name: "ISO 9001",
    fadeSpeed: 0.2,
    alt: "Certificat ISO 9001 - standard de management al calității Monte Bianco",
  },
  {
    icon: "/certificari/2.png",
    name: "ISO 14001",
    fadeSpeed: 0.4,
    alt: "Certificat ISO 14001 - angajamentul Monte Bianco pentru protecția mediului",
  },
  {
    icon: "/certificari/3.png",
    name: "ISO 45001",
    fadeSpeed: 0.6,
    alt: "Certificat ISO 45001 - standard pentru sănătate și siguranță în muncă la Monte Bianco",
  },
  {
    icon: "/certificari/4.png",
    name: "ISO 22716",
    fadeSpeed: 0.8,
    alt: "Certificat ISO 22716 - bune practici de fabricație pentru produse cosmetice la Monte Bianco",
  },
  {
    icon: "/certificari/5.png",
    name: "Responsible forestry certificate",
    fadeSpeed: 1,
    alt: "Certificat de gestionare responsabilă a pădurilor - angajamentul Monte Bianco pentru sustenabilitate",
  },
];

const Certificari = () => {
  return (
    <section className="flex flex-1 flex-row flex-wrap items-center justify-center gap-8 px-8 py-24 lg:gap-x-24 xl:gap-x-40">
      {certificate.map((certificat, index) => (
        <motion.div
          variants={fadeIn("down", certificat.fadeSpeed)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          key={index}
        >
          <Image
            src={certificat.icon}
            width={100}
            height={70}
            alt={certificat.name}
            className="h-[70px] w-auto xs:max-xl:h-[85px] xl:h-[90px] "
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Certificari;
