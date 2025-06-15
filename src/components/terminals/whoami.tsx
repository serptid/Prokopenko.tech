"use client"

import Image from "next/image"
import { useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

interface TerminalProps {
  onClose?: () => void
  onMinimize?: () => void
  onToggleMaximize?: () => void
}
export default function WhoamiTerminal({ onClose, onMinimize, onToggleMaximize }: TerminalProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <TerminalWindow
      title="root@hacker:~$ whoami"
      className="w-full"
      onClose={onClose}
      onMinimize={onMinimize}
      onToggleMaximize={onToggleMaximize}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">

        <div className="w-full max-w-xl min-h-[170px] bg-black relative rounded-xl overflow-hidden">
          <Image
            src="/avatar.webp"
            alt="Avatar"
            fill
            className={`object-cover object-[25%_35%] select-none pointer-events-none transition-opacity duration-700 ease-in-out ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
            onLoad={() => setLoaded(true)}
            priority
          />
        </div>

        <div className="space-y-2 text-left">
          <div className="text-green-300">
            <Typewriter text="$initializing_developer_portfolio.exe..." delay={30} />
          </div>
          <div className="text-green-500">
            <Typewriter text="[OK] System loaded successfully" delay={40} />
          </div>
          <div className="text-green-400">
            <Typewriter text="[INFO] Welcome to the Matrix..." delay={60} />
          </div>
          <div className="mt-4 text-xl">
            <Typewriter text="> SERYOGAZOMBI_HACKER.exe" delay={80} />
          </div>
          <div className="text-green-300">
            <Typewriter text="Student | Full Stack Developer | DevOps" delay={50} />
          </div>
        </div>
      </div>
    </TerminalWindow>
  )
}