import React, { useState } from "react";
import styles from "./selecCiudad.module.css";
import Link from "next/link";

const SelectCiudad = ({ listadoUrlCiudad, ciudad }) => {
  const [urlSelect, setUrlSelect] = useState("");
  const listadoCiudades = listadoUrlCiudad?.arrayMarker;
  const [botonActivo, setBotonActivo] = useState(true);
  return (
    <div id="calculadoraOro" className={styles.bloqueDer}>
      <div className={styles.bloqueSuperiorTexto}>
        <div>
          <p>Empeño de joyas</p>
          <p>¿Cuánto cuesta ahora el oro?</p>
        </div>
      </div>
      <div className={styles.bloqueInferior}>
        <p className={styles.bloqueInferiorTexto3}>
          Selecciona tu ciudad y haz clic en{" "}
          <span>conoce el precio del oro para saberlo.</span>
        </p>
        <div className={styles.ContenedorSelect}>
          <select
            onChange={(e) => {
              setUrlSelect(e.target.value);
              setBotonActivo(false);
            }}
            className={styles.select}
          >
            {listadoCiudades.map((ciudad, i) => (
              <option value={ciudad.nombreMinusculas} key={i}>
                {ciudad.nombre}
              </option>
            ))}
          </select>
          {botonActivo ? (
            <button disabled className={styles.botonIrCiudad}>
              CONOCE EL PRECIO DEL ORO
            </button>
          ) : (
            <Link
              className={styles.botonIrCiudad}
              href={`/tiendas/compro-oro-${urlSelect}?#empenoJoyas`}
            >
              CONOCE EL PRECIO DEL ORO
            </Link>
          )}
        </div>
        <div className={styles.contenidoEjemplo}>
          <div className={styles.contenedorInfo}>
            <h5>PONGAMOS UN EJEMPLO</h5>
            <p className={styles.segundoParrafo}>
              Para un empeño con interés al
              <span>3% mensual y 0% de interés el primer mes:</span>{" "}
            </p>
            <div className={styles.ejemplo}>
              <p className={styles.primerParrafo}>
                Con un valor de tus joyas de 100€, recibes 97€.
              </p>
              <p className={styles.tercerParrafo}>
                Conlleva un pequeño gasto de gestión del 3%
              </p>
            </div>
            <p className={styles.cuartoParrafo}>
              Para recuperar las piezas empeñadas pasado el primer mes y
              finalizar el contrato deberías abonar 100€.
            </p>
          </div>
        </div>
        <a href={`tel:${ciudad?.acf?.telefono}`} className={styles.botonLlamar}>
          LLAMA GRATIS
        </a>
      </div>
    </div>
  );
};

export default SelectCiudad;
