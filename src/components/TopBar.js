"use client";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0b1f3a] text-white text-xs md:text-sm px-4 md:px-6 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LEFT */}
        <div className="hidden md:flex gap-6">
          <span>NAD</span>
          <span>NAAC</span>
          <span>NBA</span>
          <span>NIRF</span>
        </div>

        {/* RIGHT */}
        <div className="flex gap-4 items-center ml-auto">
          <a
            href="mailto:sfxmaritimekuthenkuly@gmail.com"
            className="flex items-center gap-1 md:gap-2"
          >
            <FaEnvelope className="text-xs" />
            <span className="hidden sm:inline">
              sfxmaritimekuthenkuly@gmail.com
            </span>
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-1 md:gap-2"
          >
            <FaPhone className="text-xs" />
            <span>+91 9876543210</span>
          </a>
        </div>
      </div>
    </div>
  );
}
