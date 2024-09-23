'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [candidateCount, setCandidateCount] = useState(2614)

  useEffect(() => {
    const interval = setInterval(() => {
      setCandidateCount(prevCount => prevCount + 1)
    }, 30000) // Increment every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
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
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-video bg-muted rounded-lg shadow-2xl overflow-hidden relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="outline" className="bg-background text-foreground hover:text-primary-foreground transition-all duration-300 ease-in-out">
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
            <div className="absolute bottom-[-30px] right-0 text-sm text-muted-foreground flex items-center">
              Watch how
              <svg
                className="w-16 h-8 ml-2 text-muted-foreground"
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
    </div>
  )
}