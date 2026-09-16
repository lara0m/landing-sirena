import Image from "next/image";

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: "/linkedn.svg" },
  { href: "#", label: "Instagram", icon: "/instagram.svg" },
  { href: "mailto:sirenaai2025@gmail.com", label: "Email", icon: "/mail.svg" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#282828] text-white">
      <Image
        src="/imagen-footer.svg"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-center opacity-40"
      />
      <div className="relative mx-auto flex min-h-36 max-w-7xl flex-col justify-between gap-8 px-8 py-7 sm:px-12 lg:flex-row lg:items-center">
        <div>
          <Image
            src="/logo-footer.svg"
            alt="Sirena AI"
            width={265}
            height={60}
            className="h-10 w-auto object-contain object-left"
          />
          <p className="mt-4 max-w-4xl text-[13px] leading-tight text-white">
            Sirena AI es un sistema de alerta temprana de inundaciones basado en
            inteligencia artificial, el cuál predice la probabilidad de
            inundación con 7 días de anticipación.
          </p>
        </div>

        <nav aria-label="Redes sociales" className="flex shrink-0 gap-5">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              href={socialLink.href}
              aria-label={socialLink.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2E8B9C] transition-opacity hover:opacity-80"
            >
              <Image
                src={socialLink.icon}
                alt=""
                width={24}
                height={24}
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
