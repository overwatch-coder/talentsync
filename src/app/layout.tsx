import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Hero from "@/app/Hero";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalentSync Full Stack Assessment",
  description: "A task-based evaluation for TalentSync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="flex flex-col min-h-screen">
          <Hero />
          <main className="mb-auto py-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
