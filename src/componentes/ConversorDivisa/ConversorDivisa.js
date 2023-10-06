import React, { useState } from "react";
import Comprar from "./Comprar";
import styles from "./estilosConversor.module.css";
import Vender from "./Vender";

const ConversorDivisa = ({ ciudad }) => {
  const [selectDivisa, setSelectDivisa] = useState(true);
  const [switched, setSwitched] = useState(null);
  const comprar = ciudad?.acf?.vende_divisa;
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>
          <div className={styles.contenedorBotones}>
            {/*<button
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
                  Comprar divisa
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
                  Vender divisa
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
    </section>
  );
};

export default ConversorDivisa;
