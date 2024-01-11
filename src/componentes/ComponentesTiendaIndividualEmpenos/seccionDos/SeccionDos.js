import React from "react";
import styles from "./seccionDos.module.css";
import Empenos from "@/componentes/BloqueInfo/Empenos";

const SeccionDos = ({ ciudad }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <h1 className={styles.contenedorSeccionDosH2}>Empeño de joyas</h1>
      <h2 className={styles.subTituloServicio}>
        Nuestros <strong>empeños sin interés el primer mes</strong> hacen que
        empeñar oro sea mucho más cómodo y fácil para nuestros clientes.
      </h2>
      <Empenos ciudad={ciudad} />
    </article>
  );
};

export default SeccionDos;
