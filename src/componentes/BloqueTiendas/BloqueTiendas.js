import React from "react";
import styles from "./bloqueTiendas.module.css";

const BloqueTiendas = () => {
  return (
    <div className={styles.contenedorTiendas}>
      <div className={styles.tienda}>
        <h3>Quickgold Delicias</h3>
        <p>Dirección: aqui direccion</p>
        <a title="texto" href="tel:931 434 276">
          <p>Telefono: 931 434 276</p>
        </a>
        <a href="/">Cómo llegar</a>
      </div>
      <div className={styles.tienda}>
        <h3>Quickgold Tirso de molino</h3>
        <p>Dirección: aqui direccion</p>
        <a title="texto" href="tel:931 434 276">
          <p>Telefono: 931 434 276</p>
        </a>
        <a title="texto" href="/">
          Cómo llegar
        </a>
      </div>
    </div>
  );
};

export default BloqueTiendas;
