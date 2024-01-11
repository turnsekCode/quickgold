import React from "react";
import styles from "./section_uno.module.css";

const Section_uno = ({ general }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorTexto}>
        <h1 className={styles.titulo}>Tiendas quickgold</h1>
        <p className={styles.texto}>
          Actualmente contamos con un total de{" "}
          <strong>{general?.acf?.cantidades_de_tiendas}</strong> tiendas.
        </p>
      </div>
    </section>
  );
};

export default Section_uno;
