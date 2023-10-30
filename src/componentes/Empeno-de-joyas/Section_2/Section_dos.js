import React from "react";
import styles from "./section_dos.module.css";

const Section_dos = () => {
  return (
    <section className={styles.contenedorEmpenoJoyas}>
      <div className={styles.contenedorInfo}>
        <h2>
          Empeñar joyas en <span className={styles.linea}>quickgold </span> es
          fácil
        </h2>
        <div className={styles.contenedorTexto}>
          <p>
            Puedes empeñar piezas de oro, plata y brillantes de forma cómoda y
            segura. Nuestro equipo de profesionales se encargará de realizar
            todo el proceso siempre a la vista y detallando toda la información
            en cada paso que van realizando.
          </p>
          <p>
            Además, contamos con todos los instrumentos necesarios para que se
            realice con total precisión. En quickgold nos encanta cuidar de
            nuestros clientes por lo que de forma exclusiva siempre nos
            adaptamos a tus necesidades:{" "}
            <strong>0% de interés el primer mes.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
