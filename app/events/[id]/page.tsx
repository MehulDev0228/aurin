"use client"

import { useParams } from "next/navigation"
import { Calendar, MapPin, Users, Award, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// Mock event data
const mockEvents = {
  "eth-denver-2024": {
    id: "eth-denver-2024",
    name: "ETHDenver 2024",
    description: "The largest Web3 #BUIDLathon in the world",
    date: "2024-02-23",
    location: "Denver, Colorado",
    type: "Hackathon",
    organizer: "ETHDenver Team",
    participants: 12500,
    badgesIssued: 8420,
    badges: [
      { id: "1", name: "Participant", count: 8000 },
      { id: "2", name: "Winner", count: 50 },
      { id: "3", name: "Mentor", count: 200 },
      { id: "4", name: "Speaker", count: 170 },
    ],
  },
}

export default function EventPage() {
  const params = useParams()
  const eventId = params.id as string
  const event = mockEvents[eventId as keyof typeof mockEvents]

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-black">Go Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-4">
                {event.type}
              </div>
              <h1 className="text-6xl font-black text-white mb-4">{event.name}</h1>
              <p className="text-xl text-white/60 max-w-2xl">{event.description}</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-black">
              <Share2 className="w-4 h-4 mr-2" />
              Share Event
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>
                {new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>{event.participants.toLocaleString()} Participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>{event.badgesIssued.toLocaleString()} Badges Issued</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Event Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {event.badges.map((badge) => (
            <Card key={badge.id} className="p-6 glass-strong border-glow hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
              <p className="text-white/60">{badge.count.toLocaleString()} issued</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Organizer Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-3xl font-bold text-white mb-8">Organized By</h2>
        <Card className="p-8 glass-strong border-glow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{event.organizer}</h3>
              <p className="text-white/60">Verified Event Organizer</p>
            </div>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Profile
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
