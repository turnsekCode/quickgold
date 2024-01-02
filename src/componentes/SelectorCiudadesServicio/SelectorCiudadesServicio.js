import React, { useState } from "react";
import styles from "./SelectorCiudades.module.css";
import { useRouter } from "next/router";

const SelectorCiudadesServicio = ({ listadoCiudadesServicios }) => {
  const router = useRouter();
  function IrUrl(e) {
    router.push(`/${e}`);
  }
  const listadoCiudades = listadoCiudadesServicios?.arrayMarker;
  const [selectOpen, setSelectOpen] = useState(null);

  return (
    <select
      onChange={(e) => {
        IrUrl(e.target.value);
      }}
      className={styles.contenedorSelectorUl}
    >
      <option>Seleciona ciudad</option>
      {listadoCiudades?.map((ciudad, i) => (
        <option value={ciudad.url} key={i}>
          {ciudad.ciudad}
        </option>
      ))}
    </select>
  );
};

export default SelectorCiudadesServicio;
