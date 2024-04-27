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

const Header = () => {
  const [active, setActive] = useState(false);
  const currentRoute = usePathname();

  const checkIsMobile = () => {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  
  const checkIsTablet = () => {
    const userAgent = navigator.userAgent;
    const isAndroidTablet = /Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
    const isIPad = /iPad/i.test(userAgent);
    const isLargeScreen = window.innerWidth >= 768 && window.innerWidth <= 1024;
    return isIPad || isAndroidTablet || isLargeScreen;
  };
  
  useEffect(() => {
    
    const updateActiveState = () => {
      const isMobile = checkIsMobile();
      const isTablet = checkIsTablet();
      // Set active based on scroll and device type
      setActive(window.scrollY > (isMobile ? 100 : isTablet ? 1000 : 830));
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
          ? "bg-body border-b border-black-text/90 shadow-nav"
          : "bg-body-transparent bg-opacity-0  xl:backdrop-blur-[10px] text-white"
        : "bg-body border-b border-black-text/90 shadow-nav"
    } fixed top-0 right-0 left-0 w-full z-50 transition-all duration-100 ease-in-out py-[12px] max-md:px-[25px] md:max-xl:px-[40px] xl:px-[55px] border-b-[0.5px] border-black/50`}
  >
    {/* blurry overlay on mobile */}
    <div className="max-xl:absolute inset-0 w-full h-full backdrop-blur-[5px] md:max-xl:backdrop-blur-[8px] z-30"></div>
      {/* Container */}
      <div className='relative flex items-center justify-between z-40'>
        {/* Logo */}
        <Logo />
        {/* Navigation */}
        {/* Desktop */}
        <Nav
          containerStyles='hidden xl:flex gap-x-12 bg-body-transparent bg-opacity-0 ml-16'
          linkStyles='font-medium'
        />
        {/* Mobile */}
        <NavMobile
          containerStyles='xl:hidden'
          iconStyles='text-3xl text-accent'
          linkStyles='uppercase'
        />
        {/* Right side */}
        <div className='hidden xl:flex items-center justify-center gap-x-8'>
          {/* Descarca Catalog */}
          <div className='text-white'>
            <a
              href='/Monte Bianco - Catalog.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              <Button size='thin'>Descarcă catalogul</Button>
            </a>
          </div>
          {/* Facebook */}
          <div className='hover:scale-[0.97] shadow-button'>
            <Link href='https://web.facebook.com/MonteBiancoRo'>
              <Image
                src='/facebook.svg'
                width={46}
                height={46}
                alt='Monte Bianco facebook link'
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
