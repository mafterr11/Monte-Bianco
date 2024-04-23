import { Poppins } from "next/font/google";
import "./globals.css";
import Header from './../components/Header';
import Footer from "@/components/Footer";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Monte Bianco",
  description: "Monte Bianco - Partenerul dvs. de încredere pentru produse de calitate. Ne onorăm relația cu clienții fideli și ne angajăm să oferim servicii de neegalat, răspunzând cu promptitudine la așteptările dvs. înalte. Mulțumim pentru că ne alegeți constant!",
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
