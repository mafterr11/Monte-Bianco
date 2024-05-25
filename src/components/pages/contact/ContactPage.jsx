"use client";
import Brands from "@/components/Brands";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineFax } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ContactPage = () => {
  return (
    <div className="mt-40 md:max-xl:mt-28 max-md:mt-32">
      {/* Titlu */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="text-center uppercase"
      >
        <h2>Suntem aici pentru tine</h2>
        <h3 className="underline decoration-wavy decoration-accent underline-offset-4">
            Nu ezita să ne contactezi
        </h3>
      </motion.div>
      {/* Mobile Panel */}
      <div className="mt-12 flex flex-col items-center justify-center gap-y-6 md:hidden">
        {/* Telefon */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex flex-wrap items-center justify-start rounded bg-body/90 py-2 text-lg md:hidden lg:bg-body"
        >
          <a
            href="tel:+40245606296"
            target="blank"
            className="flex flex-col items-center justify-center gap-x-1 px-3 font-medium text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            <span className="font-semibold text-black">Tel:</span>{" "}
            +40.245.606.296
          </a>
        </motion.div>
        {/* Fax */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex flex-wrap items-center justify-start rounded bg-body/90 py-2 text-lg md:hidden lg:bg-body"
        >
          <a
            href="tel:+40245606286"
            target="blank"
            className="flex flex-col items-center justify-center gap-x-1 px-3 font-medium text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            <span className="font-semibold text-black">Fax:</span>{" "}
            +40.245.606.286
          </a>
        </motion.div>
        {/* Email Vanzari */}
        <motion.div
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex flex-col flex-wrap items-center justify-start rounded bg-body/90 px-3 py-2 text-lg md:hidden lg:bg-body"
        >
          <span className="font-semibold">Vânzări:</span>
          <a
            href="mailto: sales@montebianco.ro"
            target="blank"
            className="flex items-center justify-center gap-x-1 font-medium text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            sales@montebianco.ro
          </a>
        </motion.div>
        {/* Email Sediu */}
        <motion.div
          variants={fadeIn("down", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex flex-col flex-wrap items-center justify-start rounded bg-body/90 px-3 py-2 text-lg md:hidden lg:bg-body"
        >
          <span className="font-semibold">Sediu:</span>
          <a
            href="mailto: montebianco@montebianco.ro"
            target="blank"
            className="flex items-center justify-center gap-x-1 font-medium text-accent hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            montebianco@montebianco.ro
          </a>
        </motion.div>
        {/* Adresa */}
        <motion.div
          variants={fadeIn("down", 1.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="flex flex-col flex-wrap items-center justify-start rounded bg-body/90 px-3 py-2 text-lg md:hidden lg:bg-body"
        >
          <h2 className="text-lg font-semibold tracking-widest">Adresa</h2>
          <a
            href="https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8"
            target="_blank"
            className="hover mt-1 text-center font-medium text-accent hover:decoration-2 hover:underline-offset-4"
          >
            Strada Laminorului, numărul 16, Târgoviște, Dâmboviţa
          </a>
        </motion.div>
      </div>
      {/* Harta */}
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="container mx-auto mt-32 md:max-xl:mt-12 flex h-[900px] max-w-[1440px] flex-col-reverse gap-y-10 px-5 py-12 max-md:h-[200px] xl:pt-40"
      >
        <div className="iframe-container relative z-20 flex  h-full w-full flex-col justify-end rounded-lg border-2 border-black/10 p-10 md:flex-row md:items-end md:justify-start">
          <iframe
            width="100%"
            height="100%"
            className="responsive-iframe"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.2685853345934!2d25.442077599999998!3d44.9178733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f4190454420d%3A0x89a6aeb87ef12351!2sMONTE%20BIANCO%20S.A.!5e0!3m2!1sro!2sro!4v1713290590548!5m2!1sro!2sro"
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>
          {/* Adresa */}
          <AnimatedTooltip message="Sediul nostru">
            <div className="relative mb-4 hidden flex-wrap items-center justify-start rounded bg-body/90 p-2 shadow-button drop-shadow-lg md:flex lg:bg-body">
              <SlLocationPin size={31} />
              <div className="flex flex-col px-6 md:w-[350px]">
                <h2 className="text-lg font-semibold tracking-widest">
                  Adresa
                </h2>
                <a
                  href="https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8"
                  target="_blank"
                  className="hover mt-1 text-[17px] font-medium hover:scale-[1.02] text-accent hover:decoration-2 hover:underline-offset-4"
                >
                  Strada Laminorului, numărul 16, Târgoviște, Dâmboviţa
                </a>
              </div>
            </div>
          </AnimatedTooltip>
          <div className="absolute right-12 top-12 flex flex-col items-end justify-center gap-y-6 md:max-xl:right-4">
            {/* Telefon */}
            <AnimatedTooltip message="Haidem să discutăm!">
              <div className="hidden items-center justify-center gap-x-4 rounded bg-body/90 p-2 text-lg shadow-button drop-shadow-lg md:flex lg:bg-body">
                <FiPhoneCall size={25} />
                <div className="flex-col flex-wrap md:flex">
                  <span className="font-semibold text-black">Tel:</span>{" "}
                  <a
                    href="tel:+40245606296"
                    target="blank"
                    className="font-medium text-[17px] text-accent  hover:scale-[1.02] hover:underline hover:decoration-2 hover:underline-offset-4"
                  >
                    +40.245.606.296
                  </a>
                </div>
              </div>
            </AnimatedTooltip>
            {/* Fax */}
            <AnimatedTooltip message="Avem chiar și fax!">
              <div className="hidden items-center justify-center gap-x-4 rounded bg-body/90 p-2 text-lg shadow-button drop-shadow-lg md:flex lg:bg-body">
                <MdOutlineFax size={32} />
                <div className="flex-col flex-wrap md:flex">
                  <span className="font-semibold text-black">Fax:</span>{" "}
                  <a
                    href="tel:+40245606286"
                    target="blank"
                    className="font-medium text-[17px] text-accent hover:scale-[1.02] hover:underline hover:decoration-2 hover:underline-offset-4"
                  >
                    +40.245.606.286
                  </a>
                </div>
              </div>
            </AnimatedTooltip>
            {/* Vanzari */}
            <AnimatedTooltip message="Emailul departamentului de vânzări">
              <div className="hidden flex-col  flex-wrap items-start justify-start rounded bg-body/90 px-3 py-2 text-lg shadow-button drop-shadow-lg md:flex lg:bg-body">
                <p className="font-semibold">Vânzări:</p>
                <a
                  href="mailto: sales@montebianco.ro"
                  target="blank"
                  className="flex items-center text-[17px] justify-center gap-x-1 font-medium text-accent hover:scale-[1.02] hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  sales@montebianco.ro
                </a>
              </div>
            </AnimatedTooltip>
            {/* Sediu */}
            <AnimatedTooltip message="Emailul sediului nostru">
              <div className="hidden flex-col  flex-wrap items-start justify-start rounded bg-body/90 px-3 py-2 text-lg shadow-button drop-shadow-lg md:flex lg:bg-body">
                <p className="font-semibold">Sediu:</p>
                <a
                  href="mailto: montebianco@montebianco.ro"
                  target="blank"
                  className="flex items-center text-[17px] justify-center gap-x-1 font-medium text-accent hover:scale-[1.02] hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  montebianco@montebianco.ro
                </a>
              </div>
            </AnimatedTooltip>
          </div>
        </div>
      </motion.div>

      {/* Brands */}
      <div className="mb-8">
        <Brands />
      </div>
    </div>
  );
};

export default ContactPage;
