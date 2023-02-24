import React from "react";
import styles from "./section_2.module.css";

const SectionDos = () => {
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>bloque izq</div>
        <div className={styles.bloqueDer}>bloque der</div>
      </div>
    </section>
  );
};

export default SectionDos;
