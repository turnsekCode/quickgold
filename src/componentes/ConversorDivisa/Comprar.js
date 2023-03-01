import React, { useState, useEffect } from "react";
import styles from "./estilosConversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const Comprar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://quickgold.es/archivos-cache/Fixingalicante.txt")
      .then((response) => response.json())
      .then((santantoni) => {
        setData(santantoni);
        setLoading(true);
      });
  }, []);
  console.log(data.result?.Tarifas?.Divisas_Compra[28].Productos[0].Precio);
  console.log(loading);
  const precioDolar =
    data.result?.Tarifas?.Divisas_Compra[28].Productos[0].Precio;
  return (
    <div className={styles.bloqueDer}>
      <div className={styles.bloqueDivHabituales}>
        <div className={styles.bloqueTituloSuperior}>
          <h6>
            Conversor <span>Compra</span> de divisa
          </h6>
          <p className={styles.tituloDivisaHabitual}>Divisas más habituales</p>
        </div>

        <div className={styles.divisasHabituales}>
          <div className={styles.dolar}>
            <div className={styles.imgMoneda}>
              <img src="/banderaUSA.png" />
              <span>USD</span>
            </div>
            <div className={styles.nombreMoneda}>
              <p>Dólar USA</p>
              <p>{loading ? <span>{precioDolar}</span> : <p>loading...</p>}</p>
            </div>
          </div>
          <div className={styles.libra}>
            <div className={styles.imgMoneda}>
              <img src="/banderaGBP.png" />
              <span>GBP</span>
            </div>
            <div className={styles.nombreMoneda}>
              <p>Libra Esterlina</p>
              <p>
                <span>1.0163</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contenedorInputSuperior}>
        <div className={styles.bloqueIzqInput}>
          <div className={styles.select}>
            <PowerInputIcon /> <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className={styles.bloqueDerInput}>
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Cantidad"
            inputMode="numeric"
          />
          <p>1$ = 1.03€</p>
        </div>
      </div>
      <div className={styles.botonSwith}>
        <ImportExportIcon />
      </div>
      <div className={styles.contenedorInputInferior}>
        <div className={styles.monedaInferior}>EUR</div>
        <div className={styles.bloqueDerInput}>
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Cantidad"
            inputMode="numeric"
          />
          <p>1€ = 1.03$</p>
        </div>
      </div>
      <a className={styles.botonLlamarTienda} href="tel:">
        LLAMAR A TIENDA
      </a>
    </div>
  );
};

export default Comprar;
