import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";
import { Link } from "react-scroll";

const Section_uno = ({ ciudad, listadoUrlCiudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>Empeño de joyas con las mejores condiciones</h1>
        <p>
          El empeño de joyas es una excelente opción si necesitas disponer de
          liquidez inmediata pero no quieres vender tus joyas. En quickgold
          ofrecemos las mejores condiciones para que puedas empeñar tus joyas
          sin preocuparte por nada.
        </p>
        <div className={styles.botones}>
          <Link
            to="calculadoraOro"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="Conocer precio del oro"
            passive="true"
          >
            <button
              className={styles.botonPopUp}
              title="Conocer precio del oro"
            >
              CONOCE EL PRECIO DEL ORO
            </button>
          </Link>
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
          src="/assets/img/imagenEmpenoJoyas.png"
          alt="Empeñar joyas"
          className={styles.imagenJoyas}
          width={432}
          height={382}
          priority
        />
      </div>
    </section>
  );
};

export default Section_uno;
