import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CommandPalette from "@/components/ui/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sahan Nimnaka | Software Engineer Portfolio",
    template: "%s | Sahan Nimnaka",
  },
  description:
    "Software Engineer portfolio showcasing projects, skills, and experience in web, mobile, and software development.",
  metadataBase: new URL("https://sahannimnaka.dev"),
  openGraph: {
    title: "Sahan Nimnaka | Software Engineer Portfolio",
    description:
      "Software Engineer portfolio showcasing projects, skills, and experience in web, mobile, and software development.",
    type: "website",
    locale: "en_US",
    url: "https://sahannimnaka.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahan Nimnaka | Software Engineer Portfolio",
    description:
      "Software Engineer portfolio showcasing projects, skills, and experience in web, mobile, and software development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <CommandPalette />
      </body>
    </html>
  );
}