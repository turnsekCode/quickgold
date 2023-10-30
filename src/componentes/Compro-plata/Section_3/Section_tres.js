import React from "react";
import styles from "./sectionTres.module.css";
import Image from "next/image";
import SelectCiudad from "../ComponenteSelectCiudades/SelectCiudad";

const Section_tres = ({ ciudad, listadoUrlCiudad }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorSectionTresMargen}>
        <div className={styles.bloqueIzq}>
          <h2>
            Vender plata en <span className={styles.linea}>quickgold</span> es
            fácil
          </h2>
          <p>
            Al igual que con cualquier otro metal precioso, el precio de la
            plata varía en el tiempo según ciertos criterios como: el peso o la
            pureza. Por eso es necesario realizar una tasación previa a la venta
            de plata.
          </p>
          <p>
            Nuestro equipo cualificado será el encargado de realizar todas las
            pruebas necesarias para fijar el precio de las piezas. Éstas se
            realizan, como siempre, a la vista del cliente y se complementan
            aportando toda la información precisa por cada paso que van dando.
          </p>
          <p>
            Obtén rápidamente dinero extra al vender tus piezas de plata en
            Quickgold, puedes fijar el precio de venta directamente llamándonos
            gratuitamente al{" "}
            <a
              className={styles.telefono}
              href={`tel:${ciudad?.acf?.telefono}`}
            >
              <strong>{ciudad?.acf?.telefono}</strong>
            </a>
            , estaremos encantados de atenderte.
          </p>
          <div className={styles.bloqueIzqInferior}>
            <p>
              Ven a cualquier tienda quickgold sin necesidad de cita previa,
              estaremos encantados de atenderte y ayudarte en la venta de tus
              piezas de plata.
            </p>
          </div>
        </div>
        <SelectCiudad listadoUrlCiudad={listadoUrlCiudad} />
      </div>
    </section>
  );
};

export default Section_tres;
