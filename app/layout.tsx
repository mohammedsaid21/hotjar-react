import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MarginLines from "@/components/ui/margin-lines";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "personalized candidate videos",
  description: "loomli books more candidates by generating videos of you speaking to each candidate's LinkedIn profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <MarginLines>
          <main className="flex flex-col flex-grow max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>
        </MarginLines>
        <Footer />
      </body>
    </html>
  );
}
