"use client"

import { useState, useEffect } from "react"

export interface TypewriterProps {
  text: string
  delay?: number
  onComplete?: () => void
}

export default function Typewriter({ text, delay = 50, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [cursorOpacity, setCursorOpacity] = useState("opacity-100")

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      // Начинаем "исчезновение" курсора
      const fadeStep1 = setTimeout(() => {
        setCursorOpacity("opacity-50")
      }, 300)

      const fadeStep2 = setTimeout(() => {
        setCursorOpacity("opacity-0")
      }, 600)

      const hideCursor = setTimeout(() => {
        setShowCursor(false)
        onComplete?.()
      }, 900)

      return () => {
        clearTimeout(fadeStep1)
        clearTimeout(fadeStep2)
        clearTimeout(hideCursor)
      }
    }
  }, [currentIndex, delay, text, onComplete])

  return (
    <span>
      {displayText}
      {showCursor && (
        <span className={`ml-1 inline-block animate-pulse transition-opacity duration-300 ${cursorOpacity}`}>
          |
        </span>
      )}
    </span>
  )
}
