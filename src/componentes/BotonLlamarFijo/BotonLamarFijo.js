import React from "react";
import styles from "./botonLamarFijo.module.css";

const BotonLamarFijo = () => {
  return (
    <div className={styles.botonLlamar}>
      <a title="Teléfono" href="tel:900 373 629">
        LLAMA GRATIS
      </a>
    </div>
  );
};

export default BotonLamarFijo;
