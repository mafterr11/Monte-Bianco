"use client";
import Brands from "@/components/Brands";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineFax } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Underline } from "@/components/Underline";

const ContactPage = () => {
  return (
    <div className='max-md:mt-32 mt-40'>
      {/* Titlu */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className='text-center uppercase'
      >
        <h2>Suntem aici pentru tine</h2>
        <h3>
          <span className='relative'>
            Nu ezita să ne contactezi
            <Underline.underline className='absolute inset-x-0 -bottom-10' />
          </span>
        </h3>
      </motion.div>
      {/* Mobile Panel */}
      <div className='flex md:hidden flex-col gap-y-6 items-center justify-center mt-12'>
        {/* Telefon */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='bg-body/90 lg:bg-body md:hidden flex flex-wrap py-2 rounded items-center justify-start text-lg'
        >
          <a
            href='tel:+40245606296'
            target='blank'
            className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 px-3 font-medium flex flex-col items-center justify-center gap-x-1'
          >
            <span className='text-black font-semibold'>Tel:</span>{" "}
            +40.245.606.296
          </a>
        </motion.div>
        {/* Fax */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='bg-body/90 lg:bg-body md:hidden flex flex-wrap py-2 rounded items-center justify-start text-lg'
        >
          <a
            href='tel:+40245606286'
            target='blank'
            className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 px-3 font-medium flex flex-col items-center justify-center gap-x-1'
          >
            <span className='text-black font-semibold'>Fax:</span>{" "}
            +40.245.606.286
          </a>
        </motion.div>
        {/* Email Vanzari */}
        <motion.div
          variants={fadeIn("down", 0.7)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='bg-body/90 lg:bg-body md:hidden flex flex-wrap flex-col py-2 rounded items-center px-3 justify-start text-lg'
        >
          <span className='font-semibold'>Vanzari:</span>
          <a
            href='mailto: sales@montebianco.ro'
            target='blank'
            className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium flex items-center justify-center gap-x-1'
          >
            sales@montebianco.ro
          </a>
        </motion.div>
        {/* Email Sediu */}
        <motion.div
          variants={fadeIn("down", 1)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='bg-body/90 lg:bg-body md:hidden flex flex-wrap flex-col py-2 rounded items-center px-3 justify-start text-lg'
        >
          <span className='font-semibold'>Sediu:</span>
          <a
            href='mailto: montebianco@montebianco.ro'
            target='blank'
            className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium flex items-center justify-center gap-x-1'
          >
            montebianco@montebianco.ro
          </a>
        </motion.div>
        {/* Adresa */}
        <motion.div
          variants={fadeIn("down", 1.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='bg-body/90 lg:bg-body md:hidden flex flex-wrap flex-col py-2 rounded items-center px-3 justify-start text-lg'
        >
          <h2 className='font-semibold tracking-widest text-lg'>Adresa</h2>
          <a
            href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
            target='_blank'
            className='mt-1 text-accent font-medium hover hover:underline-offset-4 hover:decoration-2 text-center'
          >
            Strada Fructelor, Numărul 5, Pucioasa, 135400, Dâmboviţa România
          </a>
        </motion.div>
      </div>
      {/* Harta */}
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className='container max-w-[1440px] mt-32 px-5 py-12 xl:pt-40 mx-auto flex flex-col-reverse max-md:h-[200px] h-[900px] gap-y-10'
      >
        <div className='z-20 w-full h-full rounded-lg  p-10 flex flex-col md:flex-row md:items-end md:justify-start justify-end relative iframe-container border-2 border-black/10'>
          <iframe
            width='100%'
            height='100%'
            className='responsive-iframe'
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.2685853345934!2d25.442077599999998!3d44.9178733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f4190454420d%3A0x89a6aeb87ef12351!2sMONTE%20BIANCO%20S.A.!5e0!3m2!1sro!2sro!4v1713290590548!5m2!1sro!2sro'
            style={{ filter: "grayscale(0.4) contrast(1) opacity(0.7)" }}
          ></iframe>
          {/* Adresa */}
          <AnimatedTooltip message='Sediul nostru'>
            <div className='bg-body/90 lg:bg-body relative hidden md:flex flex-wrap p-2 mb-4 rounded items-center justify-start shadow-button drop-shadow-lg'>
              <SlLocationPin size={31} />
              <div className='md:w-[350px] px-6 flex flex-col'>
                <h2 className='font-semibold tracking-widest text-lg'>
                  Adresa
                </h2>
                <a
                  href='https://maps.app.goo.gl/p1wcRJjfmqQvtwxq8'
                  target='_blank'
                  className='mt-1 text-accent font-medium hover hover:underline-offset-4 hover:decoration-2'
                >
                  Strada Fructelor, Numărul 5, Pucioasa, 135400, Dâmboviţa
                  România
                </a>
              </div>
            </div>
          </AnimatedTooltip>
          <div className='flex flex-col items-end justify-center gap-y-6 absolute top-12 right-12 md:max-xl:right-4'>
            {/* Telefon */}
            <AnimatedTooltip message='Haidem să discutăm!'>
              <div className='bg-body/90 lg:bg-body hidden md:flex p-2 rounded items-center justify-center shadow-button drop-shadow-lg text-lg gap-x-4'>
                <FiPhoneCall size={25} />
                <div className='md:flex flex-col flex-wrap'>
                  <span className='text-black font-semibold'>Tel:</span>{" "}
                  <a
                    href='tel:+40245606296'
                    target='blank'
                    className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium'
                  >
                    +40.245.606.296
                  </a>
                </div>
              </div>
            </AnimatedTooltip>
            {/* Fax */}
            <AnimatedTooltip message='Avem chiar si fax!'>
              <div className='bg-body/90 lg:bg-body hidden md:flex p-2 rounded items-center justify-center shadow-button drop-shadow-lg text-lg gap-x-4'>
                <MdOutlineFax size={32} />
                <div className='md:flex flex-col flex-wrap'>
                  <span className='text-black font-semibold'>Fax:</span>{" "}
                  <a
                    href='tel:+40245606286'
                    target='blank'
                    className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium'
                  >
                    +40.245.606.286
                  </a>
                </div>
              </div>
            </AnimatedTooltip>
            {/* Vanzari */}
            <AnimatedTooltip message='Emailul departamentului de vanzari'>
              <div className='bg-body/90 lg:bg-body  hidden md:flex flex-wrap flex-col py-2 rounded items-start px-3 justify-start shadow-button drop-shadow-lg text-lg'>
                <p className='font-semibold'>Vanzari:</p>
                <a
                  href='mailto: sales@montebianco.ro'
                  target='blank'
                  className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium flex items-center justify-center gap-x-1'
                >
                  sales@montebianco.ro
                </a>
              </div>
            </AnimatedTooltip>
            {/* Sediu */}
            <AnimatedTooltip message='Emailul sediului nostru'>
              <div className='bg-body/90 lg:bg-body  hidden md:flex flex-wrap flex-col py-2 rounded items-start px-3 justify-start shadow-button drop-shadow-lg text-lg'>
                <p className='font-semibold'>Sediu:</p>
                <a
                  href='mailto: montebianco@montebianco.ro'
                  target='blank'
                  className='text-accent hover:underline hover:underline-offset-4 hover:decoration-2 font-medium flex items-center justify-center gap-x-1'
                >
                  montebianco@montebianco.ro
                </a>
              </div>
            </AnimatedTooltip>
          </div>
        </div>
      </motion.div>

      {/* Brands */}
      <div className='mb-8'>
        <Brands />
      </div>
    </div>
  );
};

export default ContactPage;
