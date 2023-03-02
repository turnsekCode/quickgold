import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useSticky from "../../utilities/useSticky";
import styles from "./menuOrdenador.module.css";

const MenuOrdenador = ({ menu_list }) => {
  const datos = menu_list.items;
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

        <li className={styles.contenedorSubMenuServicios}>
          <a title="Otros servicios" href="/">
            Otros servicios <KeyboardArrowDownIcon />
          </a>
          <div className={styles.subMenuServicios}>
            <a href="/">INVERTIR EN ORO</a>
            <a title="JOYERÍA DE OCASIÓN" href="/">
              JOYERÍA DE OCASIÓN
            </a>
            <a title="COMPRA DE PLATA" href="/">
              COMPRA DE PLATA
            </a>
            <a title="COMPRA DE DIAMANTES" href="/">
              COMPRA DE DIAMANTES
            </a>
          </div>
        </li>

        <li className={styles.contenedorSubMenuTiendas}>
          <a href="/" title="texto">
            Tiendas <KeyboardArrowDownIcon />
          </a>
          <div className={styles.subMenuTiendas}>
            {datos.map((tienda, index) => (
              <a key={index} href={tienda.url} title={tienda.title}>
                {tienda.title}
              </a>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOrdenador;
