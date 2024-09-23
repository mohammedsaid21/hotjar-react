import Hero from '@/components/sections/hero'
import SeeItForYourself from '@/components/sections/see-it-for-yourself'

export const runtime = "edge"

export default function Home() {
  return (
    <main>
      <Hero />
      <SeeItForYourself />

    </main>
  );
}
