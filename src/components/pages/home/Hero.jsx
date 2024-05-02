"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../../ui/button";
import Autoplay from "embla-carousel-autoplay";
import { HeroTypewritter } from "./HeroTypewritter";
// Data
export const pictures = [
  { image: "/hero/1.png" },
  { image: "/hero/2.png" },
  { image: "/hero/3.png" },
];

export function Hero() {
  return (
    <section className='relative overflow-x-hidden border-b border-accent'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {pictures.map((picture, index) => (
            <CarouselItem
              key={index}
              className='flex relative h-60 md:h-screen'
            >
              {" "}
              <Image
                src={picture.image}
                fill
                priority={true}
                alt='Poze de intro pentru Monte Bianco - părerea dumneavoastră contează'
                className='object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='absolute top-4 left-0 w-full h-full xl:pl-60 xl:pb-20 flex flex-col items-center xl:items-start justify-center z-20 text-white gap-y-2'>
        {/* <h4 className="max-xs:text-[20px] max-xs:text-center max-xs:pt-6 mb-[5px] text-white-text">Parerea dumneavoastra conteaza!</h4> */}
        <h4 className='text-center md:text-left max-md:pt-12'>
          <HeroTypewritter />
        </h4>
        <h1 className='max-w-4xl  hidden md:inline-block xl:mb-[35px]'>
          30 de ani dedicați satisfacției clienților
        </h1>
        <p className='max-w-xl lg:max-xl:max-w-2xl hidden md:inline-block mb-[35px] text-white-text md:max-xl:text-center'>
          Apreciem în mod deosebit faptul că ne-ați acordat încrederea voastră
          și că ne-ați oferit oportunitatea de a servi în mod constant
        </p>
        <Link href='/contact' className='hidden md:inline-block'>
          <Button size='lg'>Contactați-ne</Button>
        </Link>
      </div>

      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/35 z-10'></div>
    </section>
  );
}
