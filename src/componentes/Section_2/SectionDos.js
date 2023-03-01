import React from "react";
import Comprar from "../ConversorDivisa/Comprar";
import styles from "./section_2.module.css";

const SectionDos = () => {
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>
          <figure>
            <img src="/imagen_calc.png" />
          </figure>
          <div className={styles.contenedorInfo}>
            <h2>Cambio de Divisas</h2>
            <p>Descubre el valor de la moneda que te interesa.</p>
          </div>
          <div className={styles.contenedorBotones}>
            <button className={`${styles.botonComprar} ${styles.botonActivo}`}>
              COMPRAR DIVISA
            </button>
            <button className={styles.botonVender}>VENDER DIVISA</button>
          </div>
        </div>
        <Comprar />
      </div>
    </section>
  );
};

export default SectionDos;
