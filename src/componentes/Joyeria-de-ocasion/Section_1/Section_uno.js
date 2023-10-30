import React from "react";
import styles from "./section_uno.module.css";
import useScreenSize from "@/utilities/useScreenSize";
import Image from "next/image";
import SelectorCiudades from "@/componentes/BotonSelectorCiudades/SelectorCiudades";

const Section_uno = ({ ciudad, listadoUrlCiudad }) => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>Venta de joyería</h1>
        <p>
          En quickgold, además de ser especialistas en la compra y venta de oro,
          también ofrecemos el servicio de venta de joyería de ocasión de oro y
          plata. En nuestras tiendas, encontrarás una gran exposición de joyería
          de ocasión con un 60% inferior a su PVP de grandes marcas.
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
          src="/assets/img/imagenJoyeriaOcasion.png"
          alt="Joyería de ocasión"
          className={styles.madridMobil}
          width={360}
          height={254}
          priority
        />
      </div>
    </section>
  );
};

export default Section_uno;
