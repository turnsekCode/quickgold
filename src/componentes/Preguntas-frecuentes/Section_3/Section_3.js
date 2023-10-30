import React from "react";
import styles from "./sectionTres.module.css";

const Section_3 = () => {
  return (
    <div className={styles.contenedorImagenFondo}>
      <div className={styles.contenedorTexto}>
        <p>¿Sigues necesitando ayuda? ¡Déjanos un mensaje!</p>
        <p>
          Para cualquier otra pregunta, por favor escríbenos a{" "}
          <a href="mailto:central@quickgold.es">central@quickgold.es</a> o
          llámanos al <a href="tel:900373629">900 373 629</a>.
        </p>
        <p>Estaremos encantados de ayudarte.</p>
      </div>
    </div>
  );
};

export default Section_3;
