import React from "react";
import styles from "./section_uno.module.css";

const Section_uno = () => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorTexto}>
        <h1 className={styles.titulo}>Tiendas quickgold</h1>
        <p className={styles.texto}>
          Actualmente contamos con un total de <strong>62</strong> tiendas.
        </p>
      </div>
    </section>
  );
};

export default Section_uno;
