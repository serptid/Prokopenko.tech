"use client"

import MatrixBackground from "@/components/MatrixBackground"

import WhoamiTerminal from "@/components/terminals/whoami"
import AboutTerminal from "@/components/terminals/about.sh"
import SkillsTerminal from "@/components/terminals/skills.py"
import ProjectsTerminal from "@/components/terminals/projects.json"
import ContactTerminal from "@/components/terminals/contact.sh"
import StatusTerminal from "@/components/terminals/status"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <WhoamiTerminal />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AboutTerminal />
          <SkillsTerminal />
          <ProjectsTerminal />
          <ContactTerminal />
        </div>

      <div className="mt-6">
        <StatusTerminal />
      </div>
      </div>
    </div>
  )
}
