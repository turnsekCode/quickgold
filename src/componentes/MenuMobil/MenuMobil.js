import React, { useState } from "react";
import styles from "./menuMobil.module.css";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import { Tiendas } from "../../utilities/DataTiendas";

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
      <div className={styles.background}></div>
      <div className={styles.menuMobil}>
        <div className={styles.closeBoton}>
          <CloseIcon
            onClick={() => {
              setSubMenuAbierto(false);
              setMenuAbierto(false);
              setSubMenuTienda(false);
            }}
          />
        </div>
        <div className={styles.contenedorListasMenu}>
          <div className={styles.listasMenu}>
            <a
              onClick={() => setMenuAbierto(false)}
              href="https://quickgold.es/compro-oro/"
              title="Ir a compro oro"
            >
              Compro Oro
            </a>
            <a
              onClick={() => setMenuAbierto(false)}
              href="https://quickgold.es/cambio-divisas/"
              title="Ir a cambio de divisa"
            >
              Cambio de divisas
            </a>
            <a
              onClick={() => setMenuAbierto(false)}
              href="https://quickgold.es/empeno-de-joyas/"
              title="Ir a empeño de joyas"
            >
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
                  ? `${styles.subServicios} ${styles.subMenuActivoServicios}`
                  : `${styles.subServicios} `
              }
            >
              <a
                onClick={() => setMenuAbierto(false)}
                href="https://quickgold.es/invertir-en-oro/"
              >
                INVERTIR EN ORO
              </a>
              <a
                onClick={() => setMenuAbierto(false)}
                href="https://quickgold.es/joyeria-de-ocasion/"
              >
                JOYERÍA DE OCASIÓN
              </a>
              <a
                onClick={() => setMenuAbierto(false)}
                href="https://quickgold.es/compro-plata/"
              >
                COMPRA DE PLATA
              </a>
              <a
                onClick={() => setMenuAbierto(false)}
                href="https://quickgold.es/vender-diamantes/"
              >
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
          <div className={styles.menuInferiorMobil}>
            <ul>
              <li>
                <a href="https://quickgold.es/expansion/" title="">
                  ABRIR TIENDA QUICKGOLD
                </a>
              </li>
              <li>
                <a href="https://quickgold.es/trabaja-con-nosotros/" title="">
                  TRABAJA CON NOSOTROS
                </a>
              </li>
              <li>
                <a href="https://quickgold.es/preguntas-frecuentes/" title="">
                  PREGUNTA FRECUENTES
                </a>
              </li>
              <li>
                <a href="https://quickgold.es/blog/" title="">
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuMobil;
