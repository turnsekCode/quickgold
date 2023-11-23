import React from "react";
import styles from "./sectionCuatro.module.css";

const Section_cuatro = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <div className={styles.contenedorTexto}>
          <h5>¿Qué garantías te ofrecemos en quickgold?</h5>
        </div>
        <div className={styles.contenedorTiposDivisas}>
          <div className={styles.contenedorTiposDivisasCard1}>
            <p>
              En quickgold obtendrás lingotes procedentes de refinerías con
              certificación Good Delivery, otorgados por la London Bullion
              Market Association (LBMA), asociación de profesionales del mercado
              que operan con oro y plata más importante del mundo, que vela por
              los intereses de sus miembros. <br></br>La inversión en metales
              preciosos con quickgold es un proceso sencillo y garantizado, ya
              que aportamos el amplio conocimiento del mercado.
            </p>
          </div>
        </div>
        <div className={styles.contenedorTexto}>
          <h5>¿Qué nos diferencia en la venta de lingotes de oro?</h5>
        </div>
        <div className={styles.contenedorTiposDivisas}>
          <div className={styles.contenedorTiposDivisasCard1}>
            <p>
              En quickgold entendemos que para nuestros clientes invertir en oro
              es una decisión importante, por ello, en todas las oficinas
              quickgold no sólo vas a realizar una gestión de compraventa, sino
              que vas a obtener asesoramiento y consejo por parte de todo el
              equipo, una copia del contrato perfeccionado, y, si lo deseas,
              seguimiento de la cotización de forma personalizada para que
              llegado el momento, seas avisado y obtengas el máximo beneficio de
              la inversión realizada.<br></br>
              <br></br> Dispones de varios tipos de lingotes para que elijas el
              que más se adecúe a tu presupuesto, desde{" "}
              <strong>Lingotes de 1 kg hasta lingotes de 2.5g.</strong> Todos
              nuestros lingotes llevan adjunto un certificado de autenticidad,
              así como las marcas requeridas en superficie.<br></br>
              <br></br> En estas marcas deben incluirse: el número de serie del
              lingote; la marca del ensayador o refinería; un número de cuatro o
              cinco dígitos si incluye dos decimales (separado por coma o
              punto), que indica la pureza y el peso del lingote.<br></br>{" "}
              <br></br>
              Acércate a una de nuestras oficinas o contáctanos en el{" "}
              <a href="tel:900373629">
                <strong>900 373 629</strong>
              </a>
              , estaremos encantados de atenderte y de resolver cualquier
              consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_cuatro;
