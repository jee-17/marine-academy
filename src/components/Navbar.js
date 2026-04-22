"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center h-full">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={300}
            height={100}
            priority
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
          {/* TEXT */}
          <div className="leading-tight">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#0b1f3a]">
              St. Francis Xavier
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              Marine Academy
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="#">Academics</Link>
          <Link href="#">Admissions</Link>
          <Link href="#">Research</Link>
          <Link href="#">Placements</Link>
        </div>

        {/* APPLY */}
        <button className="hidden md:block bg-yellow-400 px-5 py-2 rounded">
          Apply
        </button>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3">
          <Link href="#">Academics</Link>
          <Link href="#">Admissions</Link>
          <Link href="#">Research</Link>
          <Link href="#">Placements</Link>
        </div>
      )}
    </nav>
  );
}
