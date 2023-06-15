import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Madrid</span>
        </h2>
        <p>
          En nuestro money exchange en Madrid puedes cambiar dólares a euros en
          tan solo unos minutos. Recuerda llevar el dinero que necesitas cambiar
          y, al instante, recibirás la moneda extranjera que necesites en
          efectivo. Además, ofrecemos mejoras en la tasa de cambio por cantidad,
          por lo tanto siempre estamos dispuesto a escuchar tus necesidades para
          ofrecerte el mejor tipo de cambio de la ciudad de Madrid. Olvídate de
          cambiar divisa en el aeropuerto o en el banco, en quickgold ofrecemos
          las mejores condiciones y ponemos a tu disposición diferentes casas de
          cambio para estar siempre cerca de ti.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-madrid.webp"
          alt="Cambiar Dólares a Euros Madrid"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
