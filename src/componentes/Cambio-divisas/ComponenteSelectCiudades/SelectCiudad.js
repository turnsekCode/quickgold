import React from "react";
import styles from "./selecCiudad.module.css";
import Link from "next/link";

const SelectCiudad = ({ listadoCiudades, urlSelect, setUrlSelect, ciudad }) => {
  return (
    <div id="calculadora" className={styles.bloqueDer}>
      <div className={styles.bloqueSuperiorTexto}>
        <div>
          <p>Cambio de divisa</p>
          <p>Descubre el valor de la moneda que te interesa.</p>
        </div>
      </div>
      <div className={styles.bloqueInferior}>
        <p className={styles.bloqueInferiorTexto1}>
          ¿Te gustaría comprar o vender divisa?
        </p>
        <p className={styles.bloqueInferiorTexto2}>
          Realiza en <strong>quickgold</strong> tu cambio de moneda extranjera
          sin comisiones para siempre. Más de 25 divisas disponibles al instante
          para que puedas fijar tu precio de cambio. Consulta la cotización de
          la moneda que quieras con nuestro conversor online.
        </p>
        <p className={styles.bloqueInferiorTexto3}>
          Selecciona tu ciudad y haz clic en{" "}
          <span>cambio y compra de divisa </span>para saberlo.
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
            CONOCE EL PRECIO DE LA DIVISA
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
