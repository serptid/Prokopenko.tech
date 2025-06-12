"use client"

import { useEffect, useState } from "react"
import TerminalWindow from "../TerminalWindow"
import Typewriter from "../Typewriter"
import { FaUserGraduate, FaTrophy } from "react-icons/fa"

export default function ProjectsTerminal({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const iconHeaderClass = "inline-block mr-2 text-green-400 w-4 h-4 align-middle";

  return (
    <TerminalWindow title="achievements.md">
      {show && (
        <div className="space-y-2">
          <div className="text-green-300">$ cat student_portfolio/main.txt</div>
          <div className="space-y-4">
            <div>
              <span className="flex items-center">
                <FaUserGraduate className={iconHeaderClass} />
                <Typewriter text="Статус: Студент 3 курса, ДВФУ" delay={25} />
              </span>

              <span className="text-green-600 text-sm ml-4">
                └── Специальность: Информатика и вычислительная техника
              </span>
              <br />
              <span className="text-green-600 text-sm ml-4">
                └── Направление: Цифровые двойники и киберфизические системы
              </span>
              <br />
              <span className="text-gray-400 text-xs ml-4">
                └── Активность: Активно изучаю профильные дисциплины и ищу возможности для стажировки.
              </span>
            </div>

            <div>
              <span className="flex items-center">
                <FaTrophy className={iconHeaderClass} />
                <Typewriter text="Хакатон (2 место): 'Зимняя проектная школа'" delay={25}
                  onComplete={onDone}
                />
              </span>
              <span className="text-green-600 text-sm ml-4">
                └── Описание: Разработка Telegram-бота для составления расписаний и расчета времени работы оборудования в лабораториях ДВФУ.
              </span>
              <br />
              <span className="text-green-600 text-sm ml-4">
                └── Технологии: Python (фреймворк aiogram), PostgreSQL (для хранения данных), алгоритмы расчета.
              </span>
              <br />
              <span className="text-gray-400 text-xs ml-4">
                └── Активность: Командная разработка в рамках проектной школы ДВФУ на тему &quot;Цифровые решения для биоэкономики Дальнего Востока&quot;.
              </span>
            </div>

          </div>
        </div>
      )}
    </TerminalWindow>
  )
}