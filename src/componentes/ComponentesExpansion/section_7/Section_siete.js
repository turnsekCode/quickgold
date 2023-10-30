import React from "react";
import styles from "./section_siete.module.css";
import FormularioExpansion from "../formularioExpansion/FormularioExpansion";
import CircleIcon from "@mui/icons-material/Circle";

const Section_siete = () => {
  return (
    <section className={styles.contenedorSectionSiete}>
      <h5>¿QUIERES MÁS INFORMACIÓN?</h5>
      <div className={styles.contenedorBloques}>
        <div className={styles.bloqueIzq}>
          <h6>LLÁMANOS</h6>
          <p className={styles.bloqueIzqTexto}>
            Contacta con nosotros para poder darte toda la información necesaria
            sobre nuestras tiendas.
          </p>
          <div className={styles.bloqueIzqInferior}>
            <div className={styles.bloqueHorario}>
              <CircleIcon />
              <p className={styles.nuestroHorario}>NUESTRO HORARIO</p>
            </div>
            <div className={styles.bloqueHorarios}>
              <p className={styles.horarioDias}>LUNES - VIERNES</p>
              <p className={styles.horarioHoras}>9:00 - 21:00</p>
            </div>
            <div className={styles.bloqueHorariosDos}>
              <p className={styles.horariosDiasDos}>SÁBADO</p>
              <p className={styles.horariosHorasDos}>9:00 - 15:00</p>
              <p className={styles.horariosDiasTres}>DOMINGO</p>
              <p className={styles.horariosHorasTres}>CERRADO</p>
              <CircleIcon />
            </div>
          </div>
          <a href="tel:900 373 629">
            <strong>LLAMA GRATIS</strong> AL 900 373 629
          </a>
        </div>
        <div className={styles.bloqueDer}>
          <FormularioExpansion />
        </div>
      </div>
    </section>
  );
};

export default Section_siete;
