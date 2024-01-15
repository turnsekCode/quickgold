import React from "react";
import styles from "./seccionCuatro.module.css";
import Link from "next/link";

const SeccionCuatro = ({
  ciudad,
  urlServicio1,
  urlServicio2,
  urlServicio3,
  urlServicio4,
  tituloBoton1,
  tituloBoton2,
  tituloBoton3,
  tituloBoton4,
  textoServicio1,
  textoServicio2,
  textoServicio3,
  textoServicio4,
}) => {
  return (
    <section className={styles.contenedorSeccionCuatro}>
      <h2>Otros servicios en nuestra tienda</h2>
      <article>
        <Link href={urlServicio1} title="">
          {tituloBoton1}
        </Link>
        <p>{textoServicio1}</p>
      </article>
      <article>
        <Link href={urlServicio2} title="">
          {tituloBoton2}
        </Link>
        <p>{textoServicio2}</p>
      </article>
      <article>
        <Link href={urlServicio3} title="">
          {tituloBoton3}
        </Link>
        <p>{textoServicio3}</p>
      </article>
      <article>
        <Link href={urlServicio4} title="">
          {tituloBoton4}
        </Link>
        <p>{textoServicio4}</p>
      </article>
    </section>
  );
};

export default SeccionCuatro;
