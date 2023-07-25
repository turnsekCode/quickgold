import React from "react";
import styles from "./sectionSeis.module.css";
import SelectorCiudadesServicio from "../SelectorCiudadesServicio/SelectorCiudadesServicio";

const Section_seis = ({ listadoCiudadesServicios }) => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <h5 className={styles.tituloMobil}>Nuestras tiendas compro oro</h5>
        <div className={styles.BannerSelectorCiudad}>
          <h5>Nuestras casas de cambio</h5>
          <div className={styles.SelectCiudades}>
            <SelectorCiudadesServicio
              listadoCiudadesServicios={listadoCiudadesServicios}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_seis;
