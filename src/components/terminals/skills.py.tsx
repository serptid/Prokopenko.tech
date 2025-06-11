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
            <Typewriter text="[■■■■■■■■■■■■■■■■■■■■] 95% - JavaScript     " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■■■  ] 90% - TypeScript     " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■■■■ ] 92% - React/Next.js  " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■■■  ] 88% - Node.js        " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■    ] 80% - Python         " delay={20} />
            <br />
            <Typewriter text="[■■■■■■■■■■■■■■■■■■■ ] 93% - Linux/Bash     " delay={20} />
            <br />
            <Typewriter
              text="[■■■■■■■■■■■■■■■■■■  ] 85% - Cybersecurity  "
              delay={20}
              onComplete={onDone}
            />
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
