import React from "react";
import styles from "./sectionSeis.module.css";
import Link from "next/link";

const Section_seis = () => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <p>
        Con nosotros siempre encontrarás la mejor atención, donde te ofrecemos
        un servicio profesional y transparente, estos son otros de nuestros
        servicios:
      </p>
      <div className={styles.contenedorSectionSeisBotones}>
        <Link href="/compro-oro">Compra de oro</Link>
        <Link href="/compro-plata">Compra de plata</Link>
        <Link href="/empeno-de-joyas">Empeño de joyas</Link>
        <Link href="/cambio-divisas">Cambio de divisa</Link>
        <Link href="/invertir-en-oro">Oro de inversión</Link>
        <Link href="/vender-diamantes">Diamantes</Link>
      </div>
    </section>
  );
};

export default Section_seis;
