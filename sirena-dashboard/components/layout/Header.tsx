import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-[59px] items-center justify-between bg-white px-14 text-zinc-800">
      <div className="text-[28px] font-bold tracking-[-1px] text-[#11194F]">
        <Link href="/">SIRENA</Link>
      </div>

      <nav className="flex gap-14 text-[13px]">
        <Link href="#inicio" className="text-zinc-800 no-underline hover:opacity-70">
          Inicio
        </Link>
        <Link href="#mapa" className="text-zinc-800 no-underline hover:opacity-70">
          Mapa
        </Link>
      </nav>

      <nav className="flex items-center gap-5 text-[12px]">
        <Link
          href="/register"
          className="rounded-full bg-[#2E8B9C] px-6 py-2 text-white no-underline transition-opacity hover:opacity-80"
        >
          Registrarse
        </Link>
        <Link
          href="/login"
          className="rounded-full border border-[#999999] px-6 py-[7px] text-zinc-800 no-underline transition-colors hover:bg-zinc-50"
        >
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
}