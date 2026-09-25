export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100vh-59px)] w-full items-center bg-[#F4F4F4] px-14"
    >
      <div className="max-w-[720px]">
        <h1 className="bg-[linear-gradient(90deg,#256F7D_0%,#2E8B9C_52%,#72AAB5_100%)] bg-clip-text text-[40px] font-bold leading-tight text-transparent">
          Predicción de inundaciones con IA
        </h1>
        <p className="mt-4 text-[16px] leading-4.5 text-zinc-800">
          Anticipamos las inundaciones, prevenimos riesgos
        </p>
        <div className="mt-5 inline-block rounded-full bg-[linear-gradient(90deg,#256F7D_0%,#2E8B9C_100%)] p-1 shadow-[0_0_10px_rgba(46,139,156,0.3)]">
          <a
            className="block rounded-full bg-[#256F7D] px-5 py-2 text-[12px] font-medium text-white no-underline transition-colors hover:bg-[#205f6c]"
          >
            Ir al mapa
          </a>
        </div>
      </div>
    </section>
  );
}