import React from "react";
import styles from "./seccionUno.module.css";

const SeccionUno = ({ ciudad }) => {
  return (
    <header className={styles.contenedorSeccionUno}>
      <div className={styles.bloqueDer}>
        <h1>
          Tiendas Quickgold en {ciudad?.acf?.info_grupo?.ciudad_landing}
          <br />
          <span className={styles.textoMenos}>
            Compro oro. Cambio de divisa. Empeñar oro.
          </span>
        </h1>
      </div>
    </header>
  );
};

export default SeccionUno;
