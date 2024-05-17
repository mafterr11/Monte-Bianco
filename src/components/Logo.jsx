import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
const Logo = () => {
  return (
    <div className="relative inline-block">
      <Link href="/">
        <div className="absolute inset-0 z-50"></div>
      </Link>
      <Image
        src={logo}
        width={112}
        height={50}
        priority
        alt="Logo Monte Bianco - lider în produse de hârtie de calitate"
        className="z-40 w-auto"
      />
    </div>
  );
};

export default Logo;
