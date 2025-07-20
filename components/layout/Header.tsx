import React from "react";
import Link from "next/link";
import { logoTop } from "@/constants";
import Image from "next/image";

const accommodations = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
  "Cabin",
];

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="mx-auto px-4 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link href="/">
            <Image src={logoTop} alt={""} />{" "}
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search accommodations..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link href="/signin">
            <button className="px-4 py-2 border rounded-[70px] hover:bg-gray-100 bg-[#34967c] text-white">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2  text-black bg-[#ECECEC] rounded-[70px]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex space-x-6 overflow-x-auto whitespace-nowrap">
          {accommodations.map((type) => (
            <button
              key={type}
              className="text-sm px-3 py-1 rounded-full hover:bg-indigo-100 transition"
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
