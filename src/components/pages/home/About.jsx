import Image from "next/image"

const About = () => {
  return (
    <section className="pb-40">
        {/* Container 1 */}
        <div className="flex items-center justify-center gap-x-32 bg-body-accent py-24">
            {/* Image */}
            <div>
                <Image src="/about/1.png" width={650} height={473} alt="despre Monte Bianco"/>
            </div>
            {/* Text */}
            <div>
                <h3 className="max-w-[430px] mb-5 text-accent">Misiunea noastra: Lider a produselor de profil</h3>
                <p className="max-w-[630px]">Încă de la început, principalul obiectiv al companiei a fost acela de a deveni un inovator și un lider de piață în fabricarea de produse din hârtie tissue, acum producând atât la Târgoviște cât și la Pucioasa. Astăzi produsele noastre sunt prezente în lanțurile de retail moderne majore.</p>
            </div>
        </div>
         {/* Container 2 */}
         <div className="flex items-center justify-center gap-x-32 py-28">
            {/* Text */}
            <div>
                <h3 className="max-w-[430px] mb-5 text-accent">Povestea noastra</h3>
                <p className="max-w-[630px]">SC Monte Bianco SA a fost înfiinţatǎ în anul 1994, avand scopul de a fi un pionier în productia si livrarea de produse din hartie tissue în România. Compania a initiat proiecte precum: primului prosop de bucătărie, prima hârtie igienică din pură celuloză, primele batiste și șervețele de față pe piață produse la nivel local.</p>
                <p className="max-w-[630px]">Monte Bianco este acum una din companiile importante din sectorul său având mărci de renume: „Puff”, „Fiore”, „Neve” și „Monte Bianco Profesional”, care acoperă toate categoriile de produse și oferă clienților noştri un raport excelent preț / calitate.</p>
            </div>
            {/* Image */}
            <div>
                <Image src="/about/2.png" width={650} height={373} alt="despre Monte Bianco"/>
            </div>
        </div>
         {/* Container 3 */}
         <div className="flex items-center justify-center gap-x-32 bg-body-accent py-24">
            {/* Image */}
            <div>
                <Image src="/about/3.png" width={650} height={373} alt="despre Monte Bianco"/>
            </div>
            {/* Text */}
            <div>
                <h3 className="max-w-[430px] mb-5 text-accent">Obiectivele Monte Bianco</h3>
                <p className="max-w-[630px]">Investițiile în tehnologii noi și în oameni reprezintă principalele obiective ale Monte Bianco și vor rămâne aceleași, pentru viitor.</p>
                <p className="max-w-[630px]">Aceste obiective ne vor ajuta în obținerea de noi performanțe în activitate, să oferim în continuare produse de calitate clienților noștri, rămânând competitivi așa cum am fost de la început.</p>
            </div>
        </div>
    </section>
  )
}

export default About