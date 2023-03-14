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
          <a href="https://quickgold.es/compro-oro/" title="Ir a compro oro">
            Compro Oro
          </a>
        </li>

        <li>
          <a
            href="https://quickgold.es/cambio-divisas/"
            title="Ir a cambio divisas"
          >
            Cambio de divisas
          </a>
        </li>

        <li>
          <a
            href="https://quickgold.es/empeno-de-joyas/"
            title="Ir a empeño de joyas"
          >
            Empeño de joyas
          </a>
        </li>

        <li className={styles.contenedorSubMenuServicios}>
          <div className={styles.servicios}>
            Otros servicios <KeyboardArrowDownIcon />
          </div>
          <div className={styles.subMenuServicios}>
            <a
              title="Ir a invertir en oro"
              href="https://quickgold.es/invertir-en-oro/"
            >
              INVERTIR EN ORO
            </a>
            <a
              title="Ir a joyería de ocasión"
              href="https://quickgold.es/joyeria-de-ocasion/"
            >
              JOYERÍA DE OCASIÓN
            </a>
            <a
              title="Ir a compra de plata"
              href="https://quickgold.es/compro-plata/"
            >
              COMPRA DE PLATA
            </a>
            <a
              title="Ir a compra de diamantes"
              href="https://quickgold.es/vender-diamantes/"
            >
              COMPRA DE DIAMANTES
            </a>
          </div>
        </li>

        <li className={styles.contenedorSubMenuTiendas}>
          <a href="https://quickgold.es/tiendas/" title="texto">
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
