"use client"


import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"
import { FaTelegram, FaGithub, FaSteam, FaDiscord } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"

interface TerminalProps {
  onClose?: () => void
  onMinimize?: () => void
  onToggleMaximize?: () => void
}

export default function ContactTerminal({ onClose, onMinimize, onToggleMaximize }: TerminalProps) {

  const linkContainerClasses = "flex items-center gap-2";
  const linkTextClasses = "text-green-300 hover:text-green-400 hover:underline cursor-pointer";

  return (
    <TerminalWindow
      title="contact.sh"
      onClose={onClose}
      onMinimize={onMinimize}
      onToggleMaximize={onToggleMaximize}
    >
        <div className="space-y-2">
          <div className="text-green-300">$ ./connect_with_hacker.sh</div>
          <div className="space-y-3">
            <div className={linkContainerClasses}>
              <MdAlternateEmail className="w-4 h-4 flex-shrink-0" />
              <a
                href="mailto:psi200523@gmail.com"
                className={linkTextClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typewriter text="Email: psi200523@gmail.com" delay={30} />
              </a>
            </div>
            <div className={linkContainerClasses}>
              <FaTelegram className="w-4 h-4 flex-shrink-0" />
              <a
                href="https://t.me/ProkopenkoSR"
                className={linkTextClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typewriter text="Telegram: @ProkopenkoSR" delay={30} />
              </a>
            </div>

            <div className={linkContainerClasses}>
              <FaGithub className="w-4 h-4 flex-shrink-0" />
              <a
                href="https://github.com/serp_tid"
                className={linkTextClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typewriter text="GitHub: github.com/serp_tid" delay={30} />
              </a>
            </div>
            <div className={linkContainerClasses}>
              <FaSteam className="w-4 h-4 flex-shrink-0" />
              <a
                href="https://steamcommunity.com/id/SERP_TID"
                className={linkTextClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typewriter text="Steam: steamcommunity.com/id/SERP_TID" delay={30} />
              </a>
            </div>

            <div className={linkContainerClasses}>
              <FaDiscord className="w-4 h-4 flex-shrink-0" />
              <a
                href="https://discord.com/users/533201254143229962"
                className={linkTextClasses}
                target="_blank"
                rel="noopener noreferrer"
                title="Discord: sery0zha (click to copy or note)"
              >
                <Typewriter text="Discord: sery0zha" delay={30} />
              </a>
            </div>

            <div className="mt-4 p-2 border border-green-500 rounded">
              <Typewriter text="[ENCRYPTED] Ready for new challenges and collaborations!" delay={25} />
            </div>
          </div>
        </div>
    </TerminalWindow>
  )
}
