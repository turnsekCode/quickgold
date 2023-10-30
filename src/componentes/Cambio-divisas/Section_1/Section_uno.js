import React from "react";
import styles from "./section_uno.module.css";
import useScreenSize from "@/utilities/useScreenSize";
import Image from "next/image";
import { Link } from "react-scroll";

const Section_uno = ({ ciudad }) => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>Cambiar divisas al instante y sin comisiones</h1>
        <p>
          Cambiar moneda extranjera en quickgold es muy fácil y rápido. Tenemos
          más de 30 divisas disponibles para que puedas realizar tu cambio al
          mejor precio y de forma inmediata, sin esperas.
        </p>
        <div className={styles.botones}>
          <Link
            to="calculadora"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <button className={styles.botonPopUp} title="texto">
              CONOCE EL PRECIO DE LA DIVISA
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
          src="/assets/img/imagenCambiarDivisa.png"
          alt="Cambio Divisas"
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
