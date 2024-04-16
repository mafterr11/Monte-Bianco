import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTA = () => {

  return <section className="mt-64 py-24 bg-body-accent">
    <div  className="container mx-auto">
        <div className="flex flex-col items-center">
            <h3 className="max-w-5xl text-center mb-6 flex flex-col items-center justify-center">
            Pentru informații despre produse sau companie, nu ezitati sa ne contactați!
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
