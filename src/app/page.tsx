"use client"

import MatrixBackground from "@/components/MatrixBackground"

import WhoamiTerminal from "@/components/terminals/whoami"
import AboutTerminal from "@/components/terminals/about.sh"
import SkillsTerminal from "@/components/terminals/skills.py"
import ProjectsTerminal from "@/components/terminals/projects.json"
import ContactTerminal from "@/components/terminals/contact.sh"
import StatusTerminal from "@/components/terminals/status"
import type { HiddenWindow } from "@/components/terminals/status"
import { useState } from "react"

type WindowId = "whoami" | "about" | "skills" | "projects" | "contact"

interface WindowState {
  title: string
  minimized: boolean
  closed: boolean
}

export default function Page() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    whoami: { title: "root@hacker:~$ whoami", minimized: false, closed: false },
    about: { title: "about.sh", minimized: false, closed: false },
    skills: { title: "skills.py", minimized: false, closed: false },
    projects: { title: "achievements.md", minimized: false, closed: false },
    contact: { title: "contact.sh", minimized: false, closed: false },
  })

  const handleClose = (id: WindowId) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], closed: true } }))
  }

  const handleMinimize = (id: WindowId) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], minimized: true } }))
  }

  const handleOpen = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: false, closed: false },
    }))
  }

  const hidden: HiddenWindow[] = Object.entries(windows)
    .filter(([_, w]) => w.minimized || w.closed)
    .map(([id, w]) => ({ id: id as WindowId, title: w.title }))

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-7xl mx-auto space-y-4">
        <StatusTerminal
          windows={hidden}
          onOpen={(id) => handleOpen(id as WindowId)}
        />

        {!windows.whoami.closed && !windows.whoami.minimized && (
          <div className="mb-4">
            <WhoamiTerminal
              onClose={() => handleClose("whoami")}
              onMinimize={() => handleMinimize("whoami")}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {!windows.about.closed && !windows.about.minimized && (
            <AboutTerminal
              onClose={() => handleClose("about")}
              onMinimize={() => handleMinimize("about")}
            />
          )}
          {!windows.skills.closed && !windows.skills.minimized && (
            <SkillsTerminal
              onClose={() => handleClose("skills")}
              onMinimize={() => handleMinimize("skills")}
            />
          )}
          {!windows.projects.closed && !windows.projects.minimized && (
            <ProjectsTerminal
              onClose={() => handleClose("projects")}
              onMinimize={() => handleMinimize("projects")}
            />
          )}
          {!windows.contact.closed && !windows.contact.minimized && (
            <ContactTerminal
              onClose={() => handleClose("contact")}
              onMinimize={() => handleMinimize("contact")}
            />
          )}
        </div>
      </div>
    </div>
  )
}
