import React from "react";
import styles from "./sectionCuatro.module.css";
import Image from "next/image";
import SelectCiudad from "../ComponenteSelectCiudades/SelectCiudad";

const Section_cuatro = ({ ciudad, listadoUrlCiudad }) => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.contenedorSectionCuatroMargen}>
        <SelectCiudad listadoUrlCiudad={listadoUrlCiudad} ciudad={ciudad} />
        <div className={styles.bloqueDerPc}>
          <p className={styles.bloqueDerPcTitulo}>
            Empeñar joyas en <span className={styles.linea}>quickgold</span> es
            fácil
          </p>
          <p className={styles.bloqueDerPcTextoUno}>
            Puedes empeñar piezas de oro, plata y brillantes de forma cómoda y
            segura. Nuestro equipo de profesionales se encargará de realizar
            todo el proceso siempre a la vista y detallando toda la información
            en cada paso que van realizando.
          </p>

          <p className={styles.bloqueDerPcTextoDos}>
            Además, contamos con todos los instrumentos necesarios para que se
            realice con total precisión. En quickgold nos encanta cuidar de
            nuestros clientes por lo que de forma exclusiva siempre nos
            adaptamos a tus necesidades.
          </p>
          <p className={styles.bloqueDerPcTextoTres}>
            0% de interés el primer mes.
          </p>
          <Image
            src="/assets/img/adornoCalculadoraEmpeno.png"
            width={200}
            height={192}
            alt="cambio divisas"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_cuatro;
