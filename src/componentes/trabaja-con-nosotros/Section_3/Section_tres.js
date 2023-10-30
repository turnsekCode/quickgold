import React from "react";
import styles from "./section_tres.module.css";
import Image from "next/image";

const Section_tres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.bloqueSuperior}>
        <h3>Cómo lo conseguimos</h3>
        <p>
          Fácil.<br></br> No dejamos indiferente a nadie
        </p>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.bloqueInferiorCard}>
          <div className={styles.bloqueInferiorImagen}>
            <Image
              src="/assets/img/atencion-cliente1.png"
              alt="Compro oro"
              className={styles.polygonoExpansion}
              width={170}
              height={170}
            />
          </div>
          <div className={styles.bloqueInferiorTexto}>
            <p>
              <strong>Priorizamos la atención al cliente</strong>
            </p>
            <p>
              Todos somos clientes al fin y al cabo y por eso el esfuerzo
              profesional está enfocado en la satisfacción de éste. Tratamos
              como nos gustaría que nos trataran.
            </p>
          </div>
        </div>
        <div className={styles.bloqueInferiorCard}>
          <div className={styles.bloqueInferiorImagen}>
            <Image
              src="/assets/img/atencion-cliente2.png"
              alt="Compro oro"
              className={styles.polygonoExpansion}
              width={170}
              height={170}
            />
          </div>
          <div className={styles.bloqueInferiorTexto}>
            <p>
              <strong>Actitud Positiva</strong>
            </p>
            <p>
              Una de las características imprescindibles en Quickgold es la
              sonrisa. Nuestro equipo trabaja con ganas, apoyándonos unos con
              otros. Somos un gran equipo.
            </p>
          </div>
        </div>
        <div className={styles.bloqueInferiorCard}>
          <div className={styles.bloqueInferiorImagen}>
            <Image
              src="/assets/img/atencion-cliente3.png"
              alt="Compro oro"
              className={styles.polygonoExpansion}
              width={170}
              height={170}
            />
          </div>
          <div className={styles.bloqueInferiorTexto}>
            <p>
              <strong>Sencillez</strong>
            </p>
            <p>
              Contamos con una constante formación y aprendizaje que hace que
              nuestros trabajo sea muy fácil y eso los clientes lo notan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_tres;
