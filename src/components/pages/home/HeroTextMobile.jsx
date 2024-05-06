import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroTextMobile = () => {
  return (
    <div className='container text-center mt-8 flex flex-col md:hidden'>
      <h1 className='md:hidden inline-block mb-[35px] leading-none'>
        30 de ani dedicati satisfactiei clientilor
      </h1>
      <p className='md:hidden inline-block mb-[35px] text-balance'>
        Apreciem in mod deosebit faptul ca ne-ati acordat increderea voastra si
        ca ne-ati oferit oportunitatea de a servi in mod constant.
      </p>
      <Link href='/contact' className='md:hidden inline-block'>
        <Button size='lg'>Contactati-ne</Button>
      </Link>
    </div>
  );
};

export default HeroTextMobile;
