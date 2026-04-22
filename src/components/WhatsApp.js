import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
