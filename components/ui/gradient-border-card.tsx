"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientBorderCardProps {
  children: React.ReactNode
  className?: string
}

export function GradientBorderCard({ children, className }: GradientBorderCardProps) {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-primary/50 to-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Card content */}
      <div className="relative bg-card rounded-lg border border-border p-6">{children}</div>
    </motion.div>
  )
}
