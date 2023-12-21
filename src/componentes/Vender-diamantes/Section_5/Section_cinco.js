import React from "react";
import styles from "./sectionCinco.module.css";
import AccordionDiamantes from "../Accordion/AccordionDiamantes";

const Section_cinco = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <div className={styles.contenedorTexto}>
          <h5>¿Dónde vender diamantes?</h5>
        </div>
        <div className={styles.contenedorTiposDivisas}>
          <div className={styles.contenedorTiposDivisasCard1}>
            <p className={styles.contenedorTiposDivisasCard1Texto}>
              A la hora de vender brillantes es necesario acudir a un experto
              gemólogo que te sepa tasar con total profesionalidad la pieza.Por
              eso, en quickgold, contamos con profesionales que te ayudarán a
              valorar los diamantes que quieras vender. Es necesario que
              concretes una cita previa con nosotros a través del teléfono
              gratuito{" "}
              <a href={`tel:${ciudad?.acf?.telefono}`}>
                <strong>{ciudad?.acf?.telefono}</strong>
              </a>
              .<br></br>
              <br></br>Acordaremos una reunión con un experto gemólogo para que
              realice todas las mediciones y comprobaciones delante de ti.
              Queremos que estés presente en todo el procedimiento.
            </p>
          </div>
        </div>
        <div className={styles.contenedorTexto}>
          <h5>¿Qué características tiene un diamante?</h5>
        </div>
        <div className={styles.contenedorTiposDivisas}>
          <div className={styles.contenedorTiposDivisasCard1}>
            <p className={styles.contenedorTiposDivisasCard1Texto}>
              Cada diamante es único, existen muchos tamaños, formas, colores y
              características internas. Su valor se basa es una combinación de
              factores como la rareza. Cuanto más raros más valiosos.
              <br></br>
              <br></br> Los profesionales de la joyería nos basamos en un
              sistema desarrollado por GIA para establecer de forma sistemática,
              los factores más importantes para clasificar los diamantes:
              <strong> claridad, color, corte y peso</strong> en quilates. Se
              conocen como las 4Cs y nos sirve para valorar un diamante.
            </p>
            <div className={styles.contenedorAccordionDiamantes}>
              <AccordionDiamantes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
