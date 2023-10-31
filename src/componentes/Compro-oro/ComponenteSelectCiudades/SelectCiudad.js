import React from "react";
import styles from "./selecCiudad.module.css";
import Link from "next/link";

const SelectCiudad = ({ listadoCiudades, urlSelect, setUrlSelect, ciudad }) => {
  return (
    <div id="calculadoraOro" className={styles.bloqueDer}>
      <div className={styles.bloqueSuperiorTexto}>
        <div>
          <p>Precio del oro</p>
          <p>¿Cuánto cuesta ahora el oro?</p>
        </div>
      </div>
      <div className={styles.bloqueInferior}>
        <p className={styles.bloqueInferiorTexto1}>
          ¿Te gustaría conocer el precio del oro?
        </p>
        <p className={styles.bloqueInferiorTexto2}>
          En <strong>quickgold</strong> encontrarás nuestro principal servicio
          de Compro Oro, con el que tasamos todas las piezas a la vista para
          garantizarte una operación segura y un precio justo para todo el oro
          que quieras vender. No importa si están desemparejadas o rotas.
        </p>
        <p className={styles.bloqueInferiorTexto3}>
          Selecciona tu ciudad y haz clic en{" "}
          <span>conoce el precio del oro para saberlo.</span>
        </p>
        <div className={styles.ContenedorSelect}>
          <select
            onChange={(e) => {
              setUrlSelect(e.target.value);
            }}
            className={styles.select}
          >
            {listadoCiudades.map((ciudad, i) => (
              <option value={ciudad.nombreMinusculas} key={i}>
                {ciudad.nombre}
              </option>
            ))}
          </select>
          <Link
            className={styles.botonIrCiudad}
            href={`/tiendas/compro-oro-${urlSelect}`}
          >
            CONOCE EL PRECIO DEL ORO
          </Link>
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
