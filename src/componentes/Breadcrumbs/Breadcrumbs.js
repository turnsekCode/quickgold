import React from "react";
import styles from "./breadcrumbs.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Breadcrumbs = () => {
  return (
    <div className={styles.sectionBreadcrumbs}>
      <div className={styles.contenedorBreadcrumbs}>
        <a href="https://quickgold.es" title="Ir a Quickgold">
          Quickgold
        </a>
        <KeyboardArrowRightIcon />
      </div>
      <a href="https://quickgold.es/tiendas" title="Ir a Tiendas">
        Tiendas
      </a>
    </div>
  );
};

export default Breadcrumbs;
