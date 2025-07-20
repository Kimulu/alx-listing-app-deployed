"use client";
import React, { useState } from "react";
import Link from "next/link";
import { logoTop } from "@/constants";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const accommodations = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
  "Cabin",
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link href="/">
            <Image
              src={logoTop}
              alt="Logo"
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Hamburger Menu - Mobile */}
          <button
            className="sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:flex-1 sm:mx-6">
          <input
            type="text"
            placeholder="Search accommodations..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Auth Buttons (Desktop Only) */}
        <div className="hidden sm:flex flex-row items-center gap-4">
          <Link href="/signin">
            <button className="px-4 py-2 border rounded-[70px] hover:bg-gray-100 bg-[#34967c] text-white">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-[#ECECEC] text-black rounded-[70px]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown (for Auth Buttons) */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-2">
          <Link href="/signin">
            <button className="w-full px-4 py-2 border rounded-[70px] hover:bg-gray-100 bg-[#34967c] text-white">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-full px-4 py-2 bg-[#ECECEC] text-black rounded-[70px]">
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {/* Accommodation Types */}
      <nav className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex space-x-4 overflow-x-auto scrollbar-hide">
          {accommodations.map((type) => (
            <button
              key={type}
              className="text-sm px-3 py-1 rounded-full hover:bg-indigo-100 transition whitespace-nowrap"
            >
              {type}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
