"use client"

import { useRef } from "react"
import { useDraggable } from "@neodrag/react"

export interface HiddenWindow {
  id: string
  title: string
}

interface StatusTerminalProps {
  windows: HiddenWindow[]
  onOpen: (id: string) => void
}

export default function StatusTerminal({ windows, onOpen }: StatusTerminalProps) {
  const ref = useRef<HTMLDivElement>(null)

  useDraggable(ref as React.RefObject<HTMLElement>, {
    handle: ".handle",
  })

  return (
    <div ref={ref} className="relative w-full max-w-7xl mx-auto">
      <div
        className="handle bg-gray-900 border border-green-500 rounded p-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm cursor-move w-full"
      >
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4">
          <span className="text-green-400">Status: [ONLINE]</span>
          <span className="text-green-400">Uptime: 24/7</span>
          <span className="text-green-400">Security: [MAXIMUM]</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400">System Ready</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:ml-4">
          {windows.map((w) => (
            <button
              key={w.id}
              onClick={() => onOpen(w.id)}
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
