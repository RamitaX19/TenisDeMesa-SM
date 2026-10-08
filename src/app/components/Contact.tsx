import type { ReactNode } from "react";
import { AtSign, MapPin, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { site, whatsappUrl } from "@/app/content/site";

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
        {icon}
      </span>
      <div>
        <p className="text-sm text-white/60">{label}</p>
        <p className="font-semibold">{children}</p>
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="bg-brand py-20 text-white md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Contacto"
            title="Vení a probar una clase"
            description="Escribinos por WhatsApp, contanos si ya jugaste antes y te recomendamos el turno ideal para vos."
          />
          <div className="mt-10">
            <ButtonLink href={whatsappUrl} external>
              <MessageCircle className="size-5" />
              Escribinos por WhatsApp
            </ButtonLink>
          </div>
        </div>

        <ul className="space-y-6">
          <ContactItem
            icon={<MessageCircle className="size-5" />}
            label="WhatsApp"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {site.phone}
            </a>
          </ContactItem>
          <ContactItem icon={<AtSign className="size-5" />} label="Instagram">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {site.instagramHandle}
            </a>
          </ContactItem>
          <ContactItem icon={<MapPin className="size-5" />} label="Dónde">
            {site.address}, {site.city}
          </ContactItem>
        </ul>
      </Container>
    </section>
  );
}
