import { Container } from "@/app/components/Container";
import { InstagramIcon } from "@/app/components/icons/InstagramIcon";
import { WhatsAppIcon } from "@/app/components/icons/WhatsAppIcon";
import { site, whatsappUrl } from "@/app/content/site";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand text-white/60">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
        <p>
          © <CurrentYear /> {site.name}
        </p>

        <div className="flex gap-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-white"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-white"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
