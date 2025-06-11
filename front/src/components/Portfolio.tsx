"use client"

import { useState, useEffect } from "react"
import { Terminal, Mail, Github, Linkedin } from "lucide-react"

interface TypewriterProps {
  text: string
  delay?: number
  onComplete?: () => void
}

function Typewriter({ text, delay = 50, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, delay, text, onComplete])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

interface TerminalWindowProps {
  title: string
  children: React.ReactNode
  className?: string
}

function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
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

function MatrixBackground() {
  const [matrixItems, setMatrixItems] = useState<
    { left: string; top: string; delay: string; char: string }[]
  >([])

  useEffect(() => {
    const items = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      char: Math.random() > 0.5 ? "1" : "0",
    }))
    setMatrixItems(items)
  }, [])

  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent" />
      {matrixItems.map((item, i) => (
        <div
          key={i}
          className="absolute text-green-500 text-xs animate-pulse"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
          }}
        >
          {item.char}
        </div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [showAbout, setShowAbout] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <TerminalWindow title="root@hacker:~$ whoami" className="w-full">
            <div className="space-y-2">
              <div className="text-green-300">
                <Typewriter
                  text="$ initializing_hacker_portfolio.exe..."
                  delay={30}
                  onComplete={() => setTimeout(() => setShowAbout(true), 500)}
                />
              </div>
              <div className="text-green-500">
                <Typewriter text="[OK] System loaded successfully" delay={40} />
              </div>
              <div className="text-green-400">
                <Typewriter text="[INFO] Welcome to the Matrix..." delay={60} />
              </div>
              <div className="mt-4 text-xl">
                <Typewriter text="> SERYOGA_HACKER.exe" delay={80} />
              </div>
              <div className="text-green-300">
                <Typewriter text="Full Stack Developer | Cybersecurity Enthusiast | Code Ninja" delay={50} />
              </div>
            </div>
          </TerminalWindow>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TerminalWindow title="about.sh">
            {showAbout && (
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
                    onComplete={() => setTimeout(() => setShowSkills(true), 300)}
                  />
                </div>
              </div>
            )}
          </TerminalWindow>

          <TerminalWindow title="skills.py">
            {showSkills && (
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
                    onComplete={() => setTimeout(() => setShowProjects(true), 300)}
                  />
                </div>
              </div>
            )}
          </TerminalWindow>

          <TerminalWindow title="projects.json">
            {showProjects && (
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
                      onComplete={() => setTimeout(() => setShowContact(true), 300)}
                    />
                    <br />
                    <span className="text-green-600 text-sm ml-4">└── Python, TensorFlow, GitHub API</span>
                  </div>
                </div>
              </div>
            )}
          </TerminalWindow>

          <TerminalWindow title="contact.sh">
            {showContact && (
              <div className="space-y-2">
                <div className="text-green-300">$ ./connect_with_hacker.sh</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <Typewriter text="Email: psi200523@gmail.com" delay={30} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <Typewriter text="GitHub: github.com/serp_tid" delay={30} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    <Typewriter text="Telegram: @ProkopenkoSR" delay={30} />
                  </div>
                  <div className="mt-4 p-2 border border-green-500 rounded">
                    <Typewriter text="[ENCRYPTED] Ready for new challenges and collaborations!" delay={25} />
                  </div>
                </div>
              </div>
            )}
          </TerminalWindow>
        </div>

        <div className="mt-6 bg-gray-900 border border-green-500 rounded p-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="text-green-400">Status: [ONLINE]</span>
            <span className="text-green-400">Uptime: 24/7</span>
            <span className="text-green-400">Security: [MAXIMUM]</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400">System Ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}
