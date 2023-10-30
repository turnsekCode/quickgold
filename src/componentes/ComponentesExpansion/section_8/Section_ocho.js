import React from "react";
import styles from "./section_ocho.module.css";
import Image from "next/image";

const Section_ocho = () => {
  return (
    <section className={styles.contenedorSectionOcho}>
      <div className={styles.contenedorBloques}>
        <div className={styles.bloqueIzq}></div>
        <div className={styles.bloqueDer}>
          <p>No olvides visitar nuestras redes sociales</p>
          <div className={styles.bloqueDerImagenes}>
            <a target="_blank" href="https://www.instagram.com/quickgold.es/">
              <Image
                src="/assets/img/imagenInstagram.png"
                alt="Instagram"
                className={styles.imagenRedes}
                width={94}
                height={85}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/quickgold"
            >
              <Image
                src="/assets/img/imagenLinkedin.png"
                alt="Linkedin"
                className={styles.imagenRedes}
                width={75}
                height={81}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_ocho;
