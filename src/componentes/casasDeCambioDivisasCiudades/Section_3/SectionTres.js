import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <h1>
        {ciudad?.acf?.textos_section_cuatro?.titulo_bloque_cuatro_parte_uno}
        <span className={styles.linea}>{ciudad?.acf?.ciudad}</span>{" "}
        {ciudad?.acf?.textos_section_cuatro?.titulo_bloque_cuatro_parte_dos}
      </h1>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>{ciudad?.acf?.textos_section_cuatro?.texto_cuadro_uno}</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>{ciudad?.acf?.textos_section_cuatro?.texto_cuadro_dos}</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>{ciudad?.acf?.textos_section_cuatro?.texto_cuadro_tres}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
