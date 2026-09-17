const fields = [
  { id: "nombre", label: "Nombre", placeholder: "Escribe tu nombre aquí", required: true },
  { id: "telefono", label: "Teléfono", placeholder: "Escribe tu teléfono aquí", required: false },
  { id: "email", label: "Email", placeholder: "Escribe tu email aquí", required: true },
];

export default function ContactoSection() {
  return (
    <section id="contacto" className="bg-[#F4F4F4] px-8 py-24 sm:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.35fr] lg:items-center">
        <div className="flex gap-5">
          <div className="w-1 shrink-0 self-stretch rounded-full bg-linear-to-b from-[#90EEC5] to-[#2E8B9C]" />
          <div className="py-1">
            <h2 className="text-[42px] font-semibold leading-tight text-zinc-800">
              Contactanos
            </h2>
            <div className="mt-7 space-y-5 text-[16px] leading-4.5 text-zinc-600">
              <div>
                <p>Email</p>
                <a
                  href="mailto:sirenaai2025@gmail.com"
                  className="mt-2 block text-zinc-800 no-underline hover:text-[#2E8B9C]"
                >
                  @sirenaai2025@gmail.com
                </a>
              </div>
              <div>
                <p>Teléfono</p>
                <a
                  href="tel:+54112345678"
                  className="mt-2 block text-zinc-800 no-underline hover:text-[#2E8B9C]"
                >
                  11 1234 5678
                </a>
              </div>
              <div>
                <p>Redes sociales</p>
                <div className="mt-3 flex gap-5">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-bold text-white no-underline"
                  >
                    <img src="/linkedn.svg" alt="" className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-bold text-white no-underline"
                  >
                    <img src="/instagram.svg" alt="" className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:sirenaai2025@gmail.com"
                    aria-label="Email"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-[11px] font-bold text-white no-underline"
                  >
                    <img src="/mail.svg" alt="" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="grid gap-5" action="#" method="post">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.slice(0, 2).map((field) => (
              <label key={field.id} htmlFor={field.id} className="text-[12px] text-zinc-800">
                {field.label} {field.required && <span className="text-red-500">*</span>}
                <input
                  id={field.id}
                  name={field.id}
                  type={field.id === "email" ? "email" : "text"}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="mt-2 h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-[12px] outline-none placeholder:text-zinc-400 focus:border-[#2E8B9C]"
                />
              </label>
            ))}
          </div>

          <label htmlFor="email" className="text-[12px] text-zinc-800">
            {fields[2].label} <span className="text-red-500">*</span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={fields[2].placeholder}
              required
              className="mt-2 h-10 w-full rounded-md border border-zinc-300 bg-white px-3 text-[12px] outline-none placeholder:text-zinc-400 focus:border-[#2E8B9C]"
            />
          </label>

          <label htmlFor="mensaje" className="text-[12px] text-zinc-800">
            Mensaje <span className="text-red-500">*</span>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí"
              required
              className="mt-2 min-h-30 w-full resize-y rounded-md border border-zinc-300 bg-white p-3 text-[12px] outline-none placeholder:text-zinc-400 focus:border-[#2E8B9C]"
            />
          </label>

          <button
            type="submit"
            className="h-10 rounded-full bg-[#2E8B9C] text-[12px] text-white transition-colors hover:opacity-80"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
