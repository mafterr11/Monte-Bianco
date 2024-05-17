import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer className="flex items-center justify-between bg-body-accent px-6 py-[22px] max-md:flex-col max-md:gap-y-2 xl:px-[88px]">
      {/* Left side */}
      <div className="flex items-center justify-center gap-x-1">
        {/* Logo */}
        <Logo />
        <div className="max-md:text-[13px]">© {currentYear} Monte Bianco</div>
      </div>
      {/* Center */}
      <div className="max-md:text-[13px]">
        Creat de{" "}
        <Link href="https://www.myriad-tech.ro/" className="hover-nav group">
          <span className="group-hover:font-semibold font-medium">Myriad Tech</span>
        </Link>{" "}
        - Toate drepturile rezervate
      </div>
      {/* Right side */}
      <div className="flex flex-col items-start justify-normal gap-y-2 max-md:flex-row max-md:gap-x-6">
        <Link href="/termeni-si-conditii" className="hover-nav">
          <span>Termeni și Condiții</span>
        </Link>
        <Link href="/contact" className="hover-nav">
          <span>Contact</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
