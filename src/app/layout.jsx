import { Poppins } from "next/font/google";
import "./globals.css";
import Header from './../components/Header';
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { icons } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Monte Bianco - Excelență în Produse de Hârtie",
  description: "Descoperiți gama noastră variată de produse de hârtie de înaltă calitate. De la hârtie igienică și prosoape de hârtie, la șervețele și soluții profesionale pentru Horeca, Monte Bianco și subcompaniile sale, Puff, Fiore, Neve, și Monte Bianco Professional, vă oferă cele mai bune soluții pentru nevoile dumneavoastră zilnice. Mulțumim că ne alegeți pentru calitate și inovație!",
  keywords: "Monte Bianco, produse de hârtie, hârtie igienică, prosoape de hârtie, șervețele, solutii HORECA, Puff, Fiore, Neve, Monte Bianco Professional",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={poppins.className}>
        <Header />
        <Suspense>
        {children}
        </Suspense>
        <Footer />
        </body>
    </html>
  );
}
