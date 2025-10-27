import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "24th Asoka Group BS&G | Bharat Scouts & Guides | South Calcutta",
  description: "24th Asoka Group, Bharat Scouts & Guides - Serving community, protecting nature, and building character since 1936. Join our Cubs, Scouts, and Rovers programs in South Calcutta.",
  keywords: "Scouts, Guides, BSG, Bharat Scouts Guides, 24th Asoka Group, South Calcutta, Youth Development, Community Service, Environment, Scouting",
  openGraph: {
    title: "24th Asoka Group BS&G",
    description: "Serving community since 1936 through Scouting, environmental protection, and youth development",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${inter.variable} font-body antialiased bg-sage-50 text-gray-900`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
