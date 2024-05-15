import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Monte Bianco - Excelență în Produse de Hârtie",
  description = "Descoperiți gama noastră variată de produse de hârtie de înaltă calitate. De la hârtie igienică și prosoape de hârtie, la șervețele și soluții profesionale pentru Horeca, Monte Bianco și subcompaniile sale, Puff, Fiore, Neve, și Monte Bianco Professional, vă oferă cele mai bune soluții pentru nevoile dumneavoastră zilnice. Mulțumim că ne alegeți pentru calitate și inovație!",
  keywords = "Monte Bianco, produse de hârtie, hârtie igienică, prosoape de hârtie, șervețele, solutii HORECA, Puff, Fiore, Neve, Monte Bianco Professional",
  image = "/logo.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@montebianco",
    },
    icons,
    metadataBase: new URL("https://montebianco.vercel.app"),
  };
}
