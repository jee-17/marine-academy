import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="py-16 px-4 bg-gray-100">
      <h2 className="title text-[#0b1f3a]">Get in Touch</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">Contact us for more information.</p>
          <button className="btn">Contact Us</button>
        </div>

        <div className="space-y-4">
          <p>
            <FaEnvelope className="inline mr-2" /> info@marine.com
          </p>
          <p>
            <FaPhone className="inline mr-2" /> +91 9876543210
          </p>
          <p>
            <FaMapMarkerAlt className="inline mr-2" /> Chennai, India
          </p>
        </div>
      </div>
    </div>
  );
}
