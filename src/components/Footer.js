import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          {/* LOGO */}
          <div className="mb-4">
            <Image
              src="/logo.jpg"
              alt="Marine Academy Logo"
              width={180}
              height={60}
              className="w-auto h-12 md:h-14 object-contain"
            />
          </div>

          {/* NAME */}
          <h2 className="text-lg font-semibold mb-2">
            St. Francis Xavier Marine Academy
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-300">
            Providing world-class maritime education and global career
            opportunities for future seafarers.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Admissions</li>
            <li>Courses</li>
            <li>Placements</li>
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Nautical Science</li>
            <li>Marine Engineering</li>
            <li>Diploma Courses</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">
            <FaMapMarkerAlt className="inline mr-2" />
            Chennai, India
          </p>
          <p className="text-sm text-gray-300">
            <FaPhoneAlt className="inline mr-2" />
            +91 9876543210
          </p>
          <p className="text-sm text-gray-300">
            <FaEnvelope className="inline mr-2" />
            sfxmaritimekuthenkuly@gmail.com
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © 2026 St. Francis Xavier Marine Academy. All rights reserved.
      </div>
    </footer>
  );
}
