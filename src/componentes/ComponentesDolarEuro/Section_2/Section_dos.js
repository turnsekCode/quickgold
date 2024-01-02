import React from "react";
import styles from "./sectionDos.module.css";
import Image from "next/image";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.bloqueSuperior}>
        <h2>
          Ventajas de cambiar dólares en{" "}
          <span className={styles.linea}>quickgold</span>
        </h2>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja1.png"
              alt="Mejor servicio y precio"
              width={40}
              height={41}
            />
          </div>
          <p>
            Servicio 100% <br></br>personalizado
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja2.png"
              alt="Mejor servicio y precio"
              width={39}
              height={35}
            />
          </div>
          <p>
            Precio del dólar<br></br> siempre actualizado
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja3.png"
              alt="Mejor servicio y precio"
              width={37}
              height={36}
            />
          </div>
          <p>
            Más de 60<br></br> casas de cambio
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja4.png"
              alt="Mejor servicio y precio"
              width={31}
              height={31}
            />
          </div>
          <p>
            Mejor tipo de<br></br> cambio de tu ciudad
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja5.png"
              alt="Mejor servicio y precio"
              width={39}
              height={41}
            />
          </div>
          <p>
            Euros en <br></br>efectivo al instante
          </p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <Image
              src="/assets/img/imagenventaja6.png"
              alt="Mejor servicio y precio"
              width={38}
              height={38}
            />
          </div>
          <p>Sin comisiones</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
