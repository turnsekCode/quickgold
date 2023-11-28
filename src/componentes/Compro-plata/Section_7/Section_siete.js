import React from "react";
import styles from "./sectionSiete.module.css";

const Section_siete = () => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <div className={styles.contenedorTexto}>
          <h5>Los contrastes de la plata</h5>
          <p>
            La plata como el oro tiene diferentes calidades según su pureza, te
            indicamos las más comunes.
          </p>
        </div>
        <div className={styles.contenedorTiposOro}>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Plata 999 </p>
            <p>
              Tiene un grado de pureza mínimo de 99%, por lo que se le considera
              plata pura. Lo encontrarás en lingotes y en algunas monedas. Suele
              venir marcada como 999.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Plata 925 o esterlina </p>
            <p>
              Está formada por un 92,5% de plata, que en aleación con otros
              metales, le dan dureza para la elaboración de las joyas. Es la más
              empleada. Suele venir marcada como 925 ó con algunos símbolos
              equivalentes.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Plata 800 </p>
            <p>
              Este tipo contiene un 80% de plata y un 20% de otros metales. Se
              le conoce como “plata de segunda ley”. Suele venir marcada como
              800 ó con algunos símbolos equivalentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_siete;
