import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer className="bg-body-accent flex items-center justify-between px-6 py-[22px] max-md:flex-col-reverse max-md:gap-y-4 xl:px-[88px]">
      {/* Left side */}
      <div className="flex items-center justify-center gap-x-1">
        {/* Logo */}
        <Logo />
        <div className="max-md:text-[13px]">© {currentYear} Monte Bianco</div>
      </div>
      {/* Center */}

      {/* Right side */}
      <div className="flex flex-col items-start justify-normal gap-y-2 max-md:flex-row max-md:gap-x-6">
        <Link href="/termeni-si-conditii" className="hover-nav">
          <span className="text-[14px] xl:text-[16px]">
            Termeni și Condiții
          </span>
        </Link>
        <Link href="/contact" className="hover-nav">
          <span className="text-[14px] xl:text-[16px]">Contact</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
