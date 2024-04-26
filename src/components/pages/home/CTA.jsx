"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const CTA = () => {

  return <motion.section 
  variants={fadeIn("down", 0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: true, ammount: 0.4 }}
  className="max-md:mt-12 mt-64 max-md:py-16 py-12 bg-body-accent">
    <div  className="container mx-auto">
        <div className="flex flex-col items-center">
            <h3 className="max-w-5xl text-center mb-6 flex flex-col items-center justify-center">
            Nu ezitați să ne contactați! Părerea dumneavoastră contează
            </h3>
            <Link href="/contact">
                <Button className="gap-x-2"> 
                Contactați-ne <Send size={18} />
                </Button>
              </Link>
        </div>
    </div>
  </motion.section>;
};

export default CTA;
