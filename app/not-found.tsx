import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-zinc-50">
      <Image
        src="/fancy-color-spiral-no-wm.jpg"
        alt="Colorful spiral background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="z-10 text-center px-4">
        <h1 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          404
        </h1>
        <p className="text-2xl mb-8 text-zinc-900">You've ventured into the void.</p>
    
        <Link href="/" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          Return to Known Space
        </Link>
      </div>
    </div>
  );
}