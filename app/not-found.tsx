import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center text-center">
      <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-8xl font-bold text-transparent">
        404
      </h1>
      <p className="mb-8 text-2xl text-zinc-900">
        You&apos;ve ventured into the void.
      </p>
      <Link href="/">
        <Button className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:shadow-xl">
          Return to Known Space
        </Button>
      </Link>
    </section>
  );
}
