"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const CTA = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, ammount: 0.4 }}
      className="mt-64 bg-body-accent py-12 max-md:mt-12 max-md:py-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="mb-6 flex max-w-5xl flex-col items-center justify-center text-center">
            Nu ezitați să ne contactați! Părerea dumneavoastră contează
          </h3>
          <Link href="/contact" className="group">
            <Button className="gap-x-2 ">
              Contactați-ne{" "}
              <Send
                size={18}
                className="transition-all duration-300 ease-in-out group-hover:rotate-12"
              />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
