import React from "react";
import styles from "./sectionCincoMobil.module.css";
import Image from "next/image";
import { Link } from "react-scroll";

const Section_cinco_mobil = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCincoMobil}>
      <div className={styles.bloqueSuperior}>
        <h2>
          Por qué cambiar divisa en{" "}
          <span className={styles.linea}>quickgold</span>
        </h2>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenSeccionCincoMobil1.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Cambio de divisas sin comisiones y al instante.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenSeccionCincoMobil2.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>El mejor precio de tu ciudad.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenSeccionCincoMobil3.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Mejora de precio según cantidad.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenSeccionCincoMobil4.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Premiamos tu fidelidad al traer a un amigo.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenSeccionCincoMobil5.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Mejoramos el precio si vienes en grupo.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenSeccionCincoMobil6.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Reserva gratuita de más de 30 divisas.</p>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco_mobil;
