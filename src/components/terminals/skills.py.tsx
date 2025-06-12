import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import AsciiProgressBar from "../AsciiProgressBar"

interface SkillsTerminalProps {
  onDone?: () => void
}

export default function SkillsTerminal({ onDone }: SkillsTerminalProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
      if (onDone) onDone()
    }, 300)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <TerminalWindow title="skills.py">
      {show && (
        <div className="space-y-2 text-green-300 font-mono">
          <div>$ python3 skills.py --list</div>
          <div className="space-y-1">
            <AsciiProgressBar label="JavaScript" percent={65} />
            <AsciiProgressBar label="TypeScript" percent={60} />
            <AsciiProgressBar label="React/Next.js" percent={82} />
            <AsciiProgressBar label="FastAPI" percent={76} />
            <AsciiProgressBar label="Python" percent={80} />
            <AsciiProgressBar label="Linux/Bash" percent={93} />
            <AsciiProgressBar label="DevOps" percent={70} />
            <AsciiProgressBar label="English" percent={72} />
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
