"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Award, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner"

// Mock badge claim data
const mockClaims = {
  abc123xyz: {
    badgeName: "ETHDenver 2024 Participant",
    issuer: "ETHDenver Team",
    event: "ETHDenver 2024",
    description: "Awarded for participating in ETHDenver 2024",
    recipientEmail: "user@example.com",
  },
}

export default function ClaimBadgePage() {
  const params = useParams()
  const router = useRouter()
  const { user, isAuthenticated, signup } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isClaimed, setIsClaimed] = useState(false)
  const [showSignup, setShowSignup] = useState(!isAuthenticated)

  const tokenKey = params.tokenKey as string
  const claimData = mockClaims[tokenKey as keyof typeof mockClaims]

  if (!claimData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="p-8 glass-strong border-glow max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Invalid Claim Link</h1>
          <p className="text-white/60 mb-6">This badge claim link is invalid or has expired.</p>
          <Button onClick={() => router.push("/")} className="bg-primary hover:bg-primary/90 text-black">
            Go Home
          </Button>
        </Card>
      </div>
    )
  }

  const handleClaim = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsClaimed(true)
    setIsLoading(false)
    toast.success("Badge claimed successfully!")
    setTimeout(() => router.push("/dashboard"), 2000)
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      await signup(name, email, password, "user")
      setShowSignup(false)
      toast.success("Account created! Now claim your badge.")
    } catch (error) {
      toast.error("Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="p-8 glass-strong border-glow">
          {!isClaimed ? (
            <>
              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-black" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">You've Been Awarded a Badge!</h1>
                <p className="text-white/60">Claim your verified achievement</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Badge Name</p>
                  <p className="text-lg font-semibold text-white">{claimData.badgeName}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Issued By</p>
                  <p className="text-lg font-semibold text-white">{claimData.issuer}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-1">Event</p>
                  <p className="text-lg font-semibold text-white">{claimData.event}</p>
                </div>
              </div>

              {showSignup ? (
                <form onSubmit={handleSignup} className="space-y-4">
                  <p className="text-white/80 mb-4">Create an account to claim your badge</p>
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Full Name
                    </Label>
                    <Input id="name" name="name" required className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/5 border-white/10 text-white"
                      defaultValue={claimData.recipientEmail}
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-white mb-2 block">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      minLength={6}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-black"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Account & Claim"}
                  </Button>
                </form>
              ) : (
                <Button
                  onClick={handleClaim}
                  className="w-full bg-primary hover:bg-primary/90 text-black"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Award className="w-4 h-4 mr-2" />}
                  {isLoading ? "Claiming..." : "Claim Badge"}
                </Button>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Badge Claimed!</h2>
              <p className="text-white/60 mb-6">Your badge has been added to your profile</p>
              <Button onClick={() => router.push("/dashboard")} className="bg-primary hover:bg-primary/90 text-black">
                View Dashboard
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
