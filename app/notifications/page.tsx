"use client"

import { AuthGuard } from "@/components/auth-guard"
import { AuthenticatedLayout } from "@/components/authenticated-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Eye, CheckCircle, Calendar, Bell } from "lucide-react"

const mockNotifications = [
  {
    id: 1,
    type: "badge",
    title: "New Badge Received",
    description: "You received 'Web Development Bootcamp' badge from Tech University",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "view",
    title: "Profile View",
    description: "Sarah Johnson viewed your profile",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "verify",
    title: "Badge Verified",
    description: "Someone verified your 'AI Conference Speaker' badge",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    type: "event",
    title: "Event Reminder",
    description: "Blockchain Summit 2025 starts in 3 days",
    time: "2 days ago",
    read: true,
  },
]

const iconMap = {
  badge: Award,
  view: Eye,
  verify: CheckCircle,
  event: Calendar,
}

export default function NotificationsPage() {
  return (
    <AuthGuard>
      <AuthenticatedLayout>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">Notifications</h1>
              <p className="text-muted-foreground">Stay updated with your latest activity</p>
            </div>
            <Bell className="w-8 h-8 text-primary" />
          </div>

          <div className="space-y-4">
            {mockNotifications.map((notification) => {
              const Icon = iconMap[notification.type as keyof typeof iconMap]
              return (
                <Card
                  key={notification.id}
                  className={`p-6 border-gradient backdrop-blur-xl hover:scale-[1.01] transition-all cursor-pointer ${
                    !notification.read ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-50" />
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-semibold">{notification.title}</h3>
                        {!notification.read && (
                          <Badge className="bg-primary/20 text-primary border-primary/30">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </AuthenticatedLayout>
    </AuthGuard>
  )
}
