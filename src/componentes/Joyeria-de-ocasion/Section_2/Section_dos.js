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
              src="/assets/img/imagenjoyeriauno.png"
              alt="Mejor servicio y precio"
              width={29}
              height={40}
            />
          </div>

          <p>
            Precios reducidos<br></br> en más de un 60%.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenjoyeriados.png"
              alt="Mejor servicio y precio"
              width={37}
              height={37}
            />
          </div>

          <p>
            Envíos a domicilio a través<br></br> de la plataforma de Wallapop.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenjoyeriatres.png"
              alt="Mejor servicio y precio"
              width={23}
              height={36}
            />
          </div>

          <p>
            Catálogo de todas<br></br> nuestras joyas en Wallapop.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenjoyeriacuatro.png"
              alt="Mejor servicio y precio"
              width={40}
              height={36}
            />
          </div>

          <p>
            Todas las piezas se<br></br> preparan y limpian para su venta.
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenjoyeriacinco.png"
              alt="Mejor servicio y precio"
              width={38}
              height={38}
            />
          </div>

          <p>
            Mejor<br></br> servicio y precio
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenjoyeriaseis.png"
              alt="Mejor servicio y precio"
              width={37}
              height={30}
            />
          </div>

          <p>
            Pagos aplazados con<br></br> solo un 1% de interés mensual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
