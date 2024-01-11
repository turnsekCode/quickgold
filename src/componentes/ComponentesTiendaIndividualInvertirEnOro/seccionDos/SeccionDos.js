import React from "react";
import styles from "./seccionDos.module.css";
import ConversorDivisa from "@/componentes/ConversorDivisa/ConversorDivisa";
import Tabla2Lingotes from "@/componentes/InvertirEnOro/Tabla2Lingotes";

const SeccionDos = ({ ciudad }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <h1 className={styles.contenedorSeccionDosH2}>Invertir en oro</h1>
      <h2 className={styles.subTituloServicio}>
        Venta de lingotes de oro con las mejores condiciones. El oro, como valor
        refugio está claramente por encima de otro tipo de inversiones.
      </h2>
      <Tabla2Lingotes ciudad={ciudad} />
    </article>
  );
};

export default SeccionDos;
