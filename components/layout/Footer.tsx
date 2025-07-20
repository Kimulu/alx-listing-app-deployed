import React from "react";
import Link from "next/link";
import { logoTop } from "@/constants";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="mx-auto px-4 py-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600">
            <Image src={logoTop} alt={""} />{" "}
          </h3>
          <p className="mt-2 text-sm">
            Your gateway to comfortable, affordable, and unique accommodations
            worldwide.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-md font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">Email: support@stayfinder.com</p>
          <p className="text-sm">Phone: +1 (800) 123-4567</p>
          <p className="text-sm">Address: 123 Traveler Lane, Wander City</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center text-sm py-4">
        © {new Date().getFullYear()} Alx. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
