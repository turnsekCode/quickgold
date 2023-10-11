import AccordionServicios from "@/componentes/AccordionServicios/AccordionServicios";
import React from "react";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <AccordionServicios ciudad={ciudad} />
    </article>
  );
};

export default SeccionDos;
