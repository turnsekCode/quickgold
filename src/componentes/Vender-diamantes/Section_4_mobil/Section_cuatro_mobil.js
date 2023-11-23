import React from "react";
import styles from "./sectionCuatroMobil.module.css";
import Image from "next/image";

const Section_cuatro_mobil = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCincoMobil}>
      <div className={styles.bloqueSuperior}>
        <h2>¿Por qué elegirnos?</h2>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil1.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Recibo de compra con el precio y el peso desglosado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil2.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>
            Cumplimos la normativa de seguridad privada garantizando una
            custodia segura.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil3.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Precios publicados reales y actualizados cada 3 horas.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil4.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>
            Protección de sus piezas mediante normas de seguridad exigidas por
            la jefatura de policía.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil5.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Comprobaciones y pesaje a la vista del cliente.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil6.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Básculas homologadas por el ministerio de industria.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil7.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Profesionales formados y en constante formación.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil8.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Descartes según catálogo de gemas.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenPorqueElegirnosMovil9.png"
              alt="Mejor servicio y precio"
              width={56}
              height={56}
            />
          </div>
          <p>Registro de todas las operaciones.</p>
        </div>
      </div>
      {/*<div className={styles.botones}>
        <button className={styles.botonPopUp} title="texto">
          CONOCE EL PRECIO DEL ORO
        </button>
  </div>*/}
      {/*<p className={styles.texto}>Información de interés</p>*/}
    </section>
  );
};

export default Section_cuatro_mobil;
