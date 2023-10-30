import React from "react";
import styles from "./section_tres.module.css";
import Image from "next/image";

const Section_tres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorSectionTresMargen}>
        <Image
          src="/assets/img/Mapa-Espana.jpg"
          alt="Mapa tiendas"
          className={styles.mapaExpansion}
          width={1060}
          height={783}
        />
      </div>
    </section>
  );
};

export default Section_tres;
