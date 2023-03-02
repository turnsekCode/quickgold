import React, { useState } from "react";
import styles from "./menuMobil.module.css";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Tiendas } from "../../utilities/DataTiendas";

const MenuMobil = ({ menuAbieto, setMenuAbierto, menu_list }) => {
  const datos = menu_list.items;
  const [subMenuAbieto, setSubMenuAbierto] = useState(false);
  const [subMenuTienda, setSubMenuTienda] = useState(false);
  return (
    <nav
      className={
        menuAbieto
          ? `${styles.contenedorMenuMobil} ${styles.menuActive1}`
          : `${styles.contenedorMenuMobil} `
      }
    >
      <div
        className={
          menuAbieto
            ? `${styles.menuMobil} `
            : `${styles.menuMobil} ${styles.menuActive}`
        }
      >
        <div className={styles.closeBoton}>
          <CloseIcon
            onClick={() => {
              setSubMenuAbierto(false);
              setMenuAbierto(false);
              setSubMenuTienda(false);
            }}
          />
        </div>
        <div className={styles.listasMenu}>
          <a onClick={() => setMenuAbierto(false)} href="/" title="texto">
            Compro Oro
          </a>
          <a onClick={() => setMenuAbierto(false)} href="/" title="texto">
            Cambio de divisas
          </a>
          <a onClick={() => setMenuAbierto(false)} href="/" title="texto">
            Empeño de joyas
          </a>
          <div
            className={styles.servicios}
            onClick={() => setSubMenuAbierto(!subMenuAbieto)}
          >
            Otros servicios
            {subMenuAbieto ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          <div
            className={
              subMenuAbieto
                ? `${styles.subServicios} ${styles.subMenuActivo}`
                : `${styles.subServicios} `
            }
          >
            <a onClick={() => setMenuAbierto(false)} href="/">
              INVERTIR EN ORO
            </a>
            <a onClick={() => setMenuAbierto(false)} href="/">
              JOYERÍA DE OCASIÓN
            </a>
            <a onClick={() => setMenuAbierto(false)} href="/">
              COMPRA DE PLATA
            </a>
            <a onClick={() => setMenuAbierto(false)} href="/">
              COMPRA DE DIAMANTES
            </a>
          </div>
          <div
            className={styles.servicios}
            onClick={() => setSubMenuTienda(!subMenuTienda)}
          >
            <a href="/">Tiendas</a>
            {subMenuTienda ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          <div
            className={
              subMenuTienda
                ? `${styles.subServicios} ${styles.subMenuActivo}`
                : `${styles.subServicios} `
            }
          >
            {datos.map((tienda, index) => (
              <a
                onClick={() => setMenuAbierto(false)}
                key={index}
                href={tienda.url}
                title={tienda.title}
              >
                {tienda.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuMobil;
