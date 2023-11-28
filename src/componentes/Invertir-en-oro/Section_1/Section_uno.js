import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";
import SelectorCiudades from "@/componentes/BotonSelectorCiudades/SelectorCiudades";

const Section_uno = ({ ciudad, listadoUrlCiudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Invierte en lingotes de oro con{" "}
          <span className={styles.linea}>quickgold</span>
        </h1>
        <p>
          Aprovecha la oportunidad de obtener un activo cuyo valor está
          asegurado y preserve su patrimonio de la mejor manera: ahorrando en
          oro físico.
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
          src="/assets/img/imagenInvertirEnOro.png"
          alt="Invertir en oro"
          className={styles.madridMobil}
          width={480}
          height={364}
          priority
        />
      </div>
    </section>
  );
};

export default Section_uno;
