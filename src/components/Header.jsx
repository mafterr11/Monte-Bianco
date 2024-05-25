"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { throttle } from "lodash";
import NavMobile from "./NavMobile";
import Logo from "./Logo";
import Social from "./Social";

const Header = () => {
  const [active, setActive] = useState(false);
  const currentRoute = usePathname();

  const checkIsMobile = () => {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  const checkIsTablet = () => {
    const userAgent = navigator.userAgent;
    const isAndroidTablet =
      /Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
    const isIPad = /iPad/i.test(userAgent);
    const isLargeScreen = window.innerWidth >= 768 && window.innerWidth <= 1024;
    return isIPad || isAndroidTablet || isLargeScreen;
  };

  useEffect(() => {
    const updateActiveState = () => {
      const isMobile = checkIsMobile();
      const isTablet = checkIsTablet();
      // Set active based on scroll and device type
      setActive(window.scrollY > (isMobile ? 100 : isTablet ? 1000 : 780));
    };

    // Call updateActiveState on initial render
    updateActiveState();

    const handleScroll = throttle(updateActiveState, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <header
      className={`${
        currentRoute === "/"
          ? active
            ? "border-b border-black-text/90 bg-body shadow-nav"
            : "bg-body-transparent bg-opacity-0  text-white xl:backdrop-blur-[10px]"
          : "border-b border-black-text/90 bg-body shadow-nav"
      } fixed left-0 right-0 top-0 z-50 w-full border-b-[0.5px] border-black/50 py-[12px] transition-all duration-100 ease-in-out max-md:px-[25px] md:max-xl:px-[40px] xl:px-[55px]`}
    >
      {/* blurry overlay on mobile */}
      <div className="inset-0 z-30 h-full w-full backdrop-blur-[2px] max-xl:absolute md:max-2xl:backdrop-blur-[8px]"></div>
      {/* Container */}
      <div className="relative z-40 flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        {/* Desktop */}
        <Nav
          containerStyles="hidden xl:flex gap-x-12 bg-body-transparent bg-opacity-0 ml-16"
          linkStyles="font-medium"
        />
        {/* Mobile */}
        <NavMobile
          containerStyles="xl:hidden"
          iconStyles="text-3xl md:text-4xl text-accent"
          linkStyles="uppercase xs:text-[18px] md:text-[21px]"
        />
        {/* Right side */}
        <Social containerStyles="hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
