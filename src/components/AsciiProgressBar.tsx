import { useEffect, useRef, useState } from "react"
import Typewriter from "./Typewriter"

interface AsciiProgressBarProps {
  percent: number
  label?: string
  delay?: number
}

export default function AsciiProgressBar({ percent, label, delay = 50 }: AsciiProgressBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [barLength, setBarLength] = useState(30)
  const [fullText, setFullText] = useState("")

  useEffect(() => {
    const update = () => {
      const container = containerRef.current
      if (!container) return
      const totalWidth = container.offsetWidth
      const charWidth = 8
      const reservedChars = 21
      const availableChars = Math.floor(totalWidth / charWidth) - reservedChars
      setBarLength(Math.max(10, availableChars))
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    const filledLength = Math.round((percent / 100) * barLength)
    const emptyLength = barLength - filledLength
    const bar = "■".repeat(filledLength) + "-".repeat(emptyLength)
    const line = `[${bar}] ${percent}% - ${label ?? ""}`
    setFullText(line)
  }, [barLength, percent, label])

  return (
    <div
      ref={containerRef}
      className="w-full font-mono text-green-400 whitespace-pre overflow-hidden"
    >
      <Typewriter text={fullText} delay={delay} />
    </div>
  )
}