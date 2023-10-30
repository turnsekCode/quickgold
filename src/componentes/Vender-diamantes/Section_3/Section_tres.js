import React from "react";
import styles from "./sectioTres.module.css";
import Image from "next/image";

const Section_tres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorBloqueSuperior}>
        <h3>
          ¿Qué diamantes compramos en{" "}
          <span className={styles.linea}>quickgold?</span>
        </h3>
        <p>
          Para realizar una venta de diamantes es necesario ser mayor de edad y
          aportar tu DNI en vigor. Si tienes un brillante, contacta con nosotros
          para poder tasarlo.
        </p>
        <p>
          Para que podamos comprar un diamante es necesario que tengas las
          siguientes características:
        </p>
      </div>
      <div className={styles.contenedorBloqueInferior}>
        <div className={styles.BloqueIzq}>
          <ol>
            <li>Compramos talla brillante moderna.</li>
            <li>
              Aquellos que estén catalogados como Escala de color hasta la letra
              J.
            </li>
            <li>La pureza debe estar por encima de P (Sl2). </li>
            <li>
              Compramos brillantes con un quilataje mayor a 0,10 ct (a partir de
              10 puntos, consultar para menos).{" "}
            </li>
            <li>
              No importa si no tienes certificado, están sueltos o engastados.
              Te mantenemos informado de la mejor oferta por tu brillante en ct
              más altos, de manera particular.
            </li>
            <li>
              No compramos las tallas no brillante: princesa, pera, esmeraldo,
              marquesa, oval...
            </li>
          </ol>
        </div>
        <div className={styles.BloqueDer}>
          <Image
            src="/assets/img/imagenAdornoSectionTres.png"
            alt="Vender Diamantes"
            className={styles.imagenAdornoSectionTres}
            width={210}
            height={204}
          />
          <p>
            El precio final dependerá de las características de los diamantes y
            del valor en el marcado. Nuestros precios son muy competitivos.
            Estaremos encantados de atenderte. Pide cita en nuestro número
            gratuito{" "}
            <a href={`tel:${ciudad?.acf?.telefono}`}>
              <strong>{ciudad?.acf?.telefono}</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_tres;
