"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/9186030354289"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 bg-green-500 hover:bg-green-600 p-4 rounded-full text-white shadow-xl z-[9999]"
    >
      <FaWhatsapp className="text-xl md:text-2xl" />
    </a>
  );
}
