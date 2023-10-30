import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";

const Section_uno = () => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorSectionUnoMargen}>
        <h1>Trabaja con nosotros</h1>
        <p>
          quickgold es una franquicia de servicios financieros con un
          crecimiento continuo desde hace casi dos décadas.<br></br>
          <br></br> Estamos deseando conocerte y que formes parte de un gran
          equipo que trabaja con ilusión, talento y ganas de aprender. Conócenos
          un poco más y mándanos tu CV, nos encantaría contactarte.
        </p>
      </div>
      <Image
        src="/assets/img/PolygonExpansion.png"
        alt="Compro oro"
        className={styles.polygonoExpansion}
        width={300}
        height={300}
        priority
      />
    </section>
  );
};

export default Section_uno;
