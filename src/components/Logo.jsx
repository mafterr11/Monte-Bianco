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
        alt='Monte Bianco Logo'
        className='w-auto z-40'
        onContextMenu={(e) => e.preventDefault()} // Prevent the context menu on right-click
      />
   
  </div>
  )
}

export default Logo