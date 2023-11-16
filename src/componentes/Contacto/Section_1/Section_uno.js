import React from "react";
import styles from "./sectionUno.module.css";
import Link from "next/link";

const Section_uno = () => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorBloqueSuperior}>
        <h1>Contacto</h1>
        <p>
          ¿Tienes alguna duda? Nuestras{" "}
          <Link href="/preguntas-frecuentes">
            <strong>Preguntas Frecuentes</strong>
          </Link>{" "}
          pueden ayudarte. Si no, ponte en contacto con nosotros. Estaremos
          encantados de atenderte.
        </p>
      </div>
      <div className={styles.contenedorBloqueIntermedio}>
        <div className={styles.cuadroIzq}>
          <p>Expansión</p>
          <p>
            ¿Necesitas más información de cómo abrir una tienda quickgold?
            Escríbenos o llama a Expansión quickgold.{" "}
            <a href="tel:687696523">
              <strong>687 696 523</strong>
            </a>
          </p>
        </div>
        <div className={styles.cuadroDer}>
          <p>Atención al cliente</p>
          <p>
            ¿Necesitas información sobre alguno de los servicios quickgold?
            Escríbenos o llama gratis a Atención al Cliente quickgold.
            <a href="tel:900373629">
              {" "}
              <strong>900 373 629</strong>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_uno;
