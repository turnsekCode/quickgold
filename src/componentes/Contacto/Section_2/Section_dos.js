import React, { useState, useEffect } from "react";
import styles from "./sectionDos.module.css";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

function searchTerm(term) {
  return function (x) {
    return (
      x.nombreCiudad.toLowerCase().includes(term.toLowerCase()) ||
      x.direccion.toLowerCase().includes(term.toLowerCase()) ||
      !term
    );
  };
}

const Section_dos = ({ listadociudades }) => {
  // console.log(listadociudades);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const listaCiudades = listadociudades?.arrayCiudades;
  useEffect(() => {
    setData(listaCiudades);
  }, [listaCiudades]);
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.contenedorBuscador}>
        <p>Encuentra tu tienda quickgold</p>
        <p>Introduce la ciudad para filtrar.</p>
        <input
          className={styles.input}
          placeholder="Ciudad..."
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className={styles.contenedorTabla}>
        <p className={styles.contenedorTablaTitulo}>Listado de tiendas</p>
        <div className={styles.tituloTabla}>
          <p>
            <StorefrontRoundedIcon />
            Tiendas
          </p>
          <p>
            <PhoneIcon />
            Teléfono
          </p>
          <p>
            <PlaceIcon />
            Dirección
          </p>
        </div>
        {data.filter(searchTerm(term)).map((ciudad) => {
          return (
            <div key={ciudad.id} className={styles.contenidoTabla}>
              <p>
                <strong>
                  {ciudad.marca} {ciudad.nombreCiudad}
                </strong>
              </p>
              <p>
                <a href={`tel:${ciudad.telefono}`}>{ciudad.telefono}</a>
              </p>
              <p>{ciudad.direccion}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section_dos;
