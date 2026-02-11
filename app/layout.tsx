import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
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
        <main className={`${playfair.variable} ${inter.variable} font-sans`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
