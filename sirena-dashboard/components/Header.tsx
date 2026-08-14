import Link from "next/link";


const styles ={
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' },
    logo: { fontSize: '1.5rem', fontWeight: 'bold' },
    nav: { display: 'flex', gap: '1.5rem' },
    link: { color: '#fff', textDecoration: 'none' },
}
export default function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <Link href="/">MyLogo</Link>
            </div>
            <nav style={styles.nav}>
                <Link href="/about" style={styles.link}>About</Link>
                <Link href="/services" style={styles.link}>Services</Link>
                <Link href="/contact" style={styles.link}>Contact</Link>
            </nav>
        </header>
    );
}