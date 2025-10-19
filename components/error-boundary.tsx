"use client"

import { Component, type ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("[v0] Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <Card className="p-8 border-gradient backdrop-blur-xl max-w-md text-center">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">{this.state.error?.message || "An unexpected error occurred"}</p>
            <Button
              onClick={() => {
                this.setState({ hasError: false })
                window.location.href = "/"
              }}
              className="bg-gradient-to-r from-primary to-accent"
            >
              Go Home
            </Button>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}
