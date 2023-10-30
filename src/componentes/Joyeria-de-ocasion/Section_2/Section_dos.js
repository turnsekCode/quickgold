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
          *Para garantizar la autenticidad de las joyas, éstas cumplen con un
          proceso de comprobaciones que proporcionan a nuestros clientes los
          mejores productos.
        </p>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja1.png"
              alt="Mejor servicio y precio"
              width={29}
              height={40}
            />
          </div>

          <p>Precios reducidos en más de un 60%.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja2.png"
              alt="Mejor servicio y precio"
              width={37}
              height={37}
            />
          </div>

          <p>Envíos a domicilio a través de la plataforma de Wallapop.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja3.png"
              alt="Mejor servicio y precio"
              width={23}
              height={36}
            />
          </div>

          <p>Catálogo de todas nuestras joyas en Wallapop.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja4.png"
              alt="Mejor servicio y precio"
              width={40}
              height={36}
            />
          </div>

          <p>Todas las piezas se preparan y limpian para su venta.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja5.png"
              alt="Mejor servicio y precio"
              width={38}
              height={38}
            />
          </div>

          <p>Dinero en efectivo al instante.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja6.png"
              alt="Mejor servicio y precio"
              width={37}
              height={30}
            />
          </div>

          <p>Pagos aplazados con solo un 1% de interés mensual.</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
