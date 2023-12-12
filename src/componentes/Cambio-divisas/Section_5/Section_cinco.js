import React from "react";
import styles from "./sectionCinco.module.css";

const Section_cinco = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.bloqueSuperior}>
        <h3>
          ¿Por qué cambiar divisa en{" "}
          <span className={styles.linea}>quickgold</span>?
        </h3>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas1}>
          <p>Mejor servicio y precio garantizado</p>
        </div>
        <div className={styles.contenedorVentajas2}>
          <p>El mejor precio de tu ciudad</p>
        </div>
        <div className={styles.contenedorVentajas3}>
          <p>Mejora de precio según cantidad</p>
        </div>
        <div className={styles.contenedorVentajas4}>
          <p>Premiamos tu fidelidad al traer un amigo</p>
        </div>
        <div className={styles.contenedorVentajas5}>
          <p>Mejoramos el precio si vienes en grupo</p>
        </div>
        <div className={styles.contenedorVentajas6}>
          <p>Reserva gratuita de más de 20 divisas</p>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
