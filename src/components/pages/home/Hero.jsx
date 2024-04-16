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
// Data
export const pictures = [
  { image: "/hero/1.png" },
  { image: "/hero/2.png" },
  { image: "/hero/3.png" },
];

export function Hero() {
  return (
    <div className="relative overflow-x-hidden border-b border-accent">
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
              className="flex relative h-60 md:h-screen"
            >
              {" "}
              <Image
                src={picture.image}
                fill
                priority={true}
                alt="Monte Bianco imagini HERO section"
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute top-0 left-0 w-full h-full xl:pl-60 xl:pb-20 flex flex-col items-center xl:items-start justify-center z-20 text-white gap-y-2">
        <h4 className=" mb-[10px] text-white-text">Parerea dumneavoastra conteaza!</h4>
        <h1 className="max-w-4xl mb-[35px]">30 de ani dedicati satisfactiei clientilor</h1>
        <p className="max-w-xl mb-[35px] text-white-text">Apreciem in mod deosebit faptul ca ne-ati acordat increderea voastra si ca ne-ati oferit oportunitatea de a servi in mod constant.</p>
          <Link href="/portofoliu">
            <Button size="lg">
              Contactati-ne
            </Button>
          </Link>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/35 z-10"></div>
    </div>
  );
}
