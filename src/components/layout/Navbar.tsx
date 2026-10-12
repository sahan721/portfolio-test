"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";


const navItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <button
            onClick={() => handleScroll("hero")}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            aria-label="Go to home"
          >
            Sahan<span className="text-primary">.</span>
          </button>

          <div className="flex items-center gap-4">
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-card border border-border"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <ul className="py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}