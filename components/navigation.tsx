"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
        >
          <div className="relative rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                  <Image
                    src="/aurin-logo.png"
                    alt="Aurin by Elyvra"
                    width={180}
                    height={60}
                    className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                    priority
                  />
                </Link>

                <div className="hidden md:flex items-center gap-1">
                  <Link href="/">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`text-sm font-semibold transition-all rounded-full px-5 ${
                        isActive("/")
                          ? "text-foreground bg-white/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      Home
                    </Button>
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full px-5"
                      >
                        Platform
                        <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-48 rounded-2xl border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl"
                    >
                      <DropdownMenuItem asChild>
                        <Link href="/features" className="cursor-pointer rounded-xl">
                          Features
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/events" className="cursor-pointer rounded-xl">
                          Events
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/discover" className="cursor-pointer rounded-xl">
                          Explore
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="/about">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`text-sm font-semibold transition-all rounded-full px-5 ${
                        isActive("/about")
                          ? "text-foreground bg-white/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      About
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  {isAuthenticated ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-2 rounded-full hover:bg-white/5 px-3">
                          <div className="w-8 h-8 rounded-full gradient-cyber flex items-center justify-center glow-cyan">
                            <span className="text-sm font-bold text-background">
                              {user?.name?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="hidden sm:inline text-sm font-semibold">{user?.name}</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-56 rounded-2xl border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl"
                      >
                        <div className="px-3 py-2">
                          <p className="text-sm font-semibold">{user?.name}</p>
                          <p className="text-xs text-muted-foreground font-mono">{user?.email}</p>
                        </div>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem asChild>
                          <Link href={`/profile/${user?.username}`} className="cursor-pointer rounded-xl">
                            <User className="w-4 h-4 mr-2" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard" className="cursor-pointer rounded-xl">
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive rounded-xl">
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href="/auth">
                      <Button
                        size="sm"
                        className="text-sm font-bold bg-primary text-background hover:bg-primary/90 glow-neon transition-all duration-300 hover:scale-105 rounded-full px-8 h-10"
                      >
                        Get started
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
