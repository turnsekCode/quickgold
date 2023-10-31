import React from "react";
import styles from "./sectionDos.module.css";
import Image from "next/image";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.bloqueSuperior}>
        <h2>
          Disfruta de ventajas exclusivas en{" "}
          <span className={styles.linea}>quickgold</span>
        </h2>
        <p>
          *Para realizar una venta de oro es necesario ser mayor de edad y
          aportar DNI en vigor.
        </p>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenVentaja1.png"
              alt="a cómo está el oro"
              width={39}
              height={41}
            />
          </div>

          <p>Mejor servicio y precio garantizado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenVentaja2.png"
              alt="precio oro"
              width={38}
              height={35}
            />
          </div>

          <p>Precio del oro siempre actualizado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenVentaja3.png"
              alt="tiendas compro oro"
              width={36}
              height={36}
            />
          </div>

          <p>Más de 50 tiendas para realizar tu venta de oro.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenVentaja4.png"
              alt="vender oro"
              width={41}
              height={35}
            />
          </div>

          <p>Atención personalizada.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenVentaja5.png"
              alt="vender joyas"
              width={38}
              height={38}
            />
          </div>

          <p>Dinero en efectivo al instante.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenVentaja6.png"
              alt="tasación oro"
              width={38}
              height={38}
            />
          </div>

          <p>Tasación profesional, justa y segura.</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
