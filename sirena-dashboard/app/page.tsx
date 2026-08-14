import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
      </style>
      <main className="fondo-principal">
        <Image
          src=" /pngtree-girl-mermaid-swimming-cartoon-vector-png-image_13179484.png"
          alt="Imagen de fondo"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </main>
    </div>
  );
}
