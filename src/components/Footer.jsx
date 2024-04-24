import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-body-accent flex max-md:flex-col items-center justify-between max-md:gap-y-2 px-6 xl:px-[88px] py-[22px]'>
        {/* Left side */}
        <div className='flex items-start justify-normal max-md:flex-row max-md:gap-x-6 flex-col gap-y-2'>
            <Link href="/termeni-si-conditii" className='hover-nav'><span>Termeni si Conditii</span></Link>
            <Link href="/contact" className='hover-nav'><span>Contact</span></Link>
        </div>
        {/* Center */}
        <div className='max-md:text-[13px]'>Creat de <Link href="https://www.myriad-tech.ro/" className='hover-nav hover:font-medium'><span>Myriad Tech</span></Link> @ 2024 Monte Bianco</div>
        {/* Right side */}
        {/* Logo */}
        <div className="inline-block max-md:hidden">
          <Link href="/">
            <Image
              src="/logo.png"
              width={112}
              height={50}
              priority
              alt="Monte Bianco Logo"
            />
          </Link>
        </div>
    </footer>
  )
}

export default Footer