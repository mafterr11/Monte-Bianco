"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

export function HealthiconsToiletPaperOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900px"
      height="900px"
      viewBox="0 0 48 48"
      className="rotate-[25deg] w-[400px] h-[400px] xs:w-[500px] xs:h-[500px] md:w-[800px] md:h-[800px] xl:w-[900px] xl:h-[900px]"
      {...props}
    >
      <g fill="#EDEDED">
        <path
          fillRule="evenodd"
          d="M21.304 11.65c.012.037.088.221.542.453c.505.258 1.273.447 2.176.447c.903 0 1.67-.189 2.176-.447c.454-.232.53-.416.542-.453c-.012-.036-.088-.22-.542-.453c-.505-.258-1.273-.447-2.176-.447c-.903 0-1.67.19-2.176.447c-.454.232-.53.417-.542.453m-.367-2.234c.84-.43 1.933-.666 3.085-.666s2.245.237 3.086.666c.787.402 1.635 1.138 1.635 2.234c0 1.097-.848 1.832-1.635 2.234c-.841.43-1.934.666-3.086.666s-2.244-.236-3.085-.666c-.788-.402-1.636-1.137-1.636-2.234c0-1.096.848-1.832 1.636-2.234"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M15.269 7.838C13.026 8.984 12 10.386 12 11.65c0 1.265 1.026 2.667 3.269 3.812c2.188 1.118 5.282 1.838 8.753 1.838c3.472 0 6.565-.72 8.753-1.838c2.243-1.145 3.27-2.547 3.27-3.812c0-1.264-1.027-2.666-3.27-3.812C30.587 6.721 27.494 6 24.022 6c-3.471 0-6.564.72-8.753 1.838m-.91-1.78C16.884 4.767 20.302 4 24.022 4c3.72 0 7.139.768 9.663 2.057c2.47 1.262 4.36 3.185 4.36 5.593s-1.89 4.332-4.36 5.593c-2.525 1.29-5.942 2.057-9.663 2.057c-3.72 0-7.138-.768-9.663-2.057C11.89 15.982 10 14.058 10 11.65s1.889-4.331 4.36-5.593"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M12 36.351v-24.7h-2v24.7c0 2.408 1.889 4.331 4.36 5.593c2.524 1.29 5.942 2.057 9.662 2.057c2.546 0 4.951-.36 7.024-1h-7.024v-1c-3.471 0-6.564-.72-8.753-1.838C13.026 39.018 12 37.616 12 36.35m20.846 3.775l.478.975l-.64 1.307c.347-.146.681-.3 1.001-.464c2.47-1.262 4.36-3.185 4.36-5.593v-24.7h-2v24.7c0 1.251-1.005 2.637-3.199 3.775"
          clipRule="evenodd"
        ></path>
        <path d="M15.79 21.3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-11.4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 7.6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
        <path
          fillRule="evenodd"
          d="M23.022 18.3a1 1 0 0 1 1-1h9.302a1 1 0 0 1 .898 1.44l-.715 1.46l.715 1.461a1 1 0 0 1 0 .88L33.507 24l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.715 1.46l.715 1.46a1 1 0 0 1 0 .88l-.93 1.9a1 1 0 0 1-.898.56h-8.372a1 1 0 0 1 0-2h7.748l.44-.9l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.715-1.46l-.715-1.46a1 1 0 0 1 0-.88l.226-.46h-7.699a1 1 0 0 1-1-1"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

const PrivateLabel = () => {
  return (
    <section
      className="container relative max-md:py-12 py-56 max-xl:overflow-hidden"
    >
      <motion.div 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      className="absolute -left-6 xs:top-16 xs:-left-12 md:-top-4 md:-left-4 lg:left-24 xl:top-36 xl:left-0 xl:right-0 bottom-0 z-0 xl:flex items-center justify-center">
        <HealthiconsToiletPaperOutline />
      </motion.div>
      {/* Added position-relative and z-index classes to raise text content above the SVG */}
      <motion.div 
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      className="text-center z-10 relative">
        <h2 className="mb-20">Private Label</h2>
        <p>
          Monte Bianco oferă clienților săi posibilitatea de a avea propriile
          mărci private. Nu doar capacitățile de producție, ci și facilitățile
          de producție care corespund celor mai înalte standarde din industria
          de profil dau posibilitatea ca Monte Bianco să ofere realizarea de
          Mărci Proprii local sau internațional. În afară de standardele ISO
          9001, ISO 14001, ISO 45001, Monte Bianco se certifică de asemenea și
          în conformitate cu standardul ISO 22716 și FSC.
        </p>
      </motion.div>
    </section>
  );
};

export default PrivateLabel;
