import React, { useState } from "react";
import Comprar from "../ConversorDivisa/Comprar";
import styles from "./section_2.module.css";
import Vender from "../ConversorDivisa/Vender";
import Image from "next/image";

const SectionDos = ({ ciudad, comprar }) => {
  const [switched, setSwitched] = useState(null);
  const [selectDivisa, setSelectDivisa] = useState(true);
  const url = ciudad?.acf?.ciudad_minuscula;
  return (
    <div
      style={{
        backgroundImage: `url(/assets/degradado${url}.png)`,
      }}
      className={styles.contenedorSectionDos}
    >
      <div className={styles.bloqueIzq}>
        <figure>
          <Image
            src="/assets/imagen_calc.png"
            alt="Logo Divisa"
            width={80}
            height={80}
            priority
          />
        </figure>
        <div className={styles.contenedorInfo}>
          <h2>Cambio de Divisas {ciudad?.acf?.ciudad}</h2>
          <p>
            Conoce el tipo de cambio en nuestras<br></br> casas de cambio de
            moneda en {ciudad?.acf?.ciudad}.
          </p>
        </div>
        <div className={styles.contenedorBotones}>
          {/* <button
            onClick={() => {
              setSwitched(false);
              setSelectDivisa(true);
            }}
            className={
              switched
                ? `${styles.botonComprar}`
                : `${styles.botonComprar} ${styles.botonActivo}`
            }
          >
            QUIERO EUROS
          </button>*/}
          {comprar ? (
            <>
              {" "}
              <button
                onClick={() => {
                  setSwitched(false);
                  setSelectDivisa(true);
                }}
                className={
                  switched
                    ? `${styles.botonComprar}`
                    : `${styles.botonComprar} ${styles.botonActivo}`
                }
              >
                QUIERO EUROS
              </button>
              <button
                className={
                  switched
                    ? `${styles.botonVender} ${styles.botonActivo}`
                    : ` ${styles.botonVender}`
                }
                onClick={() => {
                  setSwitched(true);
                  setSelectDivisa(true);
                }}
              >
                TENGO EUROS
              </button>
            </>
          ) : null}
        </div>
      </div>
      {switched ? (
        <Vender
          ciudad={ciudad}
          setSelectDivisa={setSelectDivisa}
          selectDivisa={selectDivisa}
        />
      ) : (
        <Comprar
          ciudad={ciudad}
          setSelectDivisa={setSelectDivisa}
          selectDivisa={selectDivisa}
        />
      )}
    </div>
  );
};

export default SectionDos;
