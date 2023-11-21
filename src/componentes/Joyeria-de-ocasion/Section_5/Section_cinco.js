import React from "react";
import styles from "./sectionCinco.module.css";
import Link from "next/link";

const Section_cinco = () => {
  return (
    <section className={styles.contendorSectionCinco}>
      <h3>¿Dónde vender joyas de segunda mano?</h3>
      <div className={styles.contendorSectionCincoTexto}>
        <p>
          Recuerda que si tienes por cada joyas de oro o plata que ya no usas,
          puedes <strong>venderlas</strong> o <strong>empeñarlas</strong> en
          nuestras tiendas quickgold.
        </p>
        <p>
          El procedimiento para vender tus joyas de oro o plata que ya no
          quieres es muy sencillo, solo tienes que hacer clic{" "}
          <strong>
            <Link href="/compro-oro">aquí</Link>
          </strong>{" "}
          y te explicamos cómo.
        </p>
      </div>
    </section>
  );
};

export default Section_cinco;
