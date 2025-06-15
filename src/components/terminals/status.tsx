"use client"

import { useRef } from "react"
import { useDraggable } from "@neodrag/react"

export interface MinimizedWindow {
  id: string
  title: string
}

interface StatusTerminalProps {
  minimized: MinimizedWindow[]
  onRestore: (id: string) => void
}

export default function StatusTerminal({ minimized, onRestore }: StatusTerminalProps) {
  const ref = useRef<HTMLDivElement>(null)

  useDraggable(ref as React.RefObject<HTMLElement>, {
    handle: ".handle",
  })

  return (
    <div ref={ref} className="relative w-full max-w-7xl mx-auto">
      <div className="handle bg-gray-900 border border-green-500 rounded p-2 flex justify-between items-center text-sm cursor-move w-full">
        <div className="flex items-center gap-4">
          <span className="text-green-400">Status: [ONLINE]</span>
          <span className="text-green-400">Uptime: 24/7</span>
          <span className="text-green-400">Security: [MAXIMUM]</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400">System Ready</span>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {minimized.map((w) => (
            <button
              key={w.id}
              onClick={() => onRestore(w.id)}
              className="px-2 py-0.5 border border-green-500 rounded text-green-400 hover:bg-green-800"
            >
              {w.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
