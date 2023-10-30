import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <h2>
        Cambiar divisa en <span className={styles.linea}>quickgold</span> es muy
        fácil
      </h2>
      <div className={styles.bloqueTextoMobil}>
        <p>
          Cambiar divisa en cualquiera de nuestras tiendas tan solo te llevará
          unos minutos.
        </p>
      </div>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
      <p className={styles.subTitulo}>
        Consigue el mejor cambio a euros hoy. Precios siempre actualizados.
      </p>
      <p className={styles.subParrafo}>
        Selecciona la ciudad donde vas a realizar el cambio y obtén al momento
        el precio actualizado por tu operación. <br></br>
        <br></br>No cobramos ninguna comisión por lo que verás el precio final
        que podrás fijar llamándonos gratuitamente al{" "}
        <span>
          <a href={`tel:${ciudad?.acf?.telefono}`}>{ciudad?.acf?.telefono}</a>.
        </span>
      </p>
    </section>
  );
};

export default SectionTres;
