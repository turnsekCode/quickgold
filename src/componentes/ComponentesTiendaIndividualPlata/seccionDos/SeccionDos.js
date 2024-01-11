import React from "react";
import styles from "./seccionDos.module.css";
import CalculadoraOro from "@/componentes/ConversorPlata/BloquePrecioPlata";

const SeccionDos = ({ ciudad }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <h1 className={styles.contenedorSeccionDosH2}>Precio de la plata</h1>
      <h2 className={styles.subTituloServicio}>
        Compramos <strong>plata al mejor precio</strong>: joyas, cuberterías,
        etc. Somos los líderes en la <strong>compra de joyas</strong> en{" "}
        {ciudad?.acf?.ciudad_landing}.
      </h2>
      <CalculadoraOro ciudad={ciudad} />
    </article>
  );
};

export default SeccionDos;
