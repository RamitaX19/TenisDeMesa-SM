import type { Metadata, Viewport } from "next";
import { Geist, Oswald } from "next/font/google";
import { Header } from "@/app/components/Header";
import { site } from "@/app/content/site";
import "./globals.css";
import { Footer } from "@/app/components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Tenis de Mesa SM | Clases de ping pong en ${site.city}`,
  description: site.seoDescription,
  openGraph: {
    title: site.name,
    description: site.seoDescription,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#062555",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`scroll-pt-20 scroll-smooth ${geistSans.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand text-slate-900">
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
