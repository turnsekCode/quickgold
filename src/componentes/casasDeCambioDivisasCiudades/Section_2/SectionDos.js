import React from "react";
import styles from "./section_2.module.css";
import ConversorDivisa from "@/componentes/ConversorDivisa/ConversorDivisa";
import Image from "next/image";

const SectionDos = ({ ciudad, comprar }) => {
  return (
    <div className={styles.contenedorSectionDos}>
      <div className={styles.bloqueIzq}>
        <h2 className={styles.bloqueIzqTitulo}>Cambio de divisa</h2>
        <p className={styles.bloqueIzqTexto}>
          Descubre el valor de la moneda que te interesa.
        </p>
        <ConversorDivisa ciudad={ciudad} comprar={comprar} />
      </div>
      <div className={styles.bloqueDer}>
        <div className={styles.bloqueDerUno}>
          <h2>
            {ciudad?.acf?.texto_section_tres?.titulo_del_bloque_izq}
            <span className={styles.linea}> {ciudad?.acf?.ciudad}?</span>
          </h2>
          <p>
            <span>{ciudad?.acf?.texto_section_tres?.texto_bloque_izq} </span>
            {ciudad?.acf?.texto_section_tres?.texto_bloque_izq_negrita}
          </p>
        </div>
        <div className={styles.bloqueDerDos}>
          <h2>{ciudad?.acf?.texto_section_tres?.titulo_bloque_der}</h2>
          <p>{ciudad?.acf?.texto_section_tres?.texto_bloque_der}</p>
        </div>
        <Image
          src="/assets/img/adornoCasaCambios.png"
          alt="Casa de Cambio"
          className={styles.ImageAdorno}
          width={210}
          height={210}
        />
      </div>
    </div>
  );
};

export default SectionDos;
