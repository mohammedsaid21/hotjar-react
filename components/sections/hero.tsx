'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SeeItForYourself from '@/components/see-it-for-yourself'
import Mail from "@/components/mail"

export default function Hero() {
  return (
    <section className="bg-background text-foreground relative overflow-visible flex flex-col items-center justify-center gap-10 container mx-auto p-4 max-w-7xl z-20">
      <header className="flex flex-col items-center gap-4 justify-center">
        <div className="flex flex-col items-center justify-center gap-2 relative">
          <p className="py-0.5 text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground text-center">@Sourcing Recruiters</p>
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter relative z-10">
            <span className="bg-tri-gradient bg-400% animate-gradient bg-clip-text text-transparent">✨</span>Generate a Video Per Candidate
          </h1>
        </div>
        <h2 className="text-center max-w-5xl text-2xl lg:text-3xl xl:text-4xl tracking-tight mb-4">
          Recruiters leverage personalized videos to get <span className="text-nowrap">13% more <Link href="/calendly-integration" className="text-accent-foreground text-base text-nowrap border border-accent-foreground rounded-md px-2 py-1 relative lg:text-lg -top-1">CALENDLY BOOKINGS</Link></span> <span className="text-nowrap">32% higher <Link href="/response-rate" className="text-accent-foreground text-base lg:text-lg text-nowrap border border-accent-foreground rounded-md px-2 py-1 relative -top-1">RESPONSE RATE</Link></span>
        </h2>
        <Mail />

        <Image
          src="https://resource2.heygen.ai/personalized_video/gif/1b5695d8de5241f59371dd369758d6f1/008ce5b362ff4de388e78bfe5c6883dd.gif"
          alt="Animated recruiter outreach"
          width={320}
          height={240}
          className="w-full max-w-2xl mx-auto max-w-xs h-auto rounded-lg shadow-lg"
          priority
        />
      </header>
      <SeeItForYourself className="relative mt-8 max-w-2xl lg:mt-0"/>
      <ul className="space-y-2 text-muted-foreground">
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
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out text-lg px-8 py-3 relative overflow-hidden">
          <span className="relative z-10">Let&apos;s Blast</span>
        </Button>
    </section>
  )
}