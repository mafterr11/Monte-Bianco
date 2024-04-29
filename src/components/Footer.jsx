import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='bg-body-accent flex max-md:flex-col items-center justify-between max-md:gap-y-2 px-6 xl:px-[88px] py-[22px]'>
      {/* Left side */}
      <div className='flex items-center justify-center gap-x-1'>
        {/* Logo */}
        <Logo />
        <div className='max-md:text-[13px]'>© 2024 Monte Bianco</div>
      </div>
      {/* Center */}
      <div className='max-md:text-[13px]'>
        Creat de{" "}
        <Link
          href='https://www.myriad-tech.ro/'
          className='hover-nav font-medium'
        >
          <span>Myriad Tech</span>
        </Link>{" "}
        - Toate drepturile rezervate
      </div>
      {/* Right side */}
      <div className='flex items-start justify-normal max-md:flex-row max-md:gap-x-6 flex-col gap-y-2'>
        <Link href='/termeni-si-conditii' className='hover-nav'>
          <span>Termeni și Condiții</span>
        </Link>
        <Link href='/contact' className='hover-nav'>
          <span>Contact</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
