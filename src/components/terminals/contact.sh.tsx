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

  const linkContainerClasses = "flex items-center gap-2 hover:text-green-400 cursor-pointer";
  const linkTextClasses = "hover:underline";

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
            <a
              href="mailto:psi200523@gmail.com"
              className={linkContainerClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAlternateEmail className="w-4 h-4 flex-shrink-0" />
              <span className={linkTextClasses}>
                <Typewriter text="Email: psi200523@gmail.com" delay={30} />
              </span>
            </a>
            <a
              href="https://t.me/ProkopenkoSR"
              className={linkContainerClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="w-4 h-4 flex-shrink-0" />
              <span className={linkTextClasses}>
                <Typewriter text="Telegram: @ProkopenkoSR" delay={30} />
              </span>
            </a>

            <a
              href="https://github.com/serp_tid"
              className={linkContainerClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4 flex-shrink-0" />
              <span className={linkTextClasses}>
                <Typewriter text="GitHub: github.com/serp_tid" delay={30} />
              </span>
            </a>
            <a
              href="https://steamcommunity.com/id/SERP_TID"
              className={linkContainerClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSteam className="w-4 h-4 flex-shrink-0" />
              <span className={linkTextClasses}>
                <Typewriter text="Steam: steamcommunity.com/id/SERP_TID" delay={30} />
              </span>
            </a>

            <a
              href="https://discord.com/users/533201254143229962"
              className={linkContainerClasses}
              target="_blank"
              title="Discord: sery0zha (click to copy or note)"
            >
              <FaDiscord className="w-4 h-4 flex-shrink-0" />
              <span className={linkTextClasses}>
                <Typewriter text="Discord: sery0zha" delay={30} />
              </span>
            </a>

            <div className="mt-4 p-2 border border-green-500 rounded">
              <Typewriter text="[ENCRYPTED] Ready for new challenges and collaborations!" delay={25} />
            </div>
          </div>
        </div>
    </TerminalWindow>
  )
}