"use client"

import { useEffect, useRef } from "react"

export function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 200
    canvas.height = 200

    const imageData = ctx.createImageData(canvas.width, canvas.height)
    const buffer = new Uint32Array(imageData.data.buffer)

    for (let i = 0; i < buffer.length; i++) {
      const noise = Math.random() * 255
      buffer[i] = (255 << 24) | (noise << 16) | (noise << 8) | noise
    }

    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-[0.03] mix-blend-overlay"
      style={{ imageRendering: "pixelated" }}
    />
  )
}
