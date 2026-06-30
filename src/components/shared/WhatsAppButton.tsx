import { MessageCircle } from "lucide-react";
import { siteInfo } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801711123456"
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${siteInfo.name} on WhatsApp`}
      className="fixed bottom-8 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white shadow-premium transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
