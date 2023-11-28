import React from "react";
import styles from "./section_dos.module.css";

const Section_dos = () => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.contenedorSectionDosMargen}>
        <h2>Quiénes somos</h2>
        <p>
          quickgold es una empresa en expansión y por esta razón estamos en
          constante proceso de selección. Con más de 15 años en el mercado
          financiero de la compraventa de metales preciosos, empeños y cambio de
          divisas, hemos conseguido crear un sistema de franquicias estable y
          con un futuro prometedor.
          <br></br> <br></br>
          Ya contamos con más de 60 tiendas en España y seguimos expandiéndonos
          por todo el territorio con la misión de hacer cumplir nuestros
          objetivos de crecimiento. Para ello, trabajamos cada día enfocándonos
          en ofrecer el mejor servicio y apoyo a nuestros clientes para que
          puedan cubrir sus necesidades.
        </p>
      </div>
    </section>
  );
};

export default Section_dos;
