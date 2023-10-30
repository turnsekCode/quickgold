import React from "react";
import styles from "./selectorCiudades.module.css";
import { useRouter } from "next/router";

const SelectorCiudades = ({ listadoUrlCiudad }) => {
  const listadoCiudades = listadoUrlCiudad?.arrayMarker;
  const router = useRouter();
  function IrUrl(e) {
    router.push(`/tiendas/compro-oro-${e}`);
  }
  return (
    <select
      className={styles.botonIrUrl}
      onChange={(e) => {
        IrUrl(e.target.value);
      }}
    >
      <option>CONOCE EL PRECIO DEL ORO</option>
      {listadoCiudades
        ?.filter((url) => url.id !== 0)
        .map((ciudad, i) => (
          <option value={ciudad.nombreMinusculas} key={i}>
            {ciudad.nombre}
          </option>
        ))}
    </select>
  );
};

export default SelectorCiudades;
