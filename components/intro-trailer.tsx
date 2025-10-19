"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function IntroTrailer({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(1), 1000), // "Your achievements."
      setTimeout(() => setScene(2), 3500), // "Deserve more."
      setTimeout(() => setScene(3), 6000), // "More than a PDF."
      setTimeout(() => setScene(4), 8500), // "More than a profile."
      setTimeout(() => setScene(5), 11000), // "Something"
      setTimeout(() => setScene(6), 12500), // "permanent."
      setTimeout(() => setScene(7), 15000), // "Something yours."
      setTimeout(() => setScene(8), 17500), // "Forever."
      setTimeout(() => setScene(9), 20000), // AURIN logo reveal
      setTimeout(() => onComplete(), 24000), // Complete
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const scenes = [
    { text: null, type: "blank" },
    { text: "Your achievements.", type: "text" },
    { text: "Deserve more.", type: "text" },
    { text: "More than a PDF.", type: "text" },
    { text: "More than a profile.", type: "text" },
    { text: "Something", type: "text" },
    { text: "permanent.", type: "emphasis" },
    { text: "Something yours.", type: "text" },
    { text: "Forever.", type: "emphasis" },
    { text: null, type: "logo" },
  ]

  const currentScene = scenes[scene]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Scene content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {currentScene && (
            <motion.div
              key={scene}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              {currentScene.type === "logo" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 blur-[100px] bg-primary/40"
                  />
                  <Image
                    src="/aurin-logo.png"
                    alt="Aurin"
                    width={600}
                    height={200}
                    className="relative z-10 w-full max-w-2xl h-auto"
                    priority
                  />
                </motion.div>
              ) : currentScene.type === "text" ? (
                <motion.h1
                  className="text-[8vw] sm:text-[7vw] lg:text-[6vw] font-black tracking-tight whitespace-nowrap"
                  initial={{ letterSpacing: "0.1em", opacity: 0 }}
                  animate={{ letterSpacing: "-0.02em", opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {currentScene.text}
                </motion.h1>
              ) : currentScene.type === "emphasis" ? (
                <motion.h1
                  className="text-[9vw] sm:text-[8vw] lg:text-[7vw] font-[family-name:var(--font-playfair)] italic font-normal text-primary whitespace-nowrap"
                  initial={{ letterSpacing: "0.1em", opacity: 0, scale: 0.9 }}
                  animate={{ letterSpacing: "-0.02em", opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  {currentScene.text}
                </motion.h1>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onComplete}
        className="absolute top-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors z-20"
      >
        Skip →
      </motion.button>
    </motion.div>
  )
}
