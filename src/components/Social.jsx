import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Social = () => {
  return (
    <div className='flex items-center justify-center gap-x-8'>
    {/* Descarca Catalog */}
    <div className='text-white'>
      <a
        href='/Monte Bianco - Catalog.pdf'
        target='_blank'
        rel='noopener noreferrer'
        download
      >
        <Button size='thin'>Descarca catalogul</Button>
      </a>
    </div>
    {/* Facebook */}
    <div className='hover:scale-[0.97] shadow-button transition-all ease-in-out duration-300'>
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
  )
}

export default Social