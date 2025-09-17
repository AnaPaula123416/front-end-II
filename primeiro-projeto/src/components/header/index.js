import styles from "./header.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link className={styles.Link} href='/'>home</Link></li>
                        <li className={styles.liMenu}><Link className={styles.Link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.Link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.Link} href='/produtos'>Pesquisar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    );

}