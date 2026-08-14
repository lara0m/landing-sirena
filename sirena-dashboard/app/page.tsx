import Image from "next/image";
import fondoImg from '@/public/fondo.png'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
      </style>
      <main className="fondo-principal">
        <section id="inicio"></section>
        <section id="mapa"></section>
      </main>
    </div>
  );
}
