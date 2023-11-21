import React, { useState } from "react";
import styles from "./sectionTres.module.css";
import SelectCiudad from "../ComponenteSelectCiudades/SelectCiudad";

const Section_tres = ({ ciudad, listadoUrlCiudad }) => {
  const [urlSelect, setUrlSelect] = useState("");
  const listadoCiudades = listadoUrlCiudad?.arrayMarker;
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorSectionTresMargen}>
        <div className={styles.bloqueIzq}>
          <h2>
            Vender oro en <span className={styles.linea}>quickgold</span> es
            fácil
          </h2>
          <p>
            El proceso de venta es muy sencillo y cómodo. Primeramente,
            realizamos la tasación por parte de nuestro equipo de profesionales
            que te informarán en todo momento de los pasos que van efectuando.
            Además, ésta se realiza siempre a la vista para que puedas comprobar
            por ti mismo los datos aportados por nuestras compañeras.{" "}
          </p>
          <p>
            Puedes traernos cualquier pieza de oro, no importa si está
            deteriorada o desparejada. Compramos todo tipo de piezas de oro como
            joyas, relojes, monedas, lingotes. Una vez que hayamos comprobado la
            pureza de la misma calculamos su valor basado en la cotización del
            momento, y te abonamos el importe en efectivo o por transferencia.
          </p>
          <p>
            En quickgold llevamos al frente más de 15 años ofreciendo nuestro
            servicio de compro oro, por lo que cuentas con especialistas con una
            larga trayectoria que te ayudarán en todo lo que necesites. Como nos
            encanta recibir tu satisfacción y confianza nos adaptamos a tus
            circunstancias ofreciéndote siempre el mejor servicio posible.
          </p>
          <div className={styles.bloqueIzqInferior}>
            <p>
              Ven a cualquier tienda quickgold sin necesidad de cita previa,
              estaremos encantados de atenderte y ayudarte en la venta de tus
              joyas de oro.
            </p>
          </div>
        </div>
        <SelectCiudad
          listadoCiudades={listadoCiudades}
          urlSelect={urlSelect}
          setUrlSelect={setUrlSelect}
          ciudad={ciudad}
        />
      </div>
    </section>
  );
};

export default Section_tres;
