import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import AsciiProgressBar from "../AsciiProgressBar"

interface SkillsTerminalProps {
  onDone?: () => void
}

const skills = [
  { label: "JavaScript", percent: 65 },
  { label: "TypeScript", percent: 60 },
  { label: "React/Next.js", percent: 82 },
  { label: "FastAPI", percent: 76 },
  { label: "Python", percent: 80 },
  { label: "Linux/Bash", percent: 93 },
  { label: "DevOps", percent: 70 },
  { label: "English", percent: 72 }
]

export default function SkillsTerminal({ onDone }: SkillsTerminalProps) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount < skills.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1)
      }, 400) // Задержка появления каждой строки
      return () => clearTimeout(timer)
    } else if (onDone) {
      onDone()
    }
  }, [visibleCount, onDone])

  return (
    <TerminalWindow title="skills.py">
      <div className="space-y-2 text-green-300 font-mono">
        <div>$ python3 skills.py --list</div>
        <div className="space-y-1">
          {skills.slice(0, visibleCount).map((skill, idx) => (
            <AsciiProgressBar key={idx} {...skill} />
          ))}
        </div>
      </div>
    </TerminalWindow>
  )
}
