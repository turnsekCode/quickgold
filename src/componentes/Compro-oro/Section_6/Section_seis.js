import React from "react";
import styles from "./sectionSeis.module.css";

const Section_seis = () => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <div className={styles.contenedorTexto}>
          <h5>¿Qué tipo de oro hay en el mercado?</h5>
          <p>Existen diferentes tipos de oro según su calidad, color, etc.</p>
        </div>
        <div className={styles.contenedorTiposOro}>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro 24K </p>
            <p>
              Es más conocido por ser el llamado «oro de inversión». Tiene un
              grado de pureza de 99,9% por lo que se le considera oro puro. Lo
              encontrarás en lingotes de oro y en algunas monedas. Suele venir
              marcado en la pieza como 999.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro 18K </p>
            <p>
              Es conocido como oro de "primera ley", tiene una pureza del 75%.
              Se realiza una aleación de oro puro con otros metales para darle
              mayor resistencia y dureza. Es el más usado en joyería y
              orfebrería. Suele venir marcado en la pieza como 750.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro 14K </p>
            <p>
              Es conocido como oro bajo ya que tiene una pureza de oro más baja,
              del 58,50%. Es habitual encontrarlo en joyería española antigua y
              en determinados países. Suele venir marcado en la pieza como 585.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro amarillo </p>
            <p>
              Es el color del oro y puedes encontrar piezas de cualquier calidad
              en este color.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro blanco </p>
            <p>
              Es una aleación de oro con otros metales blancos como plata y
              paladio. Se puede encontrar en calidades de 18k o inferiores.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro rojo o rosado </p>
            <p>
              Es una aleación de oro con cobre, lo que le da ese tono rosado o
              rojo. Se puede encontrar en calidades de 18k o inferiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_seis;
