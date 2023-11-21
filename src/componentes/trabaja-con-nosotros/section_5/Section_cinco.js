import React from "react";
import styles from "./Section_cinco.module.css";
import Image from "next/image";
import FormularioTrabajaFirebase from "../formularioTrabajaFireBase/FormularioTrabaja";

const Section_cinco = () => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <h4>Si te identificas con nosotros, mándanos tu currículum</h4>
      <div className={styles.contenedorBloques}>
        <div className={styles.bloqueIzq}>
          <Image
            src="/assets/img/imagenBloqueCinco.png"
            alt="Compro oro"
            className={styles.imagenSectionCinco}
            width={519}
            height={600}
          />
        </div>
        <div className={styles.bloqueDer}>
          <FormularioTrabajaFirebase />
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
