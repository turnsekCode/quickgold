import React from "react";
import styles from "./sectionUno.module.css";

const Section_uno = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorBloqueSuperior}>
        <div className={styles.bloqueIzq}></div>
        <div className={styles.bloqueDer}>
          <h1>Preguntas frecuentes</h1>
          <p>
            ¿No encuentras la respuesta que estabas buscando? Llama gratis al{" "}
            <a href="tel:900373629">900 373 629</a> o envíanos un correo a{" "}
            <a href="mailto:central@quickgold.es">central@quickgold.es</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_uno;
