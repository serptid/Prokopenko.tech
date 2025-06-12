"use client"

import Image from "next/image"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

export default function WhoamiTerminal() {
  return (
    <TerminalWindow title="root@hacker:~$ whoami" className="w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Левая часть — изображение */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={608}
            height={358}
            className="object-cover w-full h-auto"
          />
        </div>


        {/* Правая часть — текст */}
        <div className="space-y-2 text-left">
          <div className="text-green-300">
            <Typewriter text="$ initializing_developer_portfolio.exe..." delay={30} />
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
