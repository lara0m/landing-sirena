import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-14.75 items-center justify-between bg-white px-14 text-zinc-800 shadow-sm">
      <div className="text-[28px] font-bold tracking-[-1px] text-[#11194F]">
        <Image
          src="/logo-dark.svg"
          alt="Sirena"
          width={120}
          height={48}
          className="h-8 w-auto object-contain"
        />
      </div>

      <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-14 text-[13px]">
        <Link href="/#inicio" className="text-zinc-800 no-underline hover:opacity-70">
          Inicio
        </Link>
        <span className="text-zinc-800 no-underline hover:opacity-70">
          Mapa
        </span>  
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
          className="rounded-full border border-[#999999] px-6 py-1.75 text-zinc-800 no-underline transition-colors hover:bg-zinc-50"
        >
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
}