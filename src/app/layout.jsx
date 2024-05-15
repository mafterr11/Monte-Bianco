import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./../components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { constructMetadata } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={poppins.className}>
        <Header />
        <Suspense>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
