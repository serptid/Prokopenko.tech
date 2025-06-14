import { useEffect, useRef, useState } from "react"

interface AsciiProgressBarProps {
  percent: number
  label?: string
  delay?: number
}

export default function AsciiProgressBar({ percent, label, delay = 50 }: AsciiProgressBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [barLength, setBarLength] = useState(30)
  const [current, setCurrent] = useState(0)
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const updateBarLength = () => {
      const container = containerRef.current
      if (!container) return

      const totalWidth = container.offsetWidth

      const temp = document.createElement("span")
      temp.textContent = "A"
      temp.style.fontFamily = "monospace"
      temp.style.fontSize = getComputedStyle(container).fontSize
      temp.style.visibility = "hidden"
      document.body.appendChild(temp)

      const charWidth = temp.offsetWidth || 8
      document.body.removeChild(temp)

      const labelLen = (label ?? "").length
      const digitLen = 3

      const containerChars = Math.floor(totalWidth / charWidth)
      const reserved = 7 + digitLen + labelLen
      const available = Math.max(10, containerChars - reserved)
      setBarLength(available)
    }

    updateBarLength()

    const observer = new ResizeObserver(updateBarLength)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [label])

  useEffect(() => {
    setCurrent(0)
    const id = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= percent) {
          clearInterval(id)
          return percent
        }
        return prev + 1
      })
    }, delay)

    return () => clearInterval(id)
  }, [percent, delay])

  useEffect(() => {
    const filledLength = Math.round((current / 100) * barLength)
    const emptyLength = barLength - filledLength
    const bar = "■".repeat(filledLength) + "-".repeat(emptyLength)
    const line = `[${bar}] ${current}% - ${label ?? ""}`
    setDisplayText(line)
  }, [barLength, current, label])

  return (
    <div
      ref={containerRef}
      className="w-full font-mono text-green-400 whitespace-pre overflow-hidden"
    >
      {displayText}
    </div>
  )
}