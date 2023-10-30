import React from "react";
import styles from "./section_dos.module.css";
import Image from "next/image";

const Section_dos = () => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.contenedorSectionDosMargen}>
        <h2>
          Evolución <span className={styles.linea}>quickgold</span>
        </h2>
        <Image
          src="/assets/img/evolucionExpansion.png"
          alt="Compro oro"
          className={styles.evolucionExpansion}
          width={1072}
          height={379}
        />
        <Image
          src="/assets/img/evolucionExpansionMobil.png"
          alt="Compro oro"
          className={styles.evolucionExpansionMobil}
          width={357}
          height={524}
        />
      </div>
    </section>
  );
};

export default Section_dos;
