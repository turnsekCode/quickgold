import React, { useState } from "react";
import Comprar from "../Section_3/ConversorDivisa/Comprar";
import styles from "./section_2.module.css";
import Vender from "../Section_3/ConversorDivisa/Vender";

const SectionDos = ({ ListadoCiudades }) => {
  const [switched, setSwitched] = useState(null);
  return (
    <section className={styles.contendorSectionDos}>
      <div id="bloqueCalculadora" className={styles.contendorBloques}>
        {/*<div className={styles.bloqueIzq}>
          <div className={styles.contenedorInfo}>
            <h2>Cambio de Divisas Madrid</h2>
            <p>
              Conoce el tipo de cambio en nuestras<br></br> casas de cambio de
              moneda en Madrid.
            </p>
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
            </div>*/}
        {/*switched ? <Vender /> : <Comprar />*/}
        <p className={styles.tituloCalculadora}>
          ¿Cuál es el tipo de cambio dólar-euro?
        </p>
        <p className={styles.textoCalculadora}>
          Selecciona la ciudad donde vas a cambiar tus dólares y podrás conocer
          al instante cuál es el tiempo de cambio, siempre actualizado
        </p>
        <Comprar ListadoCiudades={ListadoCiudades} />
      </div>
    </section>
  );
};

export default SectionDos;
