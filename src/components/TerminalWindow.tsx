"use client"

import { Terminal, Minus, Square, X } from "lucide-react"
import { ReactNode, useRef } from "react"
import { useDraggable } from "@neodrag/react"

export interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Используем transform, НЕ absolute
  useDraggable(ref as React.RefObject<HTMLElement>, {
    handle: ".handle",
  })

  return (
    <div
      ref={ref}
      className={`relative rounded-xl overflow-hidden border border-green-500 shadow-2xl shadow-green-500/20 ${className}`}
    >
      <div className="handle flex items-center justify-between bg-gray-900 px-4 py-1 cursor-move">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Minus className="w-5 h-5 text-yellow-500 translate-y-[5px] scale-y-[1]" />
          <div className="relative w-5 h-5 scale-[0.95]">
            <Square className="absolute top-0 left-0 w-5 h-5 text-green-500" />
          </div>
          <X className="w-5 h-5 text-red-500" />
        </div>
      </div>
      <div className="p-4 font-mono text-green-400 min-h-[200px] bg-black">
        {children}
      </div>
    </div>
  )
}
