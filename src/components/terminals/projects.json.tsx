"use client"

import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"

export default function ProjectsTerminal({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TerminalWindow title="projects.json">
      {show && (
        <div className="space-y-2">
          <div className="text-green-300">$ ls -la ./projects/</div>
          <div className="space-y-3">
            <div>
              <Typewriter text="📁 SecureChat.exe - Encrypted messaging app" delay={25} />
              <br />
              <span className="text-green-600 text-sm ml-4">└── React, WebRTC, End-to-end encryption</span>
            </div>
            <div>
              <Typewriter text="📁 PenTest-Suite - Vulnerability scanner" delay={25} />
              <br />
              <span className="text-green-600 text-sm ml-4">└── Python, Nmap, Custom exploits</span>
            </div>
            <div>
              <Typewriter text="📁 CryptoTracker - Real-time crypto monitor" delay={25} />
              <br />
              <span className="text-green-600 text-sm ml-4">└── Next.js, WebSocket, TradingView API</span>
            </div>
            <div>
              <Typewriter
                text="📁 AI-CodeReviewer - ML-powered code analysis"
                delay={25}
                onComplete={onDone}
              />
              <br />
              <span className="text-green-600 text-sm ml-4">└── Python, TensorFlow, GitHub API</span>
            </div>
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
