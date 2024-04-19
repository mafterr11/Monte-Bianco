"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Nav from "./Nav";
import { IoLogoFacebook } from "react-icons/io";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState(false);
  const currentRoute = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 830);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        currentRoute === "/"
          ? active
            ? "bg-body border-b border-black-text/90 shadow-nav"
            : "bg-body-transparent bg-opacity-[14%] xl:backdrop-blur-[10px] text-white"
          : "bg-body border-b border-black-text/90 shadow-nav"
      } fixed top-0 right-0 left-0 w-full z-50 transition-all duration-100 ease-in-out py-[12px] px-[55px] border-b-[0.5px] border-black/50`}
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
              className="w-auto"
            />
          </Link>
        </div>
        {/* Navigation */}
        {/* Desktop */}
        <Nav
          containerStyles="hidden xl:flex gap-x-12 bg-body-transparent bg-opacity-0 ml-16"
          linkStyles="font-medium"
        />
        {/* Right side */}
        <div className="hidden xl:flex items-center justify-center gap-x-8">
          {/* Descarca Catalog */}
          <div className="text-white">
            <a
              href="/Monte Bianco - Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button size="thin">Descarca catalogul</Button>
            </a>
          </div>
          {/* Facebook */}
          <div className="hover:scale-[0.97] shadow-button">
            <Link href="https://web.facebook.com/MonteBiancoRo">
              <Image
                src="/facebook.svg"
                width={46}
                height={46}
                alt="Monte Bianco facebook link"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
