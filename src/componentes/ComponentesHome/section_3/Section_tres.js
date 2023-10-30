import React from "react";
import styles from "./section_tres.module.css";
import Link from "next/link";

const Section_tres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorSectionTresMargen}>
        <h3>Quiero abrir una tienda quickgold</h3>
        <p>
          En quickgold queremos seguir creciendo contigo, y para ello contamos
          con las mejores condiciones para que puedas emprender. Si siempre has
          querido tener tu propio negocio y compartes nuestros mismos valores
          recibe, a continuación, toda la información.
        </p>
        <Link href={"/expansion"}>RECIBIR MÁS INFORMACIÓN</Link>
      </div>
    </section>
  );
};

export default Section_tres;
