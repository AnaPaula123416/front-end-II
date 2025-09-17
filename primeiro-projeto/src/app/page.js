import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>OLÉ</h1>
      <p className={styles.p}>O emoji 🤏 no WhatsApp representa um gesto de pinça, indicando algo pequeno, uma medida pequena, ou um desejo de pegar algo.
         <br/>  Ele também pode ser usado para mostrar que algo é de uma quantidade ou tamanho mínimo, ou mesmo como um gesto <strong>substituto para o emoji</strong>  
        👌 quando se quer dizer que algo é pequeno.</p>
    </div>


  );
}