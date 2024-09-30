import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import MoblieNav from './MoblieNav'
import NavbarItems from './Navbar'

function Header() {
  return (
    <header className='w-full border-b '>
        <div className='wrapper flex items-center justify-between'>
            <Link href='/' className='w-36 flex justify-center items-center'>
                <Image alt='logo' src="/assets/images/logo.svg" width={50} height={50}/>
                <h1 className='font-bold text-xl'>Event<span className='text-indigo-600'>Express</span></h1>
            </Link>
            <SignedIn>
              <nav className='md:flex-between hidden w-full max-w-xs'>
                <NavbarItems/>
              </nav>
            </SignedIn>
            <div className='flex w-32 justify-end gap-3'>
              <SignedIn>
                <UserButton afterSwitchSessionUrl='/'/>
                <MoblieNav/>
              </SignedIn>
              <SignedOut>
                <Button className='rounded-full' size="default">
                  <Link href='/sign-in'>
                  Sign In
                  </Link>
                </Button>
              </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header