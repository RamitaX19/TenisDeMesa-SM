import { Hero } from "@/app/components/Hero";
import { Schedule } from "@/app/components/Schedule";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Schedule />
    </main>
  );
}
