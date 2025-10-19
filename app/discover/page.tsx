"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Award, Users, Building2 } from "lucide-react"
import Link from "next/link"

const mockBadges = [
  { id: 1, title: "Web Development Pro", issuer: "Tech Academy", recipients: 1234 },
  { id: 2, title: "AI Specialist", issuer: "AI Institute", recipients: 856 },
  { id: 3, title: "Blockchain Expert", issuer: "Crypto University", recipients: 432 },
]

const mockUsers = [
  { username: "johndoe", name: "John Doe", badges: 12 },
  { username: "sarahj", name: "Sarah Johnson", badges: 8 },
  { username: "mikec", name: "Mike Chen", badges: 15 },
]

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("badges")

  return (
    <div className="relative min-h-screen">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">Discover</h1>
            <p className="text-lg text-muted-foreground">Explore badges, users, and organizations</p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search badges, users, or organizations..."
                className="pl-12 h-14 text-lg bg-white/5 border-white/10 focus:border-primary/50"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
              <TabsTrigger value="badges">
                <Award className="w-4 h-4 mr-2" />
                Badges
              </TabsTrigger>
              <TabsTrigger value="users">
                <Users className="w-4 h-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="organizations">
                <Building2 className="w-4 h-4 mr-2" />
                Organizations
              </TabsTrigger>
            </TabsList>

            {activeTab === "badges" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockBadges.map((badge) => (
                  <Card
                    key={badge.id}
                    className="p-6 border-gradient backdrop-blur-xl hover:scale-[1.02] transition-all"
                  >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 flex items-center justify-center mb-6">
                      <Award className="w-20 h-20 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{badge.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-4">{badge.recipients.toLocaleString()} recipients</p>
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 bg-transparent">
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "users" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockUsers.map((user) => (
                  <Link key={user.username} href={`/profile/${user.username}`}>
                    <Card className="p-6 border-gradient backdrop-blur-xl hover:scale-[1.02] transition-all">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-lg text-center mb-1">{user.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-4">@{user.username}</p>
                      <p className="text-xs text-muted-foreground text-center">{user.badges} badges earned</p>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === "organizations" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Tech University", "AI Institute", "Crypto Academy"].map((org, index) => (
                  <Card key={index} className="p-6 border-gradient backdrop-blur-xl hover:scale-[1.02] transition-all">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-center mb-4">{org}</h3>
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 bg-transparent">
                      View Profile
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
