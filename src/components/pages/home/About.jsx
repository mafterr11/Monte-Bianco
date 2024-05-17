"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
const About = () => {
  return (
    <section className="overflow-x-hidden pb-40 max-md:pb-12">
      {/* Container 1 */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.8 }}
        className="mb-6 flex flex-col items-center justify-center gap-x-32 bg-body-accent max-xl:gap-y-8 max-md:px-4 max-md:py-10 md:py-16 md:max-xl:mb-12 xl:flex-row xl:items-start xl:py-24"
      >
        {/* Image */}
        <>
          <Image
            src="/about/1.png"
            width={650}
            height={473}
            className=""
            alt="Echipa Monte Bianco discutând strategii de inovație în fabrica de hârtie"
          />
        </>
        {/* Text */}
        <div className="text-balance text-center xl:text-left">
          <h3 className="mb-5 leading-normal text-accent xl:max-w-[430px]">
            Misiunea noastră: Lider al produselor de profil
          </h3>
          <div className="max-w-[630px]">
            <p className="mb-5">
              Încă de la început, principalul obiectiv al companiei a fost acela
              de a deveni un inovator și un lider de piață în fabricarea de
              produse din hârtie tissue, acum producând atât la Târgoviște cât
              și la Pucioasa. Astăzi produsele noastre sunt prezente în
              lanțurile de retail moderne majore.
            </p>
            <p>
              În plus față de lanțurile internaționale, Monte Bianco a reușit
              să-și extindă aria de acoperire națională prin intermediul rețelei
              sale de distribuitori regionali de încredere.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Container 2 */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="mb-6 flex flex-col-reverse items-center justify-center gap-x-32 max-xl:gap-y-8 max-lg:py-10 max-md:px-4 md:py-16 md:max-xl:mb-12 xl:flex-row xl:items-start xl:py-24"
      >
        {/* Text */}
        <div className="text-balance text-center xl:text-left">
          <h3 className="mb-5 leading-normal text-accent xl:max-w-[430px]">
            Povestea noastră
          </h3>
          <div className="max-w-[630px]">
            <p className="mb-5">
              SC Monte Bianco SA a fost înfiinţatǎ în anul 1994, avand scopul de
              a fi un pionier în productia si livrarea de produse din hartie
              tissue în România. Compania a initiat proiecte precum: primului
              prosop de bucătărie, prima hârtie igienică din pură celuloză,
              primele batiste și șervețele de față pe piață produse la nivel
              local.
            </p>
            <p>
              Monte Bianco este acum una din companiile importante din sectorul
              său având mărci de renume: „Puff”, „Fiore”, „Neve” și „Monte
              Bianco Profesional”, care acoperă toate categoriile de produse și
              oferă clienților noştri un raport excelent preț / calitate.
            </p>
          </div>
        </div>
        {/* Image */}
        <>
          <Image
            src="/about/2.png"
            width={650}
            height={373}
            className=""
            alt="Istoric Monte Bianco, echipamentele originale de producție de hârtie"
          />
        </>
      </motion.div>
      {/* Container 3 */}
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="mb-6 flex flex-col items-center justify-center gap-x-32 bg-body-accent max-xl:gap-y-8 max-md:px-4 max-md:py-10 md:py-16 md:max-xl:mb-12 xl:flex-row xl:items-start xl:py-24"
      >
        {/* Image */}
        <>
          <Image
            src="/about/3.png"
            width={650}
            height={373}
            className=""
            alt="Angajați Monte Bianco verificând noile tehnologii de producție de hârtie"
          />
        </>
        {/* Text */}
        <div className="text-balance text-center xl:text-left">
          <h3 className="mb-5 leading-normal text-accent xl:max-w-[430px]">
            Obiectivele Monte Bianco
          </h3>
          <div className="max-w-[640px]">
            <p className="mb-5">
              Investițiile în tehnologii noi și în oameni reprezintă
              principalele obiective ale Monte Bianco și vor rămâne aceleași,
              pentru viitor.
            </p>
            <p>
              Aceste obiective ne vor ajuta în obținerea de noi performanțe în
              activitate, să oferim în continuare produse de calitate clienților
              noștri, rămânând competitivi așa cum am fost de la început.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
