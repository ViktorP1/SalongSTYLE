import type { Metadata } from "next";
import "./globals.css";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-display",
  });

  const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    variable: "--font-sans",
  });


export const metadata: Metadata = {
  title: "Salong STYLE",
  description: "Professionell frisörsalong i Stockholm. Hårklippning, färgning, styling och behandlingar. Boka tid online hos oss idag!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
        <Navigation />
        <main className={`${libreBaskerville.variable} ${sourceSans.variable} font-sans`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
