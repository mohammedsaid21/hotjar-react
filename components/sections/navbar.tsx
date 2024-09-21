'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-zinc-800">RecruiterAI</div>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-zinc-600 hover:text-zinc-800">Community</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-800">Sponsor Us</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-800">Pricing</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-800">Docs</Link>
          </div>
          <Button className="bg-white text-zinc-800 hover:text-white transition-all duration-300 ease-in-out button-glow">
            Book a call
          </Button>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-zinc-200 transition-all duration-300 ${scrolled ? 'nav-border-animation' : ''}`}></div>

      <style jsx>{`
        .button-glow {
          box-shadow: 0 0 10px rgba(218, 86, 221, 0.3), 0 0 20px rgba(86, 218, 221, 0.2), 0 0 30px rgba(255, 204, 76, 0.1);
          transition: all 0.3s ease;
        }
        .button-glow:hover {
          box-shadow: 0 0 15px rgba(218, 86, 221, 0.5), 0 0 30px rgba(86, 218, 221, 0.4), 0 0 45px rgba(255, 204, 76, 0.3);
        }
        .nav-border-animation {
          animation: navBorderWrap 0.3s ease-out forwards;
        }
        @keyframes navBorderWrap {
          0% { left: 0; right: 0; top: auto; bottom: 0; }
          25% { left: 0; right: 0; top: 0; bottom: 0; }
          50% { left: 0; right: auto; top: 0; bottom: 0; }
          75% { left: 0; right: 0; top: 0; bottom: auto; }
          100% { left: 0; right: 0; top: 0; bottom: auto; }
        }
      `}</style>
    </nav>
  )
}