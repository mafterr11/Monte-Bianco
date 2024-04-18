"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
const About = () => {
  return (
    <section className="max-md:pb-12 pb-40 overflow-x-hidden">
      {/* Container 1 */}
      <motion.div 
       variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.8}}
      className="flex flex-col md:flex-row items-center justify-center gap-x-32 max-md:gap-y-8 bg-body-accent max-md:py-10 xl:py-24 max-md:px-4">
        {/* Image */}
        <div>
          <Image
            src="/about/1.png"
            width={650}
            height={473}
            alt="despre Monte Bianco"
          />
        </div>
        {/* Text */}
        <div>
          <h3 className="max-w-[430px] mb-5 text-accent leading-normal">
            Misiunea noastra: Lider a produselor de profil
          </h3>
          <p className="max-w-[630px]">
            Încă de la început, principalul obiectiv al companiei a fost acela
            de a deveni un inovator și un lider de piață în fabricarea de
            produse din hârtie tissue, acum producând atât la Târgoviște cât și
            la Pucioasa. Astăzi produsele noastre sunt prezente în lanțurile de
            retail moderne majore.
          </p>
        </div>
      </motion.div>
      {/* Container 2 */}
      <motion.div 
       variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-32 max-md:gap-y-8 max-md:py-10 xl:py-28 max-md:px-4">
        {/* Text */}
        <div>
          <h3 className="max-w-[430px] mb-5 text-accent leading-normal">
            Povestea noastra
          </h3>
          <p className="max-w-[630px]">
            SC Monte Bianco SA a fost înfiinţatǎ în anul 1994, avand scopul de a
            fi un pionier în productia si livrarea de produse din hartie tissue
            în România. Compania a initiat proiecte precum: primului prosop de
            bucătărie, prima hârtie igienică din pură celuloză, primele batiste
            și șervețele de față pe piață produse la nivel local.
          </p>
          <p className="max-w-[630px]">
            Monte Bianco este acum una din companiile importante din sectorul
            său având mărci de renume: „Puff”, „Fiore”, „Neve” și „Monte Bianco
            Profesional”, care acoperă toate categoriile de produse și oferă
            clienților noştri un raport excelent preț / calitate.
          </p>
        </div>
        {/* Image */}
        <div>
          <Image
            src="/about/2.png"
            width={650}
            height={373}
            alt="despre Monte Bianco"
          />
        </div>
      </motion.div>
      {/* Container 3 */}
      <motion.div 
       variants={fadeIn('left', 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true, ammount:0.4}}
      className="flex flex-col md:flex-row items-center justify-center gap-x-32 max-md:gap-y-8 bg-body-accent max-md:py-10 xl:py-24 max-md:px-4">
        {/* Image */}
        <div>
          <Image
            src="/about/3.png"
            width={650}
            height={373}
            alt="despre Monte Bianco"
          />
        </div>
        {/* Text */}
        <div>
          <h3 className="max-w-[430px] mb-5 text-accent leading-normal">
            Obiectivele Monte Bianco
          </h3>
          <p className="max-w-[630px]">
            Investițiile în tehnologii noi și în oameni reprezintă principalele
            obiective ale Monte Bianco și vor rămâne aceleași, pentru viitor.
          </p>
          <p className="max-w-[630px]">
            Aceste obiective ne vor ajuta în obținerea de noi performanțe în
            activitate, să oferim în continuare produse de calitate clienților
            noștri, rămânând competitivi așa cum am fost de la început.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
