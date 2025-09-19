'use client';
import { useState } from "react";
import styles from "./page.module.css"

export default function Home() {

  // let cont = 0;
  const [cont, setCont] = useState(0);
  const [estilo, setEstilo] = useState('colorido')

  const subtrair = () => {
    setCont(cont - 1);
    console.log(cont);
  }

  const adicionar = () => {
    setCont(cont + 1);
    console.log(cont);
  }

  return (

    <div className={styles.div}>
      <h1 className={styles.h1}>OLÉ</h1>
      <p className={styles.p}>O emoji 🤏 no WhatsApp representa um gesto de pinça, indicando algo pequeno, uma medida pequena, ou um desejo de pegar algo.
         <br/>  Ele também pode ser usado para mostrar que algo é de uma quantidade ou tamanho mínimo, ou mesmo como um gesto <strong>substituto para o emoji</strong>  
        👌 quando se quer dizer que algo é pequeno.</p>
      <button onClick={() => { adicionar() }}>Adicionar</button>
      <button onClick={() => { subtrair() }}>Subtrair</button>
      <p>Contagem {cont}</p>

      <button onClick={() => {setEstilo('colorido')}}>Estilo turquesa</button>
      <button onClick={() => {setEstilo('amarelo')}}>Estilo amarelo</button>
      <div className={`${styles.box} ${estilo === 'colorido'? styles.colorido : styles.amarelo}`}></div>
    </div>

  
  );
}