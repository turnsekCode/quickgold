import React from "react";
import styles from "./selectCiudadHome.module.css";
import { useRouter } from "next/router";

const SelectCiudadHome = ({ listadoUrlCiudad }) => {
  const listadoCiudades = listadoUrlCiudad?.arrayMarker;
  const router = useRouter();
  function IrUrl(e) {
    router.push(`/tiendas/compro-oro-${e}`);
  }
  return (
    <div className={styles.contenedorSelect}>
      <select
        aria-label="quickgold"
        onChange={(e) => {
          IrUrl(e.target.value);
        }}
        className={styles.select}
      >
        <option>Selecciona Ciudad</option>
        {listadoCiudades
          ?.filter((url) => url.id !== 0)
          .map((ciudad, i) => (
            <option value={ciudad.nombreMinusculas} key={i}>
              {ciudad.nombre}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectCiudadHome;
