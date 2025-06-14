import { useEffect } from "react"
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
  useEffect(() => {
    onDone?.()
  }, [onDone])

  return (
    <TerminalWindow title="skills.py">
      <div className="space-y-2 text-green-300 font-mono">
        <div>$ python3 skills.py --list</div>
        <div className="space-y-0">
          {skills.map((skill, idx) => (
            <AsciiProgressBar key={idx} {...skill} />
          ))}
        </div>
      </div>
    </TerminalWindow>
  )
}