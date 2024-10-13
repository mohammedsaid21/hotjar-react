import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MarginLines from "@/components/margin-lines";
import Script from "next/script";
import GTM from "@/components/gtm";
import SupabaseProvider from "@/components/supabase-provider";
import { AuthProvider } from '@/components/auth-provider';
import { HotjarInit } from "@/components/HotjarInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "personalized candidate videos",
  description:
    "loomli books more candidates by generating videos of you speaking to each candidate's LinkedIn profile",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 



  return (
      <html lang="en" className={`${inter.variable}`}>
        <head>
          <GTM />
        </head>
        <body
          className={`${inter.variable} flex min-h-screen flex-col overflow-x-hidden bg-background font-extralight text-foreground antialiased`}
        >
          <AuthProvider>
            <SupabaseProvider>
            <HotjarInit hjid={5167567} hjsv={6} />

              <Navbar />
              <MarginLines>
                <main className="mb-auto w-full">{children}</main>
              </MarginLines>
              <Footer />
              {/* <UserTracker /> */}
              <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "o9o1c4jahg");
              `}
              </Script>
            </SupabaseProvider>
          </AuthProvider>
        </body>
      </html>
    );
}