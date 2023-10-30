import React, { useState, useEffect } from "react";
import styles from "./estilosConversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const Comprar = ({ ListadoCiudades }) => {
  const [ciudad, setCiudad] = useState("");
  const [ciudadOpen, setCiudadOpen] = useState(null);
  const [selectDivisa, setSelectDivisa] = useState(true);
  const datosCiudad = ListadoCiudades.arrayMarker;
  const [data, setData] = useState([]);
  //const datos = data;
  //console.log(datos.splice(0, 1, "USD"));
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response?.result?.Tarifas?.Divisas_Compra.reverse());
      });
  }, [ciudad]);
  //const [InputDivisa, setInputDivisa] = useState(<PowerInputIcon />);
  const [valorMoneda, setValorMoneda] = useState("");
  const [DataAcronimo, setAcronimo] = useState("");
  const [DataNombre, setDataNombre] = useState("");
  const [valorInput, setValorInput] = useState("");
  const [switched, setSwitched] = useState(null);
  const [opened, setOpened] = useState(true);
  const [select, setSelect] = useState(null);
  const precioDividido = valorMoneda / 1000;
  const precioDividido2 = 1 / precioDividido;
  const valorFinal = valorInput * precioDividido;
  const valorFinal2 = valorInput / precioDividido;
  const captureCodigo = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setValorMoneda(e.target.dataset.precio);
  };
  const MonedaSeleccionada = () => {
    setSelectDivisa(false);
  };
  const captureHabitual = (e) => {
    setCiudadOpen(false);
  };
  return (
    <div className={styles.bloqueDer}>
      <div className={styles.bloqueTituloSuperior}>
        <h3>CAMBIO DE DÓLAR A EURO</h3>
        <p>Ciudad donde quieres cambiar</p>
        <div className={styles.selectCiudad}>
          <div className={styles.select_ciudad}>
            <div
              onClick={(event) => {
                setSelect(false);
                setCiudadOpen(!ciudadOpen);
              }}
              className={styles.select_ciudadOptionUno}
            >
              {" "}
              {opened ? (
                <>
                  <p>Seleccione ciudad</p>
                  <KeyboardArrowDownIcon />
                </>
              ) : (
                <>
                  {DataNombre} <KeyboardArrowDownIcon />
                </>
              )}
            </div>

            <div
              className={
                ciudadOpen
                  ? `${styles.contenedorOptions} ${styles.contenedorOptionsActivo}`
                  : `${styles.contenedorOptions}`
              }
            >
              <ul>
                {datosCiudad.map((ciudad, i) => (
                  <li
                    key={i}
                    className={styles.listaCiudad}
                    onClick={(e) => {
                      captureHabitual(e);
                      //setAcronimo(e.target.dataset.acronimo);
                      //setValorMoneda(e.target.dataset.precio);
                      setCiudad(e.target.dataset.minusculas);
                      setDataNombre(e.target.dataset.nombre);
                      setSelectDivisa(true);
                      setOpened(false);
                    }}
                    data-minusculas={ciudad.nombreMinusculas}
                    data-nombre={ciudad.nombre}
                  >
                    {ciudad.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.selectCiudad_mobil}>
          <select
            className={styles.select_ciudad_mobil}
            onChange={(e) => {
              setCiudad(e.target.value);
              setSelectDivisa(true);
              setOpened(false);
            }}
          >
            {datosCiudad.map((ciudad, i) => (
              <option key={i} value={ciudad.nombreMinusculas}>
                {ciudad.nombre}
              </option>
            ))}
          </select>
        </div>
        <p className={styles.textoEntreInputs}>
          Selecciona la divisa DÓLAR para saber su precio
        </p>
      </div>
      <div className={styles.contenedorInputSuperior}>
        <div className={styles.bloqueIzqInput}>
          <div
            className={styles.select}
            onClick={() => {
              setSelect(!select);
            }}
          >
            {selectDivisa ? (
              <>
                Seleccione Divisa
                <KeyboardArrowDownIcon />
              </>
            ) : (
              <>
                {DataAcronimo} <KeyboardArrowDownIcon />
              </>
            )}
            <div
              className={
                select
                  ? `${styles.select_monedas} ${styles.select_activo}`
                  : `${styles.select_monedas}`
              }
            >
              {data
                ?.filter(
                  (currency) =>
                    currency.Name !== "HRK" &&
                    currency.Name !== "DKK" &&
                    currency.Name !== "RUB" &&
                    currency.Name !== "NOK" &&
                    currency.Name !== "SEK"
                )
                .map((data, i) => (
                  <div
                    key={i}
                    className={styles.contenedor_list}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-precio={data?.Productos[0].Precio}
                    onClick={(e) => {
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    <div className={styles.bandera}>
                      <img
                        src={`/assets/${data?.Productos[0].Acronimo}.png`}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                        alt={data?.Productos[0].Acronimo}
                      />
                    </div>
                    <div className={styles.moneda}>
                      <p
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                      >
                        {data?.Productos[0].Acronimo}
                      </p>
                      <span
                        className={styles.nombre}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                      >
                        {data?.Productos[0].Nombre}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            <PowerInputIcon />
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  style={{ border: "none" }}
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  readOnly
                  value={valorFinal2.toFixed(2)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>{DataAcronimo}</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1{DataAcronimo} = {precioDividido.toFixed(4)}EUR
            </p>
          )}
        </div>
      </div>
      <div className={styles.botonSwith}>
        <ImportExportIcon
          onClick={(e) => {
            setSwitched(!switched);
          }}
        />
      </div>
      <div className={styles.contenedorInputInferior}>
        {selectDivisa ? (
          <span></span>
        ) : (
          <div className={styles.monedaInferior}>EUR</div>
        )}
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            <PowerInputIcon />
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  value={valorFinal.toFixed(2)}
                  readOnly
                  style={{ border: "none" }}
                />
              )}
              <span>EUR</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1EUR = {precioDividido2.toFixed(4)}
              {DataAcronimo}
            </p>
          )}
        </div>
      </div>
      <a className={styles.botonLlamarTienda} href="tel:900 373 629">
        LLAMAR A TIENDA
      </a>
    </div>
  );
};

export default Comprar;
