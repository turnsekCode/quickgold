import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";

const Section_uno = () => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorSectionUnoMargen}>
        <h1>
          Franquicias <span className={styles.linea}>quickgold</span>
        </h1>
        <p>
          En <strong>quickgold</strong> queremos seguir creciendo contigo, y
          para ello contamos con las mejores condiciones para que puedas
          emprender. Si siempre has querido tener tu propio negocio y compartes
          nuestros mismos valores recibe, a continuación, toda la información.
        </p>
      </div>
      <Image
        src="/assets/img/PolygonExpansion.png"
        alt="Expansion"
        className={styles.polygonoExpansion}
        width={300}
        height={300}
        priority
      />
    </section>
  );
};

export default Section_uno;
