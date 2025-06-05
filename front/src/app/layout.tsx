import "./globals.css";
import BackgroundWebP from "@/components/BackgroundWebP";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body>
        <BackgroundWebP />
        {children}
      </body>
    </html>
  );
}
