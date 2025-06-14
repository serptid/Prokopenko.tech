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

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
  } else {
    const hideCursor = setTimeout(() => {
      setShowCursor(false)
      onComplete?.()
    }, 300)

    return () => {
      clearTimeout(hideCursor)
    }
  }
  }, [currentIndex, delay, text, onComplete])

  return (
    <span>
      {displayText}
      {showCursor && <span className="ml-1 inline-block animate-pulse">|</span>}
    </span>
  )
}