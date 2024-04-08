"use client"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import popcornlogo from "../../public/popcorn-logo.svg"
import { useState } from "react"
import * as React from "react"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <div className="flex justify-between items-center">
            <Image
              src={popcornlogo}
              alt="Logo"
              width="40"
              height="40"
              className="cursor-pointer"
              priority
            />
            <h3 className="text-blue-950 text-2xl font-bold hover:text-blue-400 cursor-pointer">
              SEEN
            </h3>
          </div>
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden md:flex">
            <Link href="/about">
              <li className="ml-10  uppercase hover:border-b text-l font-bold text-blue-950">
                About
              </li>
            </Link>
            <Link href="/dashboard">
              <li className="ml-10 uppercase hover:border-b text-l font-bold text-blue-950">
                Dashboard
              </li>
            </Link>
            <Link href="/account">
              <li className="ml-10 uppercase hover:border-b text-l font-bold text-blue-950">
                Account
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-l font-bold text-blue-950">
                Contact
              </li>
            </Link>
            <Link href="/login">
              <li className="ml-10 uppercase hover:border-b text-l font-bold text-white border-0 rounded-lg bg-blue-950 px-2">
                Log In
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-18 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4 text-lg">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
            <Link href="/dashboard">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Dashboard
              </li>
            </Link>
            <Link href="/account">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Account
              </li>
            </Link>
            <Link href="/login">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Log In
              </li>
            </Link>
          </ul>
        </div>
        <Link href="/">
          <div className="flex flex-row pt-10 justify-center items-center">
            <Image
              src={popcornlogo}
              alt="Logo"
              width="40"
              height="40"
              className="cursor-pointer"
              priority
            />
            <p className="text-blue-950 text-2xl font-bold hover:text-blue-400 cursor-pointer">
              SEEN
            </p>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
