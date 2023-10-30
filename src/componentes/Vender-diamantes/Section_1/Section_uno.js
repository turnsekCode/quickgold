import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";
import SelectorCiudades from "@/componentes/BotonSelectorCiudades/SelectorCiudades";

const Section_uno = ({ ciudad, listadoUrlCiudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>Compramos diamantes al mejor precio</h1>
        <p>
          Si estás pensando en vender o empeñar diamantes para obtener ingresos
          extra, en quickgold te ofrecemos las mejores condiciones con toda la
          seguridad que ofrece nuestra marca desde hace más de 15 años.
        </p>
        <div className={styles.botones}>
          <SelectorCiudades listadoUrlCiudad={listadoUrlCiudad} />
          <a
            className={styles.botonLlamar}
            href={`tel:${ciudad?.acf?.telefono}`}
            title="Teléfono"
          >
            llama gratis
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        <Image
          src="/assets/img/imagenVenderDiamantes.png"
          alt="Compra de diamantes"
          className={styles.imagenDiamantes}
          width={480}
          height={364}
          priority
        />
      </div>
    </section>
  );
};

export default Section_uno;
