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
import { PhoneOutgoing } from "lucide-react";
// Data
export const pictures = [
  { image: "/hero/1.webp" },
  { image: "/hero/2.jpg" },
  { image: "/hero/3.webp" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-accent">
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
              className="relative flex h-60 md:h-screen"
            >
              {" "}
              <Image
                src={picture.image}
                fill
                priority={true}
                alt="Poze de intro pentru Monte Bianco - părerea dumneavoastră contează"
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute left-0 top-4 z-20 flex h-full w-full flex-col items-center justify-center gap-y-2 text-white xl:items-start xl:pb-20 xl:pl-60">
        {/* <h4 className="max-xs:text-[20px] max-xs:text-center max-xs:pt-6 mb-[5px] text-white-text">Parerea dumneavoastra conteaza!</h4> */}
        <h4 className="text-center max-md:pt-12 md:text-left">
          <HeroTypewritter />
        </h4>
        <h1 className="hidden max-w-4xl md:inline-block xl:mb-[35px]">
          30 de ani dedicați satisfacției clienților
        </h1>
        <p className="mb-[35px] hidden max-w-xl text-white-text md:inline-block md:max-xl:text-center lg:max-xl:max-w-2xl">
          Apreciem în mod deosebit faptul că ne-ați acordat încrederea voastră
          și că ne-ați oferit oportunitatea de a servi în mod constant
        </p>
        <Link href="/contact" className="hidden md:inline-block">
          <Button
            size="lg"
            className="flex items-center justify-center gap-x-2 group"
          >
            Contactați-ne
            <PhoneOutgoing strokeWidth={1.5} size={22} className="transition-all duration-300 group-hover:rotate-[20deg] ease-in-out"/>
          </Button>
        </Link>
      </div>

      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-black/70 to-black/20"></div>
    </section>
  );
}
