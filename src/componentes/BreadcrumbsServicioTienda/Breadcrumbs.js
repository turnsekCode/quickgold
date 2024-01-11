import React from "react";
import styles from "./breadcrumbs.module.css";

const Breadcrumbs = ({
  raiz,
  tiendas,
  nombreCiudad,
  nombreTienda,
  ubicacionActual,
  urlNombreCiudad,
  urlNombreTienda,
  iconoRaiz,
  iconoTiendas,
  iconoUbiccionActual,
  iconotiendasDos,
  urlNombreServicio,
}) => {
  return (
    <div className={styles.sectionBreadcrumbs}>
      <div className={styles.contenedorBreadcrumbs}>
        <a href="/" title={`Ir a ${raiz}`}>
          {raiz}
        </a>
        {iconoRaiz}
        <a href={urlNombreServicio} title={`Ir a ${tiendas}`}>
          {tiendas}
        </a>
        {iconoTiendas}
        <a href={urlNombreCiudad} title={`Ir a ${nombreCiudad}`}>
          {nombreCiudad}
        </a>
        {iconoUbiccionActual}
        <a href={urlNombreTienda} title={`Ir a ${nombreTienda}`}>
          {nombreTienda}
        </a>
        {iconotiendasDos}
      </div>
      {ubicacionActual}
    </div>
  );
};

export default Breadcrumbs;
