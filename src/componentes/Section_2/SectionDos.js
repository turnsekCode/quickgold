import React, { useState } from "react";
import Comprar from "../ConversorDivisa/Comprar";
import styles from "./section_2.module.css";
import Vender from "../ConversorDivisa/Vender";

const SectionDos = ({ datos }) => {
  const [switched, setSwitched] = useState(null);
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
            <button
              onClick={() => {
                setSwitched(false);
              }}
              className={
                switched
                  ? `${styles.botonComprar}`
                  : `${styles.botonComprar} ${styles.botonActivo}`
              }
            >
              QUIERO EUROS
            </button>
            <button
              className={
                switched
                  ? `${styles.botonVender} ${styles.botonActivo}`
                  : ` ${styles.botonVender}`
              }
              onClick={() => {
                setSwitched(true);
              }}
            >
              TENGO EUROS
            </button>
          </div>
        </div>
        {switched ? <Vender datos={datos} /> : <Comprar datos={datos} />}
      </div>
    </section>
  );
};

export default SectionDos;
