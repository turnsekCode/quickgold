import React from "react";
import styles from "./section_uno.module.css";

const Section_uno = () => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorSectionUnoMargen}>
        <h1>
          Empresa de compraventa de metales preciosos, empeños y cambio de
          divisa.
        </h1>
        <p>Totalmente diferentes a lo que conocías.</p>
      </div>
    </section>
  );
};

export default Section_uno;
