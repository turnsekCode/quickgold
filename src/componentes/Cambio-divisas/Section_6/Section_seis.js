import React from "react";
import styles from "./sectionSeis.module.css";

const Section_seis = ({ ciudad, divisas_list }) => {
  const divisas = divisas_list?.result.Tarifas?.Divisas_Compra;
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        {/*<h5 className={styles.tituloMobil}>Nuestras tiendas compro oro</h5>
        <div className={styles.BannerSelectorCiudad}>
          <h5>Nuestras casas de cambio</h5>
          <div className={styles.SelectCiudades}>
            <SelectorCiudadesServicio
              listadoCiudadesServicios={listadoCiudadesServicios}
            />
          </div>
  </div>*/}
        <div className={styles.contenedorTexto}>
          <h5>Cambio de divisa en quickgold</h5>
        </div>
        <div className={styles.contenedorTiposDivisas}>
          <div className={styles.contenedorTiposDivisasCard1}>
            <ul>
              {divisas
                ?.filter(
                  (currency) =>
                    currency.Name !== "HRK" &&
                    currency.Name !== "DKK" &&
                    currency.Name !== "RUB" &&
                    currency.Name !== "NOK" &&
                    currency.Name !== "ILS" &&
                    currency.Name !== "SEK"
                )
                .map((divisa, index) => (
                  <li key={index}>{divisa?.Productos[0]?.Nombre}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_seis;
