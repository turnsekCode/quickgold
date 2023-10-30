import React from "react";
import styles from "./sectionCuatro.module.css";

const Section_cuatro = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>Nuestros empeños están pensados para tu comodidad</h4>
        <p>
          Si necesitas <strong>obtener dinero extra</strong> por tus joyas pero
          no quieres desprenderte de ellas, te ayudamos. Trae tus joyas a
          quickgold y descubre nuestro servicio de empeños. Nuestro
          procedimiento es el siguiente:
        </p>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>Comprobación de las joyas a empeñar</p>
          <p>
            Realizamos una tasación para conocer las características de las
            piezas y determinar así, el valor del préstamo. Todo este proceso se
            realiza a la vista e informando de cada paso.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Explicación de las condiciones de empeños</p>
          <p>
            Informamos con claridad de todas las partes del acuerdo para que de
            forma sencilla y clara estés al día de las condiciones del préstamo
            como son: importes, plazos, interés aplicado, etc. Recuerda que
            durante el primer mes de empeño no pagas intereses, por lo que si te
            decides a recuperar tus joyas pasado este tiempo solo abonarás el
            valor del empeño.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>Valoración de las piezas de oro</p>
          <p>Tras estipular la cantidad, firmamos el contrato.</p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#4</p>
          <p>Pago inmediato del valor fijado y acordado</p>
          <p>
            Una vez firmado el acuerdo te entregamos el dinero en el momento,
            sin esperas ni gestiones de solvencia. Obtén tu dinero en efectivo o
            por transferencia, como prefieras. Así de fácil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_cuatro;
