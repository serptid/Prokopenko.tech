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
            <Typewriter text="Age: 19" delay={30} />
            <br />
            <Typewriter text="Location: Vladivostok, Russia" delay={30} />
            <br />
            <Typewriter text="Status: [ONLINE] Ready to hack the world" delay={30} />
            <br />
            <Typewriter
              text="Bio: Веб-разработчик начального уровня с сильной мотивацией к обучению и росту. Ищу возможность применить полученные знания на практике, участвовать в командной разработке и развиваться в профессиональной среде, осваивая новые технологии."
              delay={20}
              onComplete={onDone}
            />
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
