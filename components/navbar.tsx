"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { session, loading } = useAuth();

  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      /* Try to get the user's name from the user metadata */
      const name =
        session.user.user_metadata?.full_name ||
        session.user.user_metadata?.name;
      /* If no name is found, fall back to the email */
      setUserName(name || session.user.email);
    } else {
      setUserName(null);
    }
  }, [session]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommunityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("https://discord.gg/wNawfptZrZ", "_blank");
  };

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
          <Button
            variant="outline"
            className="mr-2 bg-background text-foreground transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
          >
            Book a call
          </Button>
          {session ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="mr-2 bg-background text-foreground transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
                  >
                    {userName || "User"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    disabled={isLoading}
                    className="cursor-pointer"
                  >
                    {isLoading ? "Signing out..." : "Sign out"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="mr-2 bg-background text-foreground transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Sign in"}
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* Navbar bottom border */}
      <div className="inset-x-0 bottom-0 h-px border-b border-dashed border-zinc-200"></div>
    </nav>
  );
}
