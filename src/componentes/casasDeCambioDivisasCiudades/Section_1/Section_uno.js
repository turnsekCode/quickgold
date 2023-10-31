import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import Image from "next/image";

const Section_uno = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          {ciudad?.acf?.h1_sin_la_ciudad}{" "}
          <span className={styles.linea}>{ciudad?.acf?.ciudad}</span>
        </h1>
        <p>{ciudad?.acf?.parrafo_section_uno}</p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href={`tel:${ciudad?.acf?.telefono}`} title="Teléfono">
            Llama gratis
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        <Image
          src="/assets/divisa.png"
          alt={`Casas de cambio ${ciudad?.acf?.ciudad}`}
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
