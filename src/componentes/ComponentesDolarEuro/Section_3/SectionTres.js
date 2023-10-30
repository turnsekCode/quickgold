import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";
import Comprar from "./ConversorDivisa/Comprar";

const SectionCuatro = ({ ListadoCiudades, setCiudadOpen, ciudadOpen }) => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.contenedorSectionCuatroMargen}>
        <div className={styles.bloqueIzq}>
          <h2>Precio del dólar hoy</h2>
          <p>
            El precio del dólar hoy en España es un tema de interés para muchas
            personas que están planeando viajar a Estados Unidos o que tienen
            transacciones internacionales. El valor del dólar en relación al
            euro puede fluctuar diariamente debido a diversos factores
            económicos y políticos. En nuestra web puedes consultar la tasa de
            cambio actualizada siempre.<br></br>
            <br></br> En Quickgold te ofrecemos más de 50 oficinas de cambio de
            dólares a euros por toda España. Nuestras tiendas se encuentran en
            las mejores ubicaciones de cada ciudad y te ofrecemos un horario
            amplio de lunes a sábado (en determinadas tiendas podrás encontrar
            horario de apertura también los domingos).<br></br>
            <br></br> Si quieres cambiar dólares a euros en España, el precio
            puede variar, pero acudir a Quickgold es una excelente opción para
            cambiar dólares a euros. Comprueba nuestro listado de tiendas y
            elige la más cercana a tu ubicación. En nuestras casas de cambio de
            dólares ofrecemos tasas de cambio competitivas, transparencia y un
            servicio personalizado. Confiar en expertos en cambio de divisas te
            proporcionará una experiencia segura y satisfactoria.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <Comprar
            ListadoCiudades={ListadoCiudades}
            setCiudadOpen={setCiudadOpen}
            ciudadOpen={ciudadOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCuatro;
