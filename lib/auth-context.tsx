"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  username: string
  role: "user" | "organizer" | "admin"
  institution?: string
  country?: string
  displayName?: string
  profilePicture?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  loading: boolean // Added loading state to interface
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, role: "user" | "organizer") => Promise<void>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true) // Added loading state

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem("aurin_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
    setLoading(false) // Set loading to false after checking
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email,
      username: email.split("@")[0],
      role: "user",
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("aurin_user", JSON.stringify(mockUser))
  }

  const signup = async (name: string, email: string, password: string, role: "user" | "organizer") => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      username: email.split("@")[0],
      role,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("aurin_user", JSON.stringify(mockUser))
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem("aurin_user", JSON.stringify(updatedUser))
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("aurin_user")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
