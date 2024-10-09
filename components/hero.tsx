"use client";

import { Button } from "@/components/ui/button";
import HeroVideo from "@/components/hero-video";
import SeeItForYourself from "@/components/see-it-for-yourself";

export default function Hero() {
  return (
    <section className="overflow-visible p-6 text-foreground md:p-16">
      <header className="grid grid-cols-1 text-center gap-8 2xl:grid-cols-2 2xl:text-left">
        <div className="flex flex-col justify-start">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Recruit{" "}
            <span className="animate-gradient bg-tri-gradient bg-[length:400%_auto] bg-clip-text text-transparent">
              candidates{" "}
            </span>
            with ✨tailored videos
          </h1>
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl md:text-3xl">
            <strong>Generate</strong> personalized outreach videos that{" "}
            <span className="animate-text-brighten relative font-medium before:absolute before:inset-0 before:w-0 before:animate-highlighter before:bg-[#3367d1] before:mix-blend-color-dodge before:content-['']">
              highlight
            </span>{" "}
            each candidate&apos;s unique career journey and skills.
          </p>
        </div>
        {/* use the loom style video here */}
        <HeroVideo src="/demo.webm" />
      </header>
      <SeeItForYourself className="max-w-4xl" />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">How It Works</h2>
        <ol className="mb-8 inline-grid gap-8 md:grid-cols-3">
          <li>
            <h3 className="mb-2 text-xl font-semibold">1. Provide Input</h3>
            <p>
              Share the candidate&apos;s LinkedIn profile, job posting, and your
              outreach script.
            </p>
          </li>
          <li>
            <h3 className="mb-2 text-xl font-semibold">2. AI-Powered Video</h3>
            <p>
              Our AI generates a personalized video that highlights the
              candidate&apos;s key career moments and skills.
            </p>
          </li>
          <li>
            <h3 className="mb-2 text-xl font-semibold">3. Send & Track</h3>
            <p>
              Share the video with the candidate and monitor their engagement to
              optimize your outreach.
            </p>
          </li>
        </ol>
        <Button size="lg">Try It Out</Button>
      </div>
    </section>
  );
}
