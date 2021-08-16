import Link from 'next/link'
import { useState } from "react"
import styles from '../styles/Nav.module.scss'


const NavBar = () => {
    const [navActive, setNavActive] = useState(false);

    const handleNavbar = () => {
        setNavActive(!navActive);
    }
    return (
        <nav className={styles.a}>
            <div>
                <Link href='/'>
                    <h1 className={styles.navLogo}>LAWO</h1>
                </Link>
            </div>

            <div className={navActive ? styles.active : styles.linkContainer}>
            <Link href='/'>
                <h4 className={styles.styledLink}>Home</h4>    
            </Link>    

            <Link href='/'>
                <h4 className={styles.styledLink}>Buy</h4>
            </Link>

            <Link href='/'>
                <h4 className={styles.styledLink}>Contact</h4>    
            </Link>        
            </div>

            <div className={styles.hamburger} onClick={handleNavbar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar