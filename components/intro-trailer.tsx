"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroTrailer({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(1), 2000),
      setTimeout(() => setScene(2), 4500),
      setTimeout(() => setScene(3), 7000),
      setTimeout(() => setScene(4), 9500),
      setTimeout(() => onComplete(), 12000),
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const scenes = [
    {
      text: "Every achievement tells a story.",
      subtext: null,
    },
    {
      text: "But stories fade.",
      subtext: "Memories blur. Proof disappears.",
    },
    {
      text: "What if your brilliance was permanent?",
      subtext: "Verified. Immutable. Yours forever.",
    },
    {
      text: "Welcome to Aurin.",
      subtext: "Where achievements become legacy.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Scene content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {scenes[scene] && (
            <motion.div
              key={scene}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-balance"
                initial={{ letterSpacing: "0.1em" }}
                animate={{ letterSpacing: "-0.02em" }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {scenes[scene].text}
              </motion.h1>
              {scenes[scene].subtext && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide"
                >
                  {scenes[scene].subtext}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {scenes.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i <= scene ? "w-12 bg-primary" : "w-8 bg-muted"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onComplete}
        className="absolute top-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Skip intro →
      </motion.button>
    </motion.div>
  )
}
