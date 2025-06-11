"use client"

import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

export default function WhoamiTerminal() {
  return (
    <TerminalWindow title="root@hacker:~$ whoami" className="w-full">
      <div className="space-y-2">
        <div className="text-green-300">
          <Typewriter text="$ initializing_hacker_portfolio.exe..." delay={30} />
        </div>
        <div className="text-green-500">
          <Typewriter text="[OK] System loaded successfully" delay={40} />
        </div>
        <div className="text-green-400">
          <Typewriter text="[INFO] Welcome to the Matrix..." delay={60} />
        </div>
        <div className="mt-4 text-xl">
          <Typewriter text="> SERYOGA_HACKER.exe" delay={80} />
        </div>
        <div className="text-green-300">
          <Typewriter text="Full Stack Developer | Cybersecurity Enthusiast | Code Ninja" delay={50} />
        </div>
      </div>
    </TerminalWindow>
  )
}
