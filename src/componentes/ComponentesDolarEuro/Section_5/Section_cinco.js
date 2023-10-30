import React from "react";
import styles from "./sectionDos.module.css";

const Section_cinco = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h2>
          Cómo vender dólares en <span className={styles.linea}>quickgold</span>
        </h2>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>Visita en tienda</p>
          <p>
            Acude a nuestra casa de cambio de dólares más cercana e indícanos la
            cantidad de dólares que quieres cambiar a euros. Recuerda que
            realizamos mejoras en el tipo de cambio según la cantidad a cambiar
            así que siempre te vamos a ofrecer nuestro mejor precio y la mejor
            tasa de cambio de tu ciudad.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Acuerdo en precio</p>
          <p>
            Según el tipo de cambio del dólar en ese momento, fijaremos el mejor
            precio del dólar hoy y comprobaremos tus dólares antes de realiza la
            transacción.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>Firma comprobante</p>
          <p>
            Te haremos firmar un comprobante en el que se indica la cantidad de
            dólares que nos has traído y la cantidad de euros que recibes, un
            documento sencillo y rápido de gestionar.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#4</p>
          <p>Pago inmediato</p>
          <p>
            Una vez tenemos los dólares y el comprobante de la operación,
            nuestro equipo te dará un sobre con los euros en efectivo que se
            acordaron para el pago.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
