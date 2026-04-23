"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 right-4 md:bottom-6 md:right-6
        bg-green-500 
        hover:bg-green-600
        p-3 md:p-4 
        rounded-full 
        text-white 
        shadow-lg
        z-[9999]
        flex items-center justify-center
      "
    >
      <FaWhatsapp className="text-xl md:text-2xl" />
    </a>
  );
}
