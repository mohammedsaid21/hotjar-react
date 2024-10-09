"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import UserMenu from "@/components/user-menu";
import Image from "next/image";
import { X } from "lucide-react";

export default function Navbar() {
  const { session, loading } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommunityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("https://discord.gg/invite/wNawfptZrZ", "_blank");
  };

  const handleTalkWithFounderClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling on the main page
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Re-enable scrolling on the main page
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalContent = document.getElementById("modal-content");
      if (modalContent && !modalContent.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <nav className={`inset-x-0 top-0 z-50`}>
      <div className="loomli-max-screen px-4 sm:px-6 lg:px-8">
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
          <div>
            <Button
              variant="ghost"
              className="mr-2 bg-background text-foreground transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
              onClick={handleTalkWithFounderClick} // Open modal on click
            >
              Talk with founder
            </Button>
            {session ? (
              <UserMenu />
            ) : (
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="mr-2 bg-background text-foreground transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Sign in"}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Navbar bottom border */}
      <div className="inset-x-0 bottom-0 h-px border-b border-dashed border-zinc-200"></div>

      {/* Modal Implementation */}
      {isModalOpen && (
        <div
          className="z-100 fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            id="modal-content"
            className="relative h-3/4 w-11/12 overflow-auto rounded-lg bg-white shadow-lg md:w-4/5 lg:w-3/5"
          >
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-red-500"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <h2 id="modal-title" className="sr-only">
              Schedule Appointment
            </h2>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0MTIh4QwpESXOgX7zUsNRHBJLhOSz2QK-WxaD5ztSovmD35pvrj53-jhkSD1vUQ-gePvE2hfQY?gv=true"
              title="Schedule Appointment"
              className="size-full rounded-lg border-0 shadow-xl"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
        </div>
      )}
    </nav>
  );
}
