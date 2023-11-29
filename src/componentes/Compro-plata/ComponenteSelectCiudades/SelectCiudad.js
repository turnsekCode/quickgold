import React, { useState } from "react";
import styles from "./selecCiudad.module.css";
import Link from "next/link";

const SelectCiudad = ({ listadoUrlCiudad, ciudad }) => {
  const [urlSelect, setUrlSelect] = useState("");
  const [botonActivo, setBotonActivo] = useState(true);
  const listadoCiudades = listadoUrlCiudad?.arrayMarker;
  return (
    <div id="calculadoraOro" className={styles.bloqueDer}>
      <div className={styles.bloqueSuperiorTexto}>
        <div>
          <p>Precio de la plata</p>
          <p>¿Cuánto cuesta ahora la plata?</p>
        </div>
      </div>
      <div className={styles.bloqueInferior}>
        <p className={styles.bloqueInferiorTexto1}>
          ¿Te gustaría conocer el precio de la plata?
        </p>
        <p className={styles.bloqueInferiorTexto3}>
          Selecciona tu ciudad y haz clic en{" "}
          <span>conoce el precio de la plata para saberlo.</span>
        </p>
        <div className={styles.ContenedorSelect}>
          <select
            onChange={(e) => {
              setUrlSelect(e.target.value);
              setBotonActivo(false);
            }}
            className={styles.select}
          >
            {listadoCiudades?.map((ciudad, i) => (
              <option value={ciudad.nombreMinusculas} key={i}>
                {ciudad.nombre}
              </option>
            ))}
          </select>
          {botonActivo ? (
            <button disabled className={styles.botonIrCiudad}>
              CONOCE EL PRECIO DE LA PLATA
            </button>
          ) : (
            <Link
              className={styles.botonIrCiudad}
              href={`/tiendas/compro-oro-${urlSelect}?#precioPLata`}
            >
              CONOCE EL PRECIO DE LA PLATA
            </Link>
          )}
        </div>
        <p className={styles.bloqueInferiorTexto4}>
          Si lo prefieres, también puedes llamarnos e informarte. ¡Estaremos
          encantados de resolver todas tus dudas!
        </p>
        <a href={`tel:${ciudad?.acf?.telefono}`} className={styles.botonLlamar}>
          LLAMA GRATIS
        </a>
      </div>
    </div>
  );
};

export default SelectCiudad;
