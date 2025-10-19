"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, oklch(0.85 0.2 145 / 0.15) 0%, transparent 70%)`,
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </motion.div>
  )
}
