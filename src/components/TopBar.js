"use client";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0b1f3a] text-white text-xs md:text-sm px-4 md:px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LEFT */}
        <div className="hidden md:flex gap-6">
          <span>GP Ratings</span>
          <span>ETO</span>
          <span>BST</span>
          <span>STSDSD</span>
          <span>RFPFF</span>
          <span>RPST</span>
          <span>OCTCO</span>
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 items-center ml-auto">
          <a
            href="mailto:sfxmaritimekuthenkuly@gmail.com"
            className="flex items-center gap-1 md:gap-2"
          >
            <FaEnvelope className="text-xs" />
            <a
              href="mailto:sfxmaritimekuthenkuly@gmail.com"
              className="hidden sm:inline"
            >
              <span>sfxmaritimekuthenkuly@gmail.com</span>
            </a>
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-1 md:gap-2"
          >
            <FaPhone className="text-xs" />
            <a href="tel:+9186030354289" className="hidden sm:inline">
              <span>+91 86030354289</span>
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}
