import React, { useState } from "react";
import styles from "./SelectorCiudades.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SelectorCiudadesServicio = ({ listadoCiudadesServicios }) => {
  const listadoCiudades = listadoCiudadesServicios.arrayMarker;
  const [selectOpen, setSelectOpen] = useState(null);

  return (
    <div className={styles.contenedorSelector}>
      <p
        onClick={() => {
          setSelectOpen(!selectOpen);
        }}
      >
        Selecciona tienda <KeyboardArrowDownIcon />
      </p>
      <ul
        className={
          selectOpen
            ? `${styles.contenedorSelectorUl} ${styles.contenedorSelectorUlActivo}`
            : `${styles.contenedorSelectorUl}`
        }
      >
        {listadoCiudades.map((ciudad, i) => (
          <a
            onClick={() => {
              setSelectOpen(false);
            }}
            key={i}
            href={ciudad.url}
          >
            <li className={styles.contenedorSelectorListado}>
              {ciudad.ciudad}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SelectorCiudadesServicio;
