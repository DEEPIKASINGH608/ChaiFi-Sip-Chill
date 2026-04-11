import React from 'react'
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-[#020617] h-16 border-b border-white/5 shadow-lg text-[#F8FAFC] flex items-center justify-between px-8 sticky top-0 z-50">

      <div className="logo font-bold text-lg flex items-center gap-2 cursor-pointer">
        <img src="chaig.gif" className="h-10 w-auto object-contain" alt="Logo" />
        <span className="hover:text-[#cedbef] transition-colors">ChaiFi</span>
      </div>


      <ul className='flex items-center gap-6 text-sm font-medium'>
        <div>
          <Link href="/">
            <button type="button" className="text-white px-4 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer hover:text-[#cedbef] transition-colors">
              Home
            </button>
          </Link>
        </div>

        <div>
          <Link href="/About">
            <button type="button" className="text-white px-4 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer hover:text-[#cedbef] transition-colors">
              About
            </button>
          </Link>
        </div>

        <div>
          <Link href="/Projects">
            <button type="button " className="text-white px-4 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer hover:text-[#cedbef] transition-colors">
              Projects
            </button>
          </Link>
        </div>


        <li className="flex items-center">

          <div>
            <Link href="/login">
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 px-4 py-1 text-xs font-bold rounded-lg transition-all">
                Login
              </button>
            </Link>
          </div>

        </li>
      </ul>

    </nav>
  )
}

export default Navbar

