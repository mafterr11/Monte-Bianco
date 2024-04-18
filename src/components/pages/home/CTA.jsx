import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTA = () => {

  return <section className="max-md:mt-12 mt-64 max-md:py-16 py-12 bg-body-accent">
    <div  className="container mx-auto">
        <div className="flex flex-col items-center">
            <h3 className="max-w-5xl text-center mb-6 flex flex-col items-center justify-center">
            Nu ezitati sa ne contactați! Parerea dumneavoastra conteaza
            </h3>
            <Link href="/contact">
                <Button className="gap-x-2"> 
                Contactati-ne <Send size={18} />
                </Button>
              </Link>
        </div>
    </div>
  </section>;
};

export default CTA;
