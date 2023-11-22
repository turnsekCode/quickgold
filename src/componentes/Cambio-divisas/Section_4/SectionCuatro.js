import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <h2>
        Cambiar divisa en <span className={styles.linea}>quickgold</span> es
        fácil
      </h2>
      {/*<div className={styles.bloqueTextoMobil}>
        <p>
          Cambiar divisa en cualquiera de nuestras tiendas tan solo te llevará
          unos minutos.
        </p>
  </div>*/}
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
