"use client"

import { useState } from "react"
import { AuthGuard } from "@/components/auth-guard"
import { AuthenticatedLayout } from "@/components/authenticated-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Shield, Palette, LinkIcon } from "lucide-react"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <AuthGuard>
      <AuthenticatedLayout>
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white/5 border border-white/10">
              <TabsTrigger value="profile">
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Shield className="w-4 h-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="appearance">
                <Palette className="w-4 h-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="integrations">
                <LinkIcon className="w-4 h-4 mr-2" />
                Integrations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card className="p-8 border-gradient backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="bg-white/5 border-white/10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="bg-white/5 border-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="johndoe" className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      rows={4}
                      placeholder="Tell us about yourself..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <Button onClick={handleSave} disabled={loading} className="bg-gradient-to-r from-primary to-accent">
                    {loading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="p-8 border-gradient backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {[
                    { label: "Badge Issued", description: "Get notified when you receive a new badge" },
                    { label: "Profile Views", description: "Know when someone views your profile" },
                    { label: "Badge Verified", description: "Get notified when someone verifies your badge" },
                    { label: "Event Reminders", description: "Receive reminders for upcoming events" },
                    { label: "Weekly Digest", description: "Get a weekly summary of your activity" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card className="p-8 border-gradient backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Privacy Settings</h2>
                <div className="space-y-6">
                  {[
                    { label: "Public Profile", description: "Make your profile visible to everyone" },
                    { label: "Show Email", description: "Display your email on your profile" },
                    { label: "Show Badges", description: "Allow others to see your badges" },
                    { label: "Allow Indexing", description: "Let search engines index your profile" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch defaultChecked={index === 0 || index === 2} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <Card className="p-8 border-gradient backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Appearance</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Profile Theme</Label>
                    <div className="grid grid-cols-3 gap-4">
                      {["Cyber", "Minimal", "Gradient"].map((theme) => (
                        <button
                          key={theme}
                          className="p-6 rounded-xl border-2 border-white/10 hover:border-primary/50 transition-all bg-white/5 hover:bg-white/10"
                        >
                          <p className="font-medium">{theme}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <Card className="p-8 border-gradient backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Connected Accounts</h2>
                <div className="space-y-4">
                  {[
                    { name: "LinkedIn", connected: false },
                    { name: "GitHub", connected: false },
                    { name: "Twitter", connected: false },
                  ].map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {integration.connected ? "Connected" : "Not connected"}
                        </p>
                      </div>
                      <Button variant={integration.connected ? "outline" : "default"} size="sm">
                        {integration.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AuthenticatedLayout>
    </AuthGuard>
  )
}
