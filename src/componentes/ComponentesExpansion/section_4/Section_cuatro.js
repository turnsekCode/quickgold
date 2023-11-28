import React from "react";
import styles from "./section_cuatro.module.css";
import Image from "next/image";

const Section_cuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.contenedorSectionCuatroMargen}>
        <div className={styles.bloqueIzq}>
          <h3>FORMAMOS PARTE DE GRUPO OTSU</h3>
          <p>
            Grupo Otsu es una “compañía de compañías”. Un grupo especializado en
            la creación y desarrollo de proyectos empresariales a través de la
            identificación de un sector de oportunidad con lo que se identifican
            en su génesis, visión y valores y captación de un líder de proyecto,
            con el máximo talento, capacitado y apasionado del mismo sector.
          </p>
          <Image
            src="/assets/img/logosOtsu.png"
            alt="Expansion quickgold"
            className={styles.logosOtsu}
            width={257}
            height={132}
          />
          <Image
            src="/assets/img/logosOtsuMobil.png"
            alt="Expansion quickgold"
            className={styles.logosOtsuMobil}
            width={258}
            height={132}
          />
        </div>
        <div className={styles.bloqueDer}></div>
      </div>
    </section>
  );
};

export default Section_cuatro;
