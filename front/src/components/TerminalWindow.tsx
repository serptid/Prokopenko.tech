import { Terminal } from "lucide-react"
import { ReactNode } from "react"

export interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`rounded-xl overflow-hidden border border-green-500 shadow-2xl shadow-green-500/20 ${className}`}>
      <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-green-500">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full"></button>
          <button className="w-3 h-3 bg-red-500"></button>
        </div>
      </div>
      <div className="p-4 font-mono text-green-400 min-h-[200px]">{children}</div>
    </div>
  )
}
