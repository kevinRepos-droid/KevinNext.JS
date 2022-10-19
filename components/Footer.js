import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contendor ${styles.contenido}`}>
            <nav className="styles.navegacion">
                        <Link href="/"> Inicio </Link>
                        <Link href="/nosotros"> Nosotros </Link>
                        <Link href="/blog"> Blog </Link>
                        <Link href="/tienda"> Tienda </Link>
                     </nav>
                     <p>Todos los derrechos reservados</p>

        </div>

    </footer>
  )
}

export default Footer
