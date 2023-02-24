import React from "react";
import BloqueTiendas from "../BloqueTiendas/BloqueTiendas";
import styles from "./mapa.module.css";

const Mapa = () => {
  return (
    <section className={styles.contenedorMapa}>
      <div className={styles.contenedorbloqueIzq}>
        <div className={styles.bloqueIzq}>
          <h2>
            Casas de cambio en <span className={styles.linea}>Madrid</span>
          </h2>
          <p>
            Tiendas Quickgold: <span>6</span>
          </p>
        </div>
        <BloqueTiendas />
      </div>
      <div className={styles.bloqueDer}>Aqui el mapa</div>
    </section>
  );
};

export default Mapa;
