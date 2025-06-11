"use client"

import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"
import { FaTelegram , FaGithub, FaSteam } from "react-icons/fa"
import { MdAlternateEmail  } from "react-icons/md";


export default function ContactTerminal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TerminalWindow title="contact.sh">
      {show && (
        <div className="space-y-2">
          <div className="text-green-300">$ ./connect_with_hacker.sh</div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MdAlternateEmail className="w-4 h-4" />
              <Typewriter text="Email: psi200523@gmail.com" delay={30} />
            </div>
            <div className="flex items-center gap-2">
              <FaGithub  className="w-4 h-4" />
              <Typewriter text="GitHub: github.com/serp_tid" delay={30} />
            </div>
            <div className="flex items-center gap-2">
              <FaTelegram className="w-4 h-4" />
              <Typewriter text="Telegram: @ProkopenkoSR" delay={30} />
            </div>
            <div className="flex items-center gap-2">
              <FaSteam className="w-4 h-4" />
              <Typewriter text="Steam: steamcommunity.com/id/SERP_TID" delay={30} />
            </div>
            <div className="mt-4 p-2 border border-green-500 rounded">
              <Typewriter text="[ENCRYPTED] Ready for new challenges and collaborations!" delay={25} />
            </div>
          </div>
        </div>
      )}
    </TerminalWindow>
  )
}
