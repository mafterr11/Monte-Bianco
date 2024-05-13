import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Social = () => {
  return (
    <div className="hidden xl:flex items-center justify-center gap-x-8">
      {/* Descarca Catalog */}
      <div className="text-white">
        <a
          href="/Monte Bianco - Catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button size="thin">Descarca catalogul</Button>
        </a>
      </div>
      {/* Facebook */}
      <div className="shadow-button transition-all ease-in-out duration-300 hover:scale-[0.95]">
        <Link href="https://web.facebook.com/MonteBiancoRo">
          <Image
            src="/facebook.svg"
            width={46}
            height={46}
            alt="Monte Bianco facebook link"
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
