"use client"

import { useEffect, useState } from "react"

export default function MatrixBackground() {
  const [matrixItems, setMatrixItems] = useState<
    { left: string; top: string; delay: string; char: string }[]
  >([])

  useEffect(() => {
    const items = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      char: Math.random() > 0.5 ? "1" : "0",
    }))
    setMatrixItems(items)
  }, [])

  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent" />
      {matrixItems.map((item, i) => (
        <div
          key={i}
          className="absolute text-green-500 text-xs animate-pulse"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
          }}
        >
          {item.char}
        </div>
      ))}
    </div>
  )
}
