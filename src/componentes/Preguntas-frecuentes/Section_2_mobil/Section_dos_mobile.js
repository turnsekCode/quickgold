import React from "react";
import styles from "./section_dos_mobil.module.css";
import AccordiosnFranquicia from "../AccordionFranquicia/AccordiosFranquicia";
import AccordiosnVenderMetales from "../AccordionVenderMetales/AccordiosVenderMetales";
import AccordiosnCambioDivisa from "../AccordionCambioDivisa/AccordiosCambioDivisa";
import AccordiosnEmpenos from "../AccordionEmpenos/AccordiosEmpenos";
import AccordiosnInvertirOro from "../AccordionInvertirOro/AccordiosInvertirOro";
import AccordiosnVenderDiamantes from "../AccordionVenderDiamantes/AccordiosVenderDiamantes";

const Section_dos_mobile = () => {
  return (
    <section className={styles.contenedorSectionDosMobil}>
      <div className={styles.contenedorSectionDosMobiContenido}>
        <p className={styles.tituloPreguntas}>Franquicia</p>
        <AccordiosnFranquicia />
      </div>
      <div className={styles.contenedorSectionDosMobiContenido}>
        <p className={styles.tituloPreguntas}>Vender metales preciosos</p>
        <AccordiosnVenderMetales />
      </div>
      <div className={styles.contenedorSectionDosMobiContenido}>
        <p className={styles.tituloPreguntas}>Cambio de divisas</p>
        <AccordiosnCambioDivisa />
      </div>
      <div className={styles.contenedorSectionDosMobiContenido}>
        <p className={styles.tituloPreguntas}>Empeños</p>
        <AccordiosnEmpenos />
      </div>
      <div className={styles.contenedorSectionDosMobiContenido}>
        <p className={styles.tituloPreguntas}>Invertir en oro</p>
        <AccordiosnInvertirOro />
      </div>
      <div className={styles.contenedorSectionDosMobiContenidoUltimo}>
        <p className={styles.tituloPreguntas}>Vender Diamantes</p>
        <AccordiosnVenderDiamantes />
      </div>
    </section>
  );
};

export default Section_dos_mobile;
