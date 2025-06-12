// app/layout.tsx
import type { Metadata, Viewport } from "next"
import "@/app/globals.css" // обязательно подключи стили Tailwind

export const metadata: Metadata = {
  title: "Сергей Прокопенко | Terminal/Портфолио",
  description: "Портфолио разработчика и энтузиаста в стиле терминала.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap&subset=latin,cyrillic"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-green-400 font-mono">
        {children}
      </body>
    </html>
  )
}
