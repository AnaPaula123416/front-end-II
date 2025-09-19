'use client'
import { useState } from "react";
import styles from "./header.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <>
        <header className={styles.headerMobile}>
            <button onClick={() => {setShow(!show)}}>X</button>
            {show &&
            
            <div style={{height: '280px', border: '2px solid black'}}>
                {/* {<p>MOBILE</p>} */}
                <Image src={'/images/carrots.png'} height={50} width={50} alt='Imagem'></Image>
            </div>
            }
            
        </header>


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
                        <li className={styles.liMenu}><Link className={styles.Link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.Link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.Link} href='/produtos'>Pesquisar</Link></li>
                            </ul>
                        </li>
                        <li className={styles.liMenu}><Link className={styles.Link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.Link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.Link} href='/produtos'>Pesquisar</Link></li>
                            </ul>
                        </li>
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