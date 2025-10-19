import type React from "react"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Aurin by Elyvra - Own Your Brilliance",
  description: "Blockchain-verified digital badges that prove your skills forever",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body>
        <AuthProvider>
          <LayoutWrapper>{children} <Analytics /></LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
