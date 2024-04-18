"use client";
import { TypewriterEffectSmooth } from "../../ui/typewritter-effect";
export function HeroTypewritter({ containerStyles }) {
  const words = [
    {
      text: "Parerea dumneavoastra conteaza!",
      className: "text-white-text",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
