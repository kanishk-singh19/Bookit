"use client"
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link"
import { useState } from "react";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return <header className="bg-[#84a98c] h-20">
            <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8 h-full"
            aria-label="Global">
                <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">
                        <h2>Bookit</h2>
                    </span>
                    <img className="h-37 w-auto"
                    src="Bookit.png" alt="" />
                </Link>
                </div>
                <div className="flex lg:hidden">
                    <button 
                        type="button"
                        className="-m-2.5 inline-flex items-center jsutify-center rounded-md p-2.5 text-white" 
                        onClick={() => setMobileMenuOpen(true)}  
                       >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 " aria-hidden="true"/>

                    </button>
                </div>





            </nav>
     </header>
    
  
}

export default Header
