import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";
import SelectorCiudades from "@/componentes/BotonSelectorCiudades/SelectorCiudades";

const Section_uno = ({ ciudad, listadoUrlCiudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>Venta de joyería</h1>
        <p>
          En quickgold, además de ser especialistas en la compra y venta de oro,
          también ofrecemos el servicio de venta de joyería de ocasión de oro y
          plata. En nuestras tiendas, encontrarás una gran exposición de joyería
          de ocasión con un 60% inferior a su PVP y de grandes marcas.
        </p>
        <div className={styles.botones}>
          {/*<SelectorCiudades listadoUrlCiudad={listadoUrlCiudad} />*/}
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
        <a
          target="_blank"
          href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
        >
          <Image
            src="/assets/img/Banner-wallapop-joyeria-ocasion-mobil.png"
            alt="Joyería de ocasión"
            className={styles.ImagenBannerMobil}
            width={325}
            height={248}
            priority
          />
        </a>
      </div>
    </section>
  );
};

export default Section_uno;
