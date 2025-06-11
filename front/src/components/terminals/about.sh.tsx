"use client"

import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

export default function AboutTerminal({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TerminalWindow title="about.sh">
      {show && (
        <div className="space-y-2">
          <div className="text-green-300">$ cat about.txt</div>
          <div className="border-l-2 border-green-500 pl-4 space-y-1">
            <Typewriter text="Name: Сергей 'Zombi' Прокопенко" delay={30} />
            <br />
            <Typewriter text="Age: 25" delay={30} />
            <br />
            <Typewriter text="Location: Vladivostok, Russia" delay={30} />
            <br />
            <Typewriter text="Status: [ONLINE] Ready to hack the world" delay={30} />
            <br />
            <Typewriter
              text="Bio: Passionate developer with 5+ years of experience in breaking and building systems. I love clean code, cybersecurity, and late-night coding sessions."
              delay={20}
              onComplete={onDone}
            />
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
