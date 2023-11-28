import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";
import { Link } from "react-scroll";

const Section_uno = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Tiendas compro oro <span className={styles.linea}>quickgold</span>
        </h1>
        <p>
          Si tienes joyas de oro que ya no desees conservar y quieres obtener
          dinero extra por ellas, elige vender tus piezas de oro en quickgold.
          Te garantizamos el servicio que estas buscando, con una valoración a
          la vista, detallada y a un precio justo. Somos tu compro oro de
          confianza.
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
          src="/assets/img/imagenComproOro.png"
          alt="Compro oro"
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
