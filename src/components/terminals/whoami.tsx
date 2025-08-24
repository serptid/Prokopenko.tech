"use client"

import Image from "next/image"
import { useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"
import FaultyTerminal from '../FaultyTerminal';


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
          <div className="w-full h-[160px] relative">
            <FaultyTerminal
              scale={1.0}
              gridMul={[3, 1]}
              digitSize={1.2}
              timeScale={1}
              pause={false}
              scanlineIntensity={1}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0}
              tint="#a7ef9e"
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={true}
              brightness={1}
            />
          </div>
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