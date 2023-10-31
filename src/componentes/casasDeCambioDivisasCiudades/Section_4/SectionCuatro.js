import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";
import Image from "next/image";

const SectionCuatro = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          {ciudad?.acf?.texto_section_con_imagen?.titulo_bloqueizq} {""}
          <span className={styles.linea}>{ciudad?.acf?.ciudad}</span>
        </h2>
        <p>{ciudad?.acf?.texto_section_con_imagen?.texto_bloque_izq}</p>
      </div>
      <div className={styles.bloqueDer}>
        <Image
          src={`/assets/casa-cambio-${ciudad?.acf?.ciudad_minuscula}.webp`}
          alt={`Cambiar Dólares a Euros ${ciudad?.acf?.ciudad}`}
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
