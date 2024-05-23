"use client";
import { TypewriterEffectSmooth } from "../../ui/typewritter-effect";
export function HeroTypewritter({ containerStyles }) {
  const words = [
    {
      text: "Părerea dumneavoastră contează!",
      className: "text-white-text",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
