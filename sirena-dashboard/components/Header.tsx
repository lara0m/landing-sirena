import Link from "next/link";


const styles ={
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#fff', color: '#333' },
    logo: { fontSize: '1.5rem', fontWeight: 'bold' },
    nav: { display: 'flex', gap: '3.5rem' },
    nav2: { display: 'flex', gap: '3.5rem'},
    link: { color: '#333', textDecoration: 'none' },
}
export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <Link href="/">MyLogo</Link>
            </div>
            <nav style={styles.nav}>
                <Link href="/inicio" style={styles.link}>Inicio</Link>
                <Link href="/mapa" style={styles.link}>Mapa</Link>
            </nav>
            <nav style={styles.nav2}>
                <Link href="/register" style={styles.link}>Registrarse</Link>
                <Link href="/login" style={styles.link}>Iniciar Sesión</Link>
            </nav>
        </header>
    );
}