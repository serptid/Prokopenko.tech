export default function BackgroundWebP() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <img
        src="/video/backgroundWEBP.webp"
        alt="Анимированный фон"
        className="w-full h-full object-cover filter blur-md brightness-75"
      />
    </div>
  );
}
