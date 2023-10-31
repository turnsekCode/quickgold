import React from "react";
import styles from "./breadcrumbs.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Breadcrumbs = () => {
  return (
    <div className={styles.sectionBreadcrumbs}>
      <div className={styles.contenedorBreadcrumbs}>
        <a href="/" title="Ir a Quickgold">
          Quickgold
        </a>
        <KeyboardArrowRightIcon />
      </div>
      Tiendas
    </div>
  );
};

export default Breadcrumbs;
