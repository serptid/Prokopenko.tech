import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-white p-4 text-4xl font-serif">
        Прокопенко Сергей Игоревич
      </div>
      <div className="flex gap-2 p-4 text-white text-sm">
        <Link href="/projects">
          <button className="px-2 py-1 border border-white rounded-lg uppercase font-semibold bg-transparent hover:bg-green-200 hover:text-black transition-colors duration-300">
            Проекты
          </button>
        </Link>
        <Link href="/projects">
          <button className="px-2 py-1 border-1 border-white rounded-lg uppercase font-semibold bg-transparent hover:bg-green-200 hover:text-black transition-colors duration-300">
            Информация
          </button>
        </Link>
      </div>
    </>
  );
}
