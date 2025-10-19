"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, User, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<"user" | "organizer">("user")
  const router = useRouter()
  const { login, signup } = useAuth()

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email || !password) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    try {
      await login(email, password)
      toast.success("Welcome back!")
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      setError("Invalid email or password")
      toast.error("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!name || !email || !password) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (name.length < 2) {
      setError("Name must be at least 2 characters")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    try {
      await signup(name, email, password, selectedRole)
      toast.success("Account created successfully!")
      router.push("/onboarding")
    } catch (error) {
      console.error("Signup failed:", error)
      setError("Failed to create account. Please try again.")
      toast.error("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <Navigation />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md py-32"
      >
        <div className="text-center mb-12 space-y-8">
          <Link href="/" className="inline-block">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto"
            >
              <Image
                src="/aurin-logo.png"
                alt="Aurin by Elyvra"
                width={200}
                height={65}
                className="h-16 w-auto mx-auto"
              />
            </motion.div>
          </Link>
          <div className="space-y-4">
            <h1 className="text-5xl font-black tracking-tight">Welcome</h1>
            <p className="text-lg text-muted-foreground font-light">Start building your verified legacy</p>
          </div>
        </div>

        <Card className="p-10 glass-strong border-glow">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
              <TabsTrigger value="signin" className="text-base">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="text-base">
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 text-base"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="password" className="text-sm font-semibold">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="h-12 text-base"
                    disabled={isLoading}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 transition-all font-bold rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-sm font-semibold">I am a...</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRole("user")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedRole === "user"
                          ? "border-primary bg-primary/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Attendee</p>
                      <p className="text-xs text-muted-foreground">Collect badges</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedRole("organizer")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedRole === "organizer"
                          ? "border-primary bg-primary/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <Building2 className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Organizer</p>
                      <p className="text-xs text-muted-foreground">Issue badges</p>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    minLength={2}
                    className="h-12 text-base"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="signup-email" className="text-sm font-semibold">
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 text-base"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="signup-password" className="text-sm font-semibold">
                    Password
                  </Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="h-12 text-base"
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground">Must be at least 6 characters</p>
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-base bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 transition-all font-bold rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-8 leading-relaxed">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-foreground font-medium hover:text-primary transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-foreground font-medium hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </div>
  )
}
