'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false)
  const [candidateCount, setCandidateCount] = useState(2614)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCandidateCount(prevCount => prevCount + 1)
    }, 30000) // Increment every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden">
      {/* Margin lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="h-full mx-auto border-l border-r border-gray-300 max-w-7xl"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">RecruiterAI</div>
            <div className="hidden md:flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-800">Community</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">Sponsor Us</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">Pricing</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">Docs</Link>
            </div>
            <Button className="bg-white text-gray-800 hover:text-white transition-all duration-300 ease-in-out button-glow">
              Book a call
            </Button>
          </div>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gray-200 transition-all duration-300 ${scrolled ? 'nav-border-animation' : ''}`}></div>
      </nav>

      <section className="container mx-auto px-4 py-24 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="text-2xl font-bold text-gray-800 animate-pulse">
              {candidateCount} candidates Calendlyed and counting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Recruiter! Get FANGers to click the{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">Calendly</span> link
            </h1>
            <p className="text-xl text-gray-600">
              Source top candidates faster. Create your clone and give us a script. We will make personalized Loom outreach of you for every candidate in your csv/Calendly/LinkedIn in minutes.
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "5 minute clone process",
                "First 1000 looms on us",
                "Calendly bookings that actually show up",
                "Use your OWN domain and watch analytics",
                "Built-in A/B testing to figure out scripts that click"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-[#ffb700] text-white hover:bg-[#ffa600] transition-all duration-300 ease-in-out cta-button-glow text-lg px-8 py-3 relative overflow-hidden">
              <span className="relative z-10">Let's Blast</span>
            </Button>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-video bg-gray-100 rounded-lg shadow-2xl overflow-hidden relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white text-gray-800 hover:text-white transition-all duration-300 ease-in-out button-glow">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Play Demo
                </Button>
              </div>
            </div>
            <div className="absolute bottom-[-30px] right-0 text-sm text-gray-600 flex items-center">
              Watch how
              <svg
                className="w-16 h-8 ml-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes subtleRays {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .button-glow {
          box-shadow: 0 0 10px rgba(218, 86, 221, 0.3), 0 0 20px rgba(86, 218, 221, 0.2), 0 0 30px rgba(255, 204, 76, 0.1);
          transition: all 0.3s ease;
        }
        .button-glow:hover {
          box-shadow: 0 0 15px rgba(218, 86, 221, 0.5), 0 0 30px rgba(86, 218, 221, 0.4), 0 0 45px rgba(255, 204, 76, 0.3);
        }
        .cta-button-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 183, 0, 0.2) 0%,
            rgba(255, 166, 0, 0.1) 30%,
            rgba(255, 140, 0, 0.05) 60%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          animation: subtleRays 4s infinite;
          z-index: 0;
        }
        .cta-button-glow:hover::before {
          opacity: 1;
          transform: scale(1.2);
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
    </div>
  )
}