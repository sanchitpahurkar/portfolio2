'use client';

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative flex justify-between items-center p-5 bg-white shadow-lg">
      {/* Logo */}
      <div className="text-xl font-semibold text-gray-800">
        <Link href="/">Sanchit Pahurkar</Link>
      </div>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="block sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Nav Links for Small Devices */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-white shadow-lg sm:hidden`}
      >
        <Link href="/projects" className="block py-2 px-4 border-b">
          Projects
        </Link>
        <Link href="/about" className="block py-2 px-4 border-b">
          About
        </Link>
        <Link href="/certifications" className="block py-2 px-4">
          Certifications
        </Link>
      </div>

      {/* Nav Links for Medium and Large Devices */}
      <div className="hidden sm:flex sm:gap-10 sm:items-center">
        <Link href="/projects" className="py-0 px-0">
          Projects
        </Link>
        <Link href="/about" className="py-0 px-0">
          About
        </Link>
        <Link href="/certifications" className="py-0 px-0">
          Certifications
        </Link>
      </div>

      {/* Theme Toggle */}
      <div className="hidden sm:block">
        <button className="h-8 bg-gray-800 text-white py-1 px-3 rounded">
          Theme
        </button>
      </div>
    </nav>
  )
}