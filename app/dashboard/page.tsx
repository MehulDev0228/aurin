"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react"
import { AuthenticatedLayout } from "@/components/authenticated-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge as BadgeUI } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  ExternalLink,
  TrendingUp,
  Zap,
  Trophy,
  Target,
  Upload,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"
import Papa from "papaparse"
import { toast } from "sonner"
import { AuthGuard } from "@/components/auth-guard"

const mockBadges = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    issuer: "Tech University",
    date: "2024-12-15",
    verified: true,
    views: 234,
  },
  {
    id: 2,
    title: "AI Conference Speaker",
    issuer: "Global AI Summit",
    date: "2024-11-20",
    verified: true,
    views: 567,
  },
  {
    id: 3,
    title: "Blockchain Certification",
    issuer: "Crypto Academy",
    date: "2024-10-05",
    verified: true,
    views: 189,
  },
]

export default function DashboardPage() {
  const [activeRole, setActiveRole] = useState<"user" | "organizer">("user")
  const [uploadedData, setUploadedData] = useState<any[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedResults, setProcessedResults] = useState<{ success: number; failed: number } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith(".csv") && !file.name.endsWith(".xlsx")) {
      toast.error("Please upload a CSV or Excel file")
      return
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.data && results.data.length > 0) {
          setUploadedData(results.data)
          setProcessedResults(null)
          toast.success(`Loaded ${results.data.length} recipients`)
        } else {
          toast.error("No data found in file")
        }
      },
      error: (error) => {
        toast.error(`Error parsing file: ${error.message}`)
      },
    })
  }

  const handleIssueBadges = () => {
    setIsProcessing(true)

    setTimeout(() => {
      const success = uploadedData.length
      const failed = 0

      setProcessedResults({ success, failed })
      setIsProcessing(false)
      toast.success(`Successfully issued ${success} badges!`)

      setTimeout(() => {
        setUploadedData([])
        setProcessedResults(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }, 3000)
    }, 2000)
  }

  return (
    <AuthGuard>
      <AuthenticatedLayout>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
            </div>
            <Tabs value={activeRole} onValueChange={(v) => setActiveRole(v as "user" | "organizer")}>
              <TabsList>
                <TabsTrigger value="user">User View</TabsTrigger>
                <TabsTrigger value="organizer">Organizer View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {activeRole === "user" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Badges", value: "12", icon: Trophy, color: "primary" },
                  { label: "Profile Views", value: "1,247", icon: TrendingUp, color: "accent" },
                  { label: "Verifications", value: "342", icon: Zap, color: "primary" },
                  { label: "Rank", value: "#47", icon: Target, color: "accent" },
                ].map((stat, index) => (
                  <Card key={index} className="p-6 border-gradient backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                      <TrendingUp className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-3xl font-black mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Recent Badges</h2>
                  <Link href="/dashboard/badges">
                    <Button variant="ghost" size="sm">
                      View All →
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockBadges.map((badge) => (
                    <Card
                      key={badge.id}
                      className="p-6 border-gradient backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 flex items-center justify-center mb-6 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Award className="relative w-20 h-20 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{badge.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{badge.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-4">
                        {new Date(badge.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{badge.views} views</span>
                        <BadgeUI variant="secondary" className="text-xs">
                          ✓ Verified
                        </BadgeUI>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/verify/${badge.id}`} className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-white/10 hover:bg-white/5 bg-transparent"
                          >
                            <ExternalLink className="w-3 h-3 mr-2" />
                            Verify
                          </Button>
                        </Link>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                          Share
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Total Badges Issued", value: "156" },
                  { label: "Active Events", value: "8" },
                  { label: "Total Recipients", value: "1,234" },
                ].map((stat, index) => (
                  <Card key={index} className="p-6 border-gradient backdrop-blur-xl">
                    <p className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </Card>
                ))}
              </div>

              <Card className="p-8 border-gradient backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg gradient-cyber flex items-center justify-center glow-cyan">
                    <Upload className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Bulk Issue Badges</h2>
                    <p className="text-sm text-muted-foreground">Upload a CSV file with wallet addresses or emails</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                    <FileSpreadsheet className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">
                          CSV or Excel file with columns: wallet_address, email, name
                        </p>
                      </div>
                    </Label>
                    <Input
                      ref={fileInputRef}
                      id="file-upload"
                      type="file"
                      accept=".csv,.xlsx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-4 gradient-cyber text-background"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </Button>
                  </div>

                  {uploadedData.length > 0 && !processedResults && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Preview ({uploadedData.length} recipients)</p>
                        <Button
                          onClick={handleIssueBadges}
                          disabled={isProcessing}
                          className="gradient-cyber text-background"
                        >
                          {isProcessing ? "Processing..." : "Issue Badges to All"}
                        </Button>
                      </div>
                      <div className="border border-white/10 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto max-h-96">
                          <table className="w-full">
                            <thead className="bg-white/5 sticky top-0">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Wallet Address / Email
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                              {uploadedData.slice(0, 10).map((row, index) => (
                                <tr key={index} className="hover:bg-white/5">
                                  <td className="px-4 py-3 text-sm font-mono">
                                    {row.wallet_address || row.email || "N/A"}
                                  </td>
                                  <td className="px-4 py-3 text-sm">{row.name || "N/A"}</td>
                                  <td className="px-4 py-3 text-sm">
                                    <BadgeUI variant="secondary" className="text-xs">
                                      Ready
                                    </BadgeUI>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {uploadedData.length > 10 && (
                          <div className="px-4 py-3 bg-white/5 text-xs text-muted-foreground text-center">
                            Showing 10 of {uploadedData.length} recipients
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {processedResults && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="font-medium text-green-500">
                            Successfully issued {processedResults.success} badges
                          </p>
                          <p className="text-xs text-muted-foreground">Recipients will receive notifications</p>
                        </div>
                      </div>
                      {processedResults.failed > 0 && (
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                          <XCircle className="w-5 h-5 text-red-500" />
                          <p className="font-medium text-red-500">Failed to issue {processedResults.failed} badges</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Need a template?</span>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-primary hover:text-primary/80"
                      onClick={() => {
                        const csv =
                          "wallet_address,email,name\n0x1234...5678,john@example.com,John Doe\n0x8765...4321,jane@example.com,Jane Smith"
                        const blob = new Blob([csv], { type: "text/csv" })
                        const url = window.URL.createObjectURL(blob)
                        const a = document.createElement("a")
                        a.href = url
                        a.download = "badge_recipients_template.csv"
                        a.click()
                        toast.success("Template downloaded")
                      }}
                    >
                      Download CSV template
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-gradient backdrop-blur-xl">
                <h2 className="text-2xl font-bold mb-6">Pending Verifications</h2>
                <div className="space-y-3">
                  {[
                    { name: "John Doe", badge: "Web Dev Bootcamp", date: "2 hours ago" },
                    { name: "Jane Smith", badge: "AI Workshop", date: "5 hours ago" },
                    { name: "Mike Johnson", badge: "Blockchain Course", date: "1 day ago" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg gradient-cyber flex items-center justify-center glow-cyan">
                          <span className="text-sm font-bold text-background">{item.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.badge} • {item.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-white/10 hover:bg-white/5 bg-transparent">
                          Reject
                        </Button>
                        <Button size="sm" className="gradient-cyber text-background">
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </>
          )}
        </div>
      </AuthenticatedLayout>
    </AuthGuard>
  )
}
