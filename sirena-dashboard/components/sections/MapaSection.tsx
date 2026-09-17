import Image from "next/image";

const impacts = [
  {
    icon: "/planta.svg",
    title: "Cultivos afectados",
    text: "Las inundaciones pueden afectar cultivos en distintas etapas de producción, generar pérdidas económicas y dificultar la planificación de futuras siembras.",
  },
  {
    icon: "/tractor.svg",
    title: "Maquinaria dañada",
    text: "Equipamiento clave queda expuesto cuando el aviso llega sin margen operativo.",
  },
  {
    icon: "/camion.svg",
    title: "Logística interrumpida",
    text: "Las inundaciones pueden dificultar el acceso a los campos, interrumpir el transporte y alterar los tiempos de trabajo.",
  },
];

export default function MapaSection() {
  return (
    <section id="mapa" className="min-h-screen bg-[#F4F4F4] px-12 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-[42px] font-semibold leading-tight text-zinc-900">
          Cada inundación llega sin aviso y produce altos costos
        </h2>

        <div className="grid gap-6 lg:grid-cols-[2.1fr_1fr]">
          <div className="relative h-full min-h-105 overflow-hidden rounded-xl lg:min-h-0">
            <Image
              src="/Campo_Inundado.svg"
              alt="Zona urbana afectada por una inundación"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {impacts.map((impact, index) => (
              <article
                key={impact.title}
                className="card-reveal min-h-37.5 rounded-xl border border-white/60 bg-white/35 p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] backdrop-blur-md"
                style={{ "--card-delay": `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF9C12] text-lg">
                    <Image
                      src={impact.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="h-5 w-5 object-contain"
                    />
                  </span>
                  <h3 className="text-[23px] font-semibold text-zinc-900">
                    {impact.title}
                  </h3>
                </div>
                <p className="mt-3 text-[16px] leading-4.5 text-zinc-500">
                  {impact.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}