"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Nav from "./Nav";
import { IoLogoFacebook } from "react-icons/io";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        active
          ? "bg-body text-white"
          : "bg-body-transparent bg-opacity-[14%] text-white"
      } fixed top-0 right-0 left-0 w-full z-50 transition-all duration-200 py-[12px] px-[55px] border-b-[0.5px] border-black/50`}
    >
      {/* Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="inline-block">
          <Link href="/">
            <Image
              src={logo}
              width={112}
              height={50}
              priority
              alt="Monte Bianco Logo"
            />
          </Link>
        </div>
        {/* Navigation */}
        {/* Desktop */}
        <Nav
          containerStyles="hidden xl:flex gap-x-12 bg-body-transparent bg-opacity-0"
          linkStyles=""
        />
        {/* Right side */}
        <div className="flex items-center justify-center gap-x-4">
            {/* Descarca Catalog */}
            <div>
                <Button size="thin">Descarca catalogul</Button>
            </div>
            {/* Facebook */}
          <div className="hover:scale-[0.97] shadow-button">
            <Link href="https://web.facebook.com/MonteBiancoRo">
              <Image src="/facebook.svg" width={46} height={46} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
