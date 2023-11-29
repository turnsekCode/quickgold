import AccordionServicios from "@/componentes/AccordionServicios/AccordionServicios";
import React, { useEffect, useState } from "react";
import styles from "./seccionDos.module.css";
import AccordionServiciosPrecioOro from "@/componentes/AccordionServiciosPrecioOro/AccordionServiciosPrecioOro";
import AccordionServiciosEmpenoJoyas from "@/componentes/AccordionServiciosEmpenosJoyas/AccordionServiciosEmpenosJoyas";
import AccordionServiciosComproPlata from "@/componentes/AccordionServiciosCompraPlata/AccordionServiciosComproPlata";

const SeccionDos = ({ ciudad }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    let url = window.location.href;
    setUrl(url);
  }, []);
  let accordion;
  if (url === url) {
    accordion = <AccordionServicios ciudad={ciudad} />;
  }
  if (
    url ===
    `https://quickgold.es/tiendas/compro-oro-${ciudad?.acf?.url_para_precio_compro_oro}?#precioOro`
  ) {
    accordion = <AccordionServiciosPrecioOro ciudad={ciudad} />;
  }
  if (
    url ===
    `https://quickgold.es/tiendas/compro-oro-${ciudad?.acf?.url_para_precio_compro_oro}?#empenoJoyas`
  ) {
    accordion = <AccordionServiciosEmpenoJoyas ciudad={ciudad} />;
  }
  if (
    url ===
    `https://quickgold.es/tiendas/compro-oro-${ciudad?.acf?.url_para_precio_compro_oro}?#precioPLata`
  ) {
    accordion = <AccordionServiciosComproPlata ciudad={ciudad} />;
  }
  return (
    <article id="precioOro" className={styles.contenedorSeccionDos}>
      <span id="precioPLata" className={styles.contenedorSeccionDos}>
        <span id="empenoJoyas" className={styles.contenedorSeccionDos}>
          {accordion}
        </span>
      </span>
    </article>
  );
};

export default SeccionDos;
