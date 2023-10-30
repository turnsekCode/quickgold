import React from "react";
import styles from "./breadcrumbs.module.css";

const Breadcrumbs = ({
  raiz,
  iconoRaiz,
  urlUbicacionActual,
  ubicacionActual,
}) => {
  return (
    <div className={styles.sectionBreadcrumbs}>
      <div className={styles.contenedorBreadcrumbs}>
        <a href="/" title={`Ir a ${raiz}`}>
          {raiz}
        </a>
        {iconoRaiz}
      </div>
      {ubicacionActual}
    </div>
  );
};

export default Breadcrumbs;
