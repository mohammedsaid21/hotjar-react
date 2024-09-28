'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCommunityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open('https://discord.gg/wNawfptZrZ', '_blank')
  }

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/70 backdrop-filter backdrop-blur-lg shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo-tiny.png"
              alt="Loomli Logo"
              width={24}
              height={24}
              className="mr-0.5"
            />
            <div className="text-2xl font-bold text-accent-foreground">loomli</div>
          </Link>
          <div className="hidden md:flex space-x-3 lg:space-x-5">
            <Link
              href="/community"
              className="text-muted-foreground hover:text-foreground px-1"
              onClick={handleCommunityClick}
            >
              Discord Community
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground px-1">Pricing</Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground px-1">Docs</Link>
          </div>
          <Button variant="outline" className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out mr-2">
            Book a call
          </Button>
        </div>
      </div>
      {/* Bottom border animation */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-zinc-300 transition-all duration-300 ${scrolled ? 'hidden' : ''}`}></div>
    </nav>
  )
}