import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Social = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles} items-center justify-center gap-x-8`}>
      {/* Descarca Catalog */}
      <div className="text-white">
        <a
          href="/Monte Bianco - Catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button size="thin">Descarcă catalogul</Button>
        </a>
      </div>
      {/* Facebook */}
      <div className="shadow-button transition-all duration-300 ease-in-out hover:scale-[0.95]">
        <Link href="https://web.facebook.com/MonteBiancoRo">
          <Image
            src="/facebook.svg"
            width={46}
            height={46}
            alt="Monte Bianco facebook link"
            unoptimized
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
