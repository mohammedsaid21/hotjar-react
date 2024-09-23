import Hero from '@/components/sections/hero'
import VideoDemo from '@/components/sections/video-demo'

export const runtime = "edge"

export default function Home() {
  return (
    <>
      <Hero />
      <VideoDemo />
    </>
  );
}
