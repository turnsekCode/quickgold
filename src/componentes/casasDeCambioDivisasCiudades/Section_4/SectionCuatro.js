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
          {ciudad?.acf?.ciudad}
        </h2>
        <p>{ciudad?.acf?.texto_section_con_imagen?.texto_bloque_izq}</p>
      </div>
    </section>
  );
};

export default SectionCuatro;
