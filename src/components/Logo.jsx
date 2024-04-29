import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/logo.png";
const Logo = () => {
  return (
    <div className='inline-block relative'>
       <Link href='/'>
    <div className='absolute inset-0 z-50'></div>
    </Link>
      <Image
        src={logo}
        width={112}
        height={50}
        priority
        alt='Logo Monte Bianco - lider în produse de hârtie de calitate'
        className='w-auto z-40'
      />
   
  </div>
  )
}

export default Logo