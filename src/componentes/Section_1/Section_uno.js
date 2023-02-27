import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";

const Section_uno = () => {
  const { width } = useScreenSize();
  console.log(width);
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Casas de cambio en <span className={styles.linea}>Madrid</span>
        </h1>
        <p>
          En nuestra casas de cambio en Barcelona puedes cambiar más de 30
          monedas extranjeras al momento y sin comisiones. ¿Necesitas cambiar
          dólares por euros o cualquier otra moneda extranjera? Ven a Quickgold.
        </p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive={true}
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href="tel:900 373 629" title="texto">
            llamar a 900 373 629
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/madrid_mobil.webp"
            alt="Quickgold Madrid"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/madrid.webp"
            alt="Quickgold Madrid"
            className={styles.vector}
            width={480}
            height={364}
          />
        )}
      </div>
    </section>
  );
};

export default Section_uno;
