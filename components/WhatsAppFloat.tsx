import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/919561084600?text=Hi%20Nachiket!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 md:bottom-10 md:right-10 hidden md:flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
