'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import SeeItForYourself from '@/components/sections/see-it-for-yourself'

export default function Hero() {
  const [candidateCount, setCandidateCount] = useState(2614)

  useEffect(() => {
    const interval = setInterval(() => {
      setCandidateCount(prevCount => prevCount + 1)
    }, 30000) // Increment every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-background text-foreground relative overflow-visible">
      <section className="container mx-auto p-4 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="text-2xl font-bold">
              {candidateCount} candidates Calendlyed and counting
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Generate a video per candidate
            </h1>
            <p className="text-xl text-muted-foreground">
              <span className="text-secondary-foreground">Source</span> top candidates <span className="text-secondary-foreground">faster</span>.
              Create your clone and give us a script. We will make a <span className="text-secondary-foreground">personalized </span>
              video using your script for every candidate
            </p>
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
          </div>
          <SeeItForYourself className="relative mt-8 lg:mt-0"/>
        </div>
      </section>
    </div>
  )
}