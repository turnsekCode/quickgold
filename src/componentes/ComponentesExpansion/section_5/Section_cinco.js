import React from "react";
import styles from "./section_cinco.module.css";
import Image from "next/image";

const Section_cinco = () => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>
          <Image
            src="/assets/img/flechaIzq.png"
            alt="divisas"
            className={styles.flechas}
            width={24}
            height={19}
          />{" "}
          MÍNIMO RIESGO, MÁXIMA RENTABILIDAD{" "}
          <Image
            src="/assets/img/flechaDer.png"
            alt="divisas"
            className={styles.flechas}
            width={24}
            height={19}
          />
        </h4>
        <p className={styles.textoSubtitulo}>
          UN MISMO ESPACIO DIFERENTES NEGOCIOS
        </p>
        <div className={styles.contenedorBloqueInferior}>
          <div className={styles.contenedorBloque}>
            <Image
              src="/assets/img/DIVISAS.png"
              alt="divisas"
              className={styles.iconos}
              width={60}
              height={59}
            />
            <p className={styles.textoIconos}>CAMBIO DE DIVISA</p>
          </div>
          <div className={styles.contenedorBloque}>
            <Image
              src="/assets/img/JOYAS.png"
              alt="joyas"
              className={styles.iconos}
              width={60}
              height={59}
            />
            <p className={styles.textoIconos}>EMPEÑO DE JOYAS</p>
          </div>
          <div className={styles.contenedorBloque}>
            <Image
              src="/assets/img/ORO.png"
              alt="oro"
              className={styles.iconos}
              width={60}
              height={44}
            />
            <p className={styles.textoIconos}>COMPRA Y VENTA DE ORO</p>
          </div>
        </div>
        <Image
          src="/assets/img/qg-valencia-ayuntamiento.png"
          alt="oro"
          className={styles.bloqueImage}
          width={1060}
          height={300}
        />
      </div>
    </section>
  );
};

export default Section_cinco;
