import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-body-accent flex items-center justify-between px-[88px] py-[22px]'>
        {/* Left side */}
        <div className='flex items-start justify-normal flex-col'>
            <Link href="/termeni-si-conditii">Termeni si Conditii</Link>
            <Link href="/contact">Contact</Link>
        </div>
        {/* Center */}
        <div>Creat de <Link href="https://www.myriad-tech.ro/" className='hover hover:font-medium'><span>Myriad Tech</span></Link> @ 2024 Monte Bianco</div>
        {/* Right side */}
        {/* Logo */}
        <div className="inline-block">
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