import { HeroSection } from "@/components/sections/hero-section"
import { Footer } from "@/components/sections/footer"

export const runtime = "edge"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Footer />
    </main>
  );
}
