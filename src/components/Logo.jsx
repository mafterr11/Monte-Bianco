import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/logo.png";
const Logo = () => {
  return (
    <div className='inline-block'>
    <Link href='/'>
      <Image
        src={logo}
        width={112}
        height={50}
        priority
        alt='Monte Bianco Logo'
        className='w-auto'
        onContextMenu={(e) => e.preventDefault()} // Prevent the context menu on right-click
      />
    </Link>
  </div>
  )
}

export default Logo