import Link from "next/link";
import Image from "next/image";
import fondoImg from '@/public/fondo.png'

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
            src={fondoImg}
            alt="Imagen de fondo"
            fill={true}
            loading="eager"
            className="fondo"
            />
        </body>
    )
}