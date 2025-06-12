import { useEffect, useRef, useState } from "react"

interface AsciiProgressBarProps {
  percent: number
  label?: string
}

export default function AsciiProgressBar({ percent, label }: AsciiProgressBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [barLength, setBarLength] = useState(30)

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

      const reservedChars = 21
      const availableChars = Math.floor(totalWidth / charWidth) - reservedChars
      setBarLength(Math.max(10, availableChars))
    }

    updateBarLength()

    const observer = new ResizeObserver(updateBarLength)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const filledLength = Math.round((percent / 100) * barLength)
  const emptyLength = barLength - filledLength
  const bar = "■".repeat(filledLength) + "-".repeat(emptyLength)

  return (
    <div
      ref={containerRef}
      className="w-full font-mono text-green-400 whitespace-pre overflow-hidden flex gap-2"
    >
      <div className="flex-1">[{bar}]</div>
      <div className="text-left w-[170px]">
        {`${percent}% - ${label ?? ""}`}
      </div>
    </div>
  )
}
