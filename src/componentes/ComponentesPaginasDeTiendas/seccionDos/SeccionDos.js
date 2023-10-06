import AccordionServicios from "@/componentes/AccordionServicios/AccordionServicios";
import React from "react";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <AccordionServicios ciudad={ciudad} />
    </div>
  );
};

export default SeccionDos;
