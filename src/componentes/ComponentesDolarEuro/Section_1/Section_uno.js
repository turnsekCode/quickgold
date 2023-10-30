import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";
import Image from "next/image";

const Section_uno = () => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>Cambio de dólares a euros</h1>
        <p>
          Si necesitas cambiar dólares por euros en España, Quickgold es tu
          mejor opción: ofrecemos un servicio totalmente especializado en
          dólares, realizamos mejoras por cantidad y ofrecemos el mejor precio
          de tu ciudad.
        </p>
        <p>
          <strong>Consulta el precio del dólar actualizado.</strong>
        </p>
        <div className={styles.botones}>
          {/*<Link
            to="bloqueCalculadora"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            conoce el precio del dólar
  </Link>*/}
          <a href="tel:900 373 629" title="Teléfono">
            llama gratis al 900 373 629
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        <Image
          src="/assets/dolar-euro/imagenDolarEuro.png"
          alt="Cambio dolar - euro"
          className={styles.madridMobil}
          width={290}
          height={220}
        />
      </div>
    </section>
  );
};

export default Section_uno;
