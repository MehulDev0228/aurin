"use client"

import type React from "react"

import { useAuth } from "@/lib/auth-context"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { AuthenticatedLayout } from "@/components/authenticated-layout"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()

  const publicPages = [
    "/",
    "/about",
    "/auth",
    "/help",
    "/privacy",
    "/terms",
    "/features",
    "/events",
    "/discover",
    "/how-it-works",
  ]
  const isPublicPage =
    publicPages.includes(pathname) || pathname.startsWith("/verify/") || pathname.startsWith("/events/")

  // If user is authenticated and not on a public page, use authenticated layout
  if (isAuthenticated && !isPublicPage) {
    return <AuthenticatedLayout>{children}</AuthenticatedLayout>
  }

  // Otherwise show public layout with navbar
  return (
    <>
      {isPublicPage && <Navigation />}
      {children}
    </>
  )
}
