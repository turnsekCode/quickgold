import React from "react";
import styles from "./seccionDos.module.css";
import CalculadoraOro from "@/componentes/ConversorPlata/CalculadoraOro";

const SeccionDos = ({ ciudad }) => {
  return (
    <article className={styles.contenedorSeccionDos}>
      <h1 className={styles.contenedorSeccionDosH2}>Precio del oro</h1>
      <h2 className={styles.subTituloServicio}>
        Vender <strong>oro al mejor precio</strong> es fácil en nuestras tiendas{" "}
        <strong>Compro oro</strong> en {ciudad?.acf?.ciudad_landing}. Más de 15
        años en el sector siendo la empresa referente en las ciudades donde
        estamos.
      </h2>
      <CalculadoraOro ciudad={ciudad} />
    </article>
  );
};

export default SeccionDos;
