"use client"

import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

export default function SkillsTerminal({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TerminalWindow title="skills.py">
      {show && (
        <div className="space-y-2">
          <div className="text-green-300">$ python3 skills.py --list</div>
          <div className="space-y-1 whitespace-pre text-green-400 font-mono">
            <Typewriter text="[■■■■■■■■■■■         ] 65% - JavaScript     " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■        ] 60% - TypeScript     " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■■   ] 82% - React/Next.js  " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■     ] 76% - FastAPI        " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■    ] 80% - Python         " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■■■■ ] 93% - Linux/Bash     " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■       ] 70% - DevOps         " delay={20} />
            <br />
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
