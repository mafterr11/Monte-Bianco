import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
const Logo = () => {
  return (
    <div className="relative inline-block">
      <Link href="/" >
        <div className="absolute inset-0 z-50"></div>
      </Link>
      <div className="relative h-[40px] w-[112px]">
        <Image
          src={logo}
          fill
          priority
          alt="Logo Monte Bianco - lider în produse de hârtie de calitate"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Logo;
