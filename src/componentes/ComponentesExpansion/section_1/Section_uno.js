import React from "react";
import styles from "./section_uno.module.css";
import Image from "next/image";

const Section_uno = () => {
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.contenedorSectionUnoMargen}>
        <h1>
          Franquicias <span className={styles.linea}>quickgold</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper
          luctus pharetra, cubilia sollicitudin sagittis interdum consequat a
          nisi volutpat rutrum lobortis risus, cum hendrerit curabitur duis
          ultricies tortor libero suspendisse netus. Per condimentum dui rutrum
          nisi quam praesent molestie suspendisse, id turpis ullamcorper
          vehicula fusce cum purus nibh iaculis, etiam nam consequat eu
          pellentesque interdum class. Commodo a gravida lacus maecenas cras
          imperdiet faucibus eros conubia dui egestas, pharetra ac parturient
          nec platea ultrices pellentesque sociosqu euismod potenti.
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
