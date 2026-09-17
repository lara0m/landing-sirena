import Image from "next/image";

const benefits = [
  {
    image: "/tractor-campo.jpg",
    title: "Reducción de pérdidas productivas",
    text: "Tomá acciones antes del desastre",
  },
  {
    image: "/MovimientoDeGanado.jpg",
    title: "Mejor planificación operativa",
    text: "Para siembras y desplazamiento del ganado",
  },
  {
    image: "/PlanificacionAgro.webp",
    title: "Mayor seguridad en la toma de decisiones",
    text: "Minimizá la pérdida de forma estratégica",
  },
];

export default function BeneficiosSection() {
  return (
    <section className="min-h-screen bg-[#F4F4F4] px-12 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_2.1fr]">
        <div className="flex flex-col items-start">
          <div className="relative mb-8 h-52 w-52">
            <Image
              src="/sirena2.svg"
              alt="Logo de Sirena"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="max-w-77.5 text-[38px] font-bold leading-[1.08] text-zinc-900">
            Convertí la
            <span className="block w-fit bg-[#2E8B9C] px-1 text-white">
              anticipación
            </span>
            en una ventaja
          </h2>
          <p className="mt-6 max-w-75 text-[16px] leading-4.5 text-zinc-500">
            Anticipate al riesgo hídrico y tomá decisiones estratégicas para
            proteger la producción y los recursos de tu cooperativa.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="card-reveal relative min-h-120 overflow-hidden rounded-xl"
              style={{ "--card-delay": `${index * 140}ms` } as React.CSSProperties}
            >
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2E8B9C] via-[#2E8B9C]/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-36 p-5 text-white">
                <h3 className="h-12 text-[20px] font-bold leading-tight">
                  {benefit.title}
                </h3>
                <p className="mt-3 h-8 text-[16px] leading-4.5 text-white/90">
                  {benefit.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
