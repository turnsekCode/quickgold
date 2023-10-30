import React from "react";
import styles from "./sectionDos.module.css";
import Image from "next/image";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.bloqueSuperior}>
        <h2>¿Necesitas cambiar divisa?</h2>
        <p>
          *Para realizar cambios de divisa es necesario ser mayor de edad y
          aportar documento de identidad en vigor.
        </p>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagensectiondos1.png"
              alt="Mejor servicio y precio"
              width={40}
              height={42}
            />
          </div>

          <p>
            Cambiar moneda extranjera en quickgold es muy fácil, rápido, barato
            y cómodo.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagensectiondos2.png"
              alt="Mejor servicio y precio"
              width={39}
              height={36}
            />
          </div>

          <p>Realizamos la transacción al momento, sin esperas y comisiones.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagensectiondos3.png"
              alt="Mejor servicio y precio"
              width={36}
              height={36}
            />
          </div>

          <p>Recibes tu cambio al instante y sin coste adicional.</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
