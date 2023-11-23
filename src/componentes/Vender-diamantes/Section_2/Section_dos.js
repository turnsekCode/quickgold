import React from "react";
import styles from "./sectionDos.module.css";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>
          Vender diamantes en <span className={styles.linea}>quickgold</span> es
          fácil{" "}
        </h4>
        <p className={styles.parrafoVenderDiamantes}>
          <strong>IMPORTANTE</strong>
          <br></br>
          Para vender diamantes es necesario cita previa llamando al{" "}
          <a href={`tel:${ciudad?.acf?.telefono}`}>{ciudad?.acf?.telefono}.</a>
        </p>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>Comprobación</p>
          <p>
            Los diamantes son comprobados con el tester para verificar su
            autenticidad.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Medición</p>
          <p>
            Tras la comprobación, los diamantes engastados son medidos con el
            calibre o mediante balanza de precisión (quilatero) si está suelto,
            para la obtención de los quilates.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>Características diamantes</p>
          <p>
            Comprobamos y medimos los diamantes, teniendo en cuenta las 4 C´s:
            Quilates (carat), color (color), pureza (clarity) y talla (cut).
            Consultanos si tu pieza tiene diamantes de cualquier calidad y te
            daremos una valoración personalizada.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#4</p>
          <p>Tasación y pago</p>
          <p>
            Tras todas estas comprobaciones, se procederá a la tasación de las
            piezas y al pago en el momento. Así mismo, en cumplimiento con la
            legislación vigente, se requerirá el DNI del cliente para dejar
            constancia de la venta y ser propietario de la pieza. Es
            recomendable aportar el certificado del brillante
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
