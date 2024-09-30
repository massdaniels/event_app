import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
   const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center'>
        <Link href='/'>
          <Image src='/assets/images/logo.svg'
                  alt='logo'
                  width={30}
                  height={30}/>
        </Link>
        <p>&copy; {currentYear} EventExpress. All Rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer