"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCommunityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("https://discord.gg/wNawfptZrZ", "_blank");
  };

  return (
    <nav
      className={`sticky inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 shadow-md backdrop-blur-lg" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo-tiny.png"
              alt="Loomli Logo"
              width={24}
              height={24}
              className="mr-0.5"
            />
            <div className="text-2xl font-bold text-accent-foreground">
              loomli
            </div>
          </Link>
          <div className="hidden space-x-3 md:flex lg:space-x-5">
            <Link
              href="/community"
              className="px-1 text-muted-foreground hover:text-foreground"
              onClick={handleCommunityClick}
            >
              Discord Community
            </Link>
            <Link
              href="/pricing"
              className="px-1 text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="px-1 text-muted-foreground hover:text-foreground"
            >
              Docs
            </Link>
          </div>
          <Button
            variant="outline"
            className="mr-2 bg-background text-foreground transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            Book a call
          </Button>
        </div>
      </div>
      {/* Bottom border animation */}
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-zinc-300 transition-all duration-300 ${scrolled ? "hidden" : ""}`}
      ></div>
    </nav>
  );
}
