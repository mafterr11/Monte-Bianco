import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroTextMobile = () => {
  return (
    <div className="container mt-8 flex flex-col text-center md:hidden">
      <h1 className="mb-[35px] inline-block leading-none md:hidden">
        30 de ani dedicati satisfactiei clientilor
      </h1>
      <p className="mb-[35px] inline-block text-balance md:hidden">
        Apreciem in mod deosebit faptul ca ne-ati acordat increderea voastra si
        ca ne-ati oferit oportunitatea de a servi in mod constant.
      </p>
      <Link href="/contact" className="inline-block md:hidden">
        <Button size="lg">Contactati-ne</Button>
      </Link>
    </div>
  );
};

export default HeroTextMobile;
