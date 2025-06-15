"use client"

import { Terminal, Minus, Square, X } from "lucide-react"
import { ReactNode, useRef, useState } from "react"
import { useDraggable } from "@neodrag/react"

export interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
  onClose?: () => void
  onMinimize?: () => void
  onToggleMaximize?: () => void
}

export default function TerminalWindow({
  title,
  children,
  className = "",
  onClose,
  onMinimize,
  onToggleMaximize,
}: TerminalWindowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [maximized, setMaximized] = useState(false)

  useDraggable(ref as React.RefObject<HTMLElement>, {
    handle: ".handle",
  })

  const handleToggleMaximize = () => {
    setMaximized((m) => !m)
    onToggleMaximize?.()
  }

  return (
    <div
      ref={ref}
      className={`relative rounded-xl overflow-hidden border border-green-500 shadow-2xl shadow-green-500/20 ${className} ${maximized ? "fixed inset-0 z-50 w-screen h-screen" : ""}`}
    >
      <div className="handle flex items-center justify-between bg-gray-900 px-4 py-1 cursor-move">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Minus
            onClick={onMinimize}
            className="w-5 h-5 text-yellow-500 translate-y-[5px] scale-y-[1] cursor-pointer"
          />
          <div className="relative w-5 h-5 scale-[0.95]">
            <Square
              onClick={handleToggleMaximize}
              className="absolute top-0 left-0 w-5 h-5 text-green-500 cursor-pointer"
            />
          </div>
          <X onClick={onClose} className="w-5 h-5 text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="p-4 font-mono text-green-400 min-h-[200px] bg-black overflow-y-auto max-h-[70vh]">
        {children}
      </div>
    </div>
  )
}
