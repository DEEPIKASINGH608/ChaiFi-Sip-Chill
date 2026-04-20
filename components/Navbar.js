"use client"
import React, { useState } from 'react' // Added useState
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false); // State to handle dropdown toggle

  return (
    <nav className="bg-[#020617] h-16 border-b border-white/5 shadow-lg text-[#F8FAFC] flex items-center justify-between px-8 sticky top-0 z-50">


      <div className="logo font-bold text-lg flex items-center gap-2 cursor-pointer">
        <link rel="stylesheet" href="/styles/globals.css" />
        <img src="chaig.gif" className="h-10 w-auto object-contain" alt="Logo" />
        <span className="hover:text-[#cedbef] transition-colors">ChaiFi</span>
      </div>

      <div className="flex items-center">
        {session && (
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Closes when clicking outside
              className="inline-flex mx-4 justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white border border-white/5 hover:bg-white/20"
            >
              Dropdown
              <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 size-5 text-gray-400">
                <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 ring-1 ring-white/10 shadow-xl">
                <div className="py-1">
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">Account settings</Link>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">Support</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">License</a>
                  <button
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {session && (
          <Link href="/dashboard">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 text-xs font-bold rounded-lg transition-all mx-1">
              Dashboard
            </button>
          </Link>
        )}

        {session && (
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2 text-xs font-bold rounded-lg transition-all mx-1"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        )}

        {!session && (
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 px-5 py-2.5 text-center me-2 mb-2 text-xs font-bold rounded-lg transition-all">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar


