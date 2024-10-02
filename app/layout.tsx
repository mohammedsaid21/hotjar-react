import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MarginLines from "@/components/ui/margin-lines";
import Script from "next/script";
import GTM from "@/components/gtm";

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
  description:
    "loomli books more candidates by generating videos of you speaking to each candidate's LinkedIn profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <GTM />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col overflow-x-hidden bg-background text-foreground antialiased`}
      >
        <Navbar />
        <div className="flex grow flex-col">
          <MarginLines>
            <main className="grow">{children}</main>
          </MarginLines>
        </div>
        <Footer />

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "o9o1c4jahg");
          `}
        </Script>
      </body>
    </html>
  );
}
