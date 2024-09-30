import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Navbar from "./Navbar"
import NavbarItems from "./Navbar"
  
function MoblieNav() {
  return (
    <nav className='md:hidden'>
        <Sheet>
        <SheetTrigger className="align-middle">
            <Image src='/assets/icons/menu.svg'
                    alt="menu"
                    width={24}
                    height={24}
                    className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <div className="flex">

            <Image src='/assets/images/logo.svg'
                    alt="logo"
                    width={40}
                    height={40}/>
                <h1 className='font-bold text-xl'>Event<span className='text-indigo-600'>Express</span></h1>
            </div>
            <Separator className="border border-gray-50" />
            <NavbarItems/>
        </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MoblieNav