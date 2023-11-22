import React, { useState } from "react";
import styles from "./sectionCuatro.module.css";
import Image from "next/image";
import Link from "next/link";
import SelectCiudad from "../ComponenteSelectCiudades/SelectCiudad";

const Section_cuatro = ({ ciudad, listadoUrlCiudad }) => {
  const [urlSelect, setUrlSelect] = useState("");
  const listadoCiudades = listadoUrlCiudad?.arrayMarker;
  return (
    <section className={styles.contenedorSectionCuatro}>
      <SelectCiudad
        listadoCiudades={listadoCiudades}
        urlSelect={urlSelect}
        setUrlSelect={setUrlSelect}
        ciudad={ciudad}
      />
      <div className={styles.bloqueDerPc}>
        <p>
          Consigue el mejor cambio a euros hoy. Precios siempre actualizados.
        </p>
        <Image
          src="/assets/img/adornoCalculadoraDivisa.png"
          width={227}
          height={218}
          alt="cambio divisas"
        />
      </div>
      <div className={styles.bloqueDerMobil}>
        <p className={styles.subTitulo}>
          Consigue el mejor <br></br>cambio a euros hoy. Precios siempre
          actualizados.
        </p>
      </div>
    </section>
  );
};

export default Section_cuatro;
