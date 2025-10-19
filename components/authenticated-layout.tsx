"use client"

import type React from "react"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Trophy, Calendar, Settings, Search, Bell, LogOut, Plus, BarChart3, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const isActive = (path: string) => pathname === path

  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-border/50 bg-card/50 backdrop-blur-xl z-50 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border/50">
          <Link href="/dashboard" className="flex items-center group">
            <Image
              src="/aurin-logo.png"
              alt="Aurin by Elyvra"
              width={180}
              height={60}
              className="h-11 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 ${
                isActive("/dashboard") ? "bg-primary/10 text-primary border border-primary/30" : "hover:bg-secondary/50"
              }`}
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/badges">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 ${
                isActive("/dashboard/badges")
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "hover:bg-secondary/50"
              }`}
            >
              <Trophy className="w-4 h-4" />
              My Badges
            </Button>
          </Link>
          <Link href="/dashboard/discover">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 ${
                isActive("/dashboard/discover")
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "hover:bg-primary/5 hover:text-primary/80"
              }`}
            >
              <Search className="w-4 h-4" />
              Discover
            </Button>
          </Link>
          <Link href="/dashboard/events">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 ${
                isActive("/dashboard/events")
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "hover:bg-primary/5 hover:text-primary/80"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Events
            </Button>
          </Link>
          <Link href="/dashboard/analytics">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 ${
                isActive("/dashboard/analytics")
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "hover:bg-primary/5 hover:text-primary/80"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </Button>
          </Link>
          <Link href="/dashboard/community">
            <Button
              variant="ghost"
              className={`w-full justify-start gap-3 ${
                isActive("/dashboard/community")
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "hover:bg-primary/5 hover:text-primary/80"
              }`}
            >
              <Users className="w-4 h-4" />
              Community
            </Button>
          </Link>

          <div className="pt-4 mt-4 border-t border-border/50">
            <Link href="/notifications">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 ${
                  isActive("/notifications")
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "hover:bg-primary/5 hover:text-primary/80"
                }`}
              >
                <Bell className="w-4 h-4" />
                Notifications
                <Badge className="ml-auto bg-primary/20 text-primary border-primary/30">3</Badge>
              </Button>
            </Link>
            <Link href="/settings">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 ${
                  isActive("/settings")
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "hover:bg-primary/5 hover:text-primary/80"
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </Link>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border/50">
          <Card className="p-4 border-gradient backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg gradient-cyber flex items-center justify-center glow-cyan">
                <span className="text-sm font-bold text-background">{user?.name.charAt(0).toUpperCase()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{user?.name}</p>
                <p className="text-xs text-muted-foreground font-mono truncate">{user?.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/profile/${user?.username}`} className="flex-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs border-white/10 hover:bg-white/5 bg-transparent"
                >
                  View Profile
                </Button>
              </Link>
              <Button
                size="sm"
                variant="ghost"
                onClick={logout}
                className="hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex-1" />
            <Button className="gradient-cyber text-background font-bold hover:glow-cyan-strong transition-all">
              <Plus className="w-4 h-4 mr-2" />
              Create Badge
            </Button>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
