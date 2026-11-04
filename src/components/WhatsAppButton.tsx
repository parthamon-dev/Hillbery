import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919767713694?text=Hello%20Hillberry%20team%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20botanical%20ingredients.%20Please%20connect%20with%20me."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hillberry on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-[#0b2a14] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
