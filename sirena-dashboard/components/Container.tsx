import Link from "next/link";
import Image from "next/image";

const styles ={
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', color: '#fff' },
    logo: { fontSize: '1.5rem', fontWeight: 'bold' },
    nav: { display: 'flex', gap: '3.5rem' },
    nav2: { display: 'flex', gap: '3.5rem'},
    link: { color: '#333', textDecoration: 'none' },
}

export default function Container() {
    return (
        <body>
            <Image
            src="/fondo.png"
            alt="Imagen de fondo"

            width={1920}
            height={1080}
            priority
            quality={75}
            style={{ objectFit: "cover", width: "100%", height: "100vh" }}
            loading="eager"
            className="fondo"
            />
        </body>
    )
}