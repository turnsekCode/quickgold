import React from "react";
import styles from "./seccionDos.module.css";
import ConversorDivisa from "@/componentes/ConversorDivisa/ConversorDivisa";

const SeccionDos = ({ ciudad }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <h1 className={styles.contenedorSeccionDosH2}>Cambio de divisa</h1>
      <h2 className={styles.subTituloServicio}>
        Somos la <strong>casa de cambio</strong> preferida por miles de personas
        al año en {ciudad?.acf?.ciudad_landing}. <strong>Cambiar divisa</strong>{" "}
        en Quickgold siempre es sin comisiones y, fácil y rápido.
      </h2>
      <ConversorDivisa ciudad={ciudad} />
    </article>
  );
};

export default SeccionDos;
