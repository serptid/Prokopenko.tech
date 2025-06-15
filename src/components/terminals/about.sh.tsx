"use client"


import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

interface TerminalProps {
  onClose?: () => void
  onMinimize?: () => void
  onToggleMaximize?: () => void
  onDone?: () => void
}
export default function AboutTerminal({ onDone, onClose, onMinimize, onToggleMaximize }: TerminalProps) {
  return (
    <TerminalWindow
      title="about.sh"
      onClose={onClose}
      onMinimize={onMinimize}
      onToggleMaximize={onToggleMaximize}
    >
        <div className="space-y-2">
          <div className="text-green-300">$ cat about.txt</div>
          <div className="border-l-2 border-green-500 pl-4 space-y-1">
            <Typewriter text="Name: Сергей 'Zombi' Прокопенко" delay={30} />
            <br />
            <Typewriter text="Age: 19" delay={30} />
            <br />
            <Typewriter text="Location: Vladivostok, Russia" delay={30} />
            <br />
            <Typewriter text="Status: В поиске стажировки" delay={30} />
            <br />
            <Typewriter
              text="Bio: Веб-разработчик начального уровня с сильной мотивацией к обучению и росту. Ищу возможность применить полученные знания на практике, участвовать в командной разработке и развиваться в профессиональной среде, осваивая новые технологии."
              delay={25}
              onComplete={onDone}
            />
          </div>
        </div>
    </TerminalWindow>
  )
}