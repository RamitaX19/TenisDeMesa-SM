import { Hero } from "@/app/components/Hero";
import { Schedule } from "@/app/components/Schedule";
import { Contact } from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Schedule />
      <Contact />
    </main>
  );
}
