import Image from "next/image";

const features = [
  {
    icon: "/location.svg",
    title: "Precisión geográfica",
    text: "Podés visualizar el riesgo con gran nivel de detalle territorial, adaptado a zonas específicas y no a estimaciones generales.",
  },
  {
    icon: "/cerebro.svg",
    title: "Predicción anticipada",
    text: "Te permite anticiparte a anegamientos e inundaciones con hasta 7 días de antelación, permitiéndote tomar decisiones estratégicas antes de que el riesgo sea crítico.",
  },
  {
    icon: "/gota.svg",
    title: "Enfoque en riesgo hídrico",
    text: "Está diseñado exclusivamente para analizar inundaciones y exceso de agua, con modelos ajustados a variables reales del entorno.",
  },
  {
    icon: "/burbuja.svg",
    title: "Sistema de alertas",
    text: "Vas a recibir alertas específicas por Whatsapp para que detrás de cada alerta pueda haber una decisión concreta.",
  },
];

export default function CaracteristicasSection() {
  return (
    <section
      className="min-h-screen px-8 py-20 sm:px-12"
      style={{
        background:
          "linear-gradient(to bottom, #F4F4F4 0%, rgba(244, 244, 244, 0) 18%), radial-gradient(ellipse 78% 58% at 50% 44%, rgba(158, 255, 213, 0.34) 0%, rgba(158, 255, 213, 0.2) 38%, rgba(158, 255, 213, 0.08) 68%, #F4F4F4 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-[38px] font-bold text-[#2E8B9C]">
          ¿Por qué elegir Sirena AI?
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="min-h-70 rounded-2xl bg-white px-5 py-8"
            >
              <div className="flex h-20 items-center justify-center">
                <Image
                  src={feature.icon}
                  alt=""
                  width={78}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mt-5 min-h-14 text-center text-[21px] font-semibold leading-tight text-zinc-800">
                {feature.title}
              </h3>
              <p className="mt-3 text-[12px] leading-tight text-zinc-500">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
