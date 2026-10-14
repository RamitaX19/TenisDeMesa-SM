import { WhatsAppIcon } from "@/app/components/icons/WhatsAppIcon";
import { whatsappUrl } from "@/app/content/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 motion-safe:animate-fade-up motion-safe:[animation-delay:800ms] md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
