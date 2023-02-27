import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useSticky from "../../utilities/useSticky";
import styles from "./menuOrdenador.module.css";

const MenuOrdenador = () => {
  const { sticky, stickyRef } = useSticky();
  return (
    <nav
      ref={stickyRef}
      className={
        sticky
          ? `${styles.contenedorMenuSticky} ${styles.headersticky}`
          : `${styles.contenedorMenu}`
      }
    >
      <ul className={styles.contenedorMenu}>
        <li>
          <a href="/" title="texto">
            Compro Oro
          </a>
        </li>

        <li>
          <a href="/" title="texto">
            Cambio de divisas
          </a>
        </li>

        <li>
          <a href="/" title="texto">
            Empeño de joyas
          </a>
        </li>

        <li>
          <a href="/" title="texto">
            Otros servicios <KeyboardArrowDownIcon />
          </a>
        </li>

        <li>
          <a href="/" title="texto">
            Tiendas <KeyboardArrowDownIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOrdenador;
