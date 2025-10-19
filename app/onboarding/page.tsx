"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { AuthGuard } from "@/components/auth-guard"
import { Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function OnboardingPage() {
  const router = useRouter()
  const { user, updateUser } = useAuth()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    institution: "",
    country: "",
    profilePicture: null as File | null,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profilePicture: e.target.files[0] })
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      updateUser({
        ...formData,
        profilePicture: formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : undefined,
      })
      router.push("/dashboard")
    }
  }

  const canProceed = () => {
    if (step === 1) return formData.name && formData.displayName
    if (step === 2) return formData.institution && formData.country
    return true
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 mx-1 rounded-full transition-all ${s <= step ? "bg-primary" : "bg-white/10"}`}
                />
              ))}
            </div>
            <p className="text-white/60 text-sm text-center">Step {step} of 3</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              {step === 1 && "Let's get to know you"}
              {step === 2 && "Where are you from?"}
              {step === 3 && "Add a profile picture"}
            </h1>
            <p className="text-white/60 mb-8">
              {step === 1 && "Tell us your name and how you want to be called"}
              {step === 2 && "Help us personalize your experience"}
              {step === 3 && "Optional: Add a photo to make your profile stand out"}
            </p>

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="displayName" className="text-white mb-2 block">
                    Display Name *
                  </Label>
                  <Input
                    id="displayName"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    placeholder="johndoe"
                    className="bg-white/5 border-white/10 text-white"
                  />
                  <p className="text-white/40 text-sm mt-1">This will be your public username</p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="institution" className="text-white mb-2 block">
                    Institution / Organization *
                  </Label>
                  <Input
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="MIT, Google, etc."
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-white mb-2 block">
                    Country *
                  </Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United States"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center mb-4 overflow-hidden">
                    {formData.profilePicture ? (
                      <img
                        src={URL.createObjectURL(formData.profilePicture) || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-white/40" />
                    )}
                  </div>
                  <Label
                    htmlFor="profilePicture"
                    className="cursor-pointer bg-primary hover:bg-primary/90 text-black px-6 py-2 rounded-full transition-all"
                  >
                    <Upload className="w-4 h-4 inline mr-2" />
                    Upload Photo
                  </Label>
                  <Input
                    id="profilePicture"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <p className="text-white/40 text-sm mt-2">You can skip this and add it later</p>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button
                  onClick={() => setStep(step - 1)}
                  variant="outline"
                  className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 bg-primary hover:bg-primary/90 text-black disabled:opacity-50"
              >
                {step === 3 ? "Complete" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
