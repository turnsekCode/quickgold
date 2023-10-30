import React from "react";
import styles from "./section_cuatro.module.css";
import Image from "next/image";

const Section_cuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <h4>¡TE ESTAMOS BUSCANDO!</h4>
      <div className={styles.contenedorBloques}>
        <div className={styles.bloqueIzq}>
          <p>
            ¡En quickgold te necesitamos para seguir creciendo!<br></br>
            <br></br> Buscamos tu pasión, tu buen rollo, tus ganas de aprender,
            tu proactividad, tu compañerismo… Pero sobre todo que seas tú
            mismo/a.<br></br>
            <br></br> El éxito de quickgold es la unión de nuestro equipo.
          </p>
          <br></br>
          <p>
            <strong>¿Qué ofrecemos?</strong>
          </p>
          <br></br>
          <p>
            Ofrecemos la oportunidad de que formes parte de un proyecto lleno de
            ilusión, ambición y estabilidad. Además:
          </p>
          <ul>
            <li>Contrato indefinido. Queremos hacer el camino juntos.</li>
            <li>
              Incorporación inmediata. Estamos deseando que trabajes con
              nosotros.
            </li>
            <li>Salario fijo + incentivos. Tu motivación tiene recompensa.</li>
            <li>Promoción interna. Queremos que crezcas con nosotros.</li>
            <li>
              Formación a nuestro cargo. Te facilitamos todos los conocimientos
              necesarios para tu puesto de trabajo.
            </li>
            <li>
              Apoyo continuo. Dispondrás de asesoramiento para resolver
              cualquier duda en tu día a día.
            </li>
          </ul>
        </div>
        <div className={styles.bloqueDer}>
          <Image
            src="/assets/img/gente-divirtiendose.png"
            alt="Trabaja con nosotros"
            className={styles.imagenSectionCuatro}
            width={392}
            height={562}
          />
        </div>
      </div>
      <div className={styles.contenedorBloquesMobil}>
        <div className={styles.bloqueIzqMobil}>
          <p>
            ¡En quickgold te necesitamos para seguir creciendo!<br></br>
            <br></br> Buscamos tu pasión, tu buen rollo, tus ganas de aprender,
            tu proactividad, tu compañerismo… Pero sobre todo que seas tú
            mismo/a.<br></br>
            <br></br> El éxito de quickgold es la unión de nuestro equipo.
          </p>
          <br></br>
          <p>
            <strong>¿Qué ofrecemos?</strong>
          </p>
          <br></br>
          <p>
            Ofrecemos la oportunidad de que formes parte de un proyecto lleno de
            ilusión, ambición y estabilidad. Además:
          </p>
          <ul>
            <li>Contrato indefinido. Queremos hacer el camino juntos.</li>
            <li>
              Incorporación inmediata. Estamos deseando que trabajes con
              nosotros.
            </li>
            <li>Salario fijo + incentivos. Tu motivación tiene recompensa.</li>
            <li>Promoción interna. Queremos que crezcas con nosotros.</li>
            <li>
              Formación a nuestro cargo. Te facilitamos todos los conocimientos
              necesarios para tu puesto de trabajo.
            </li>
            <li>
              Apoyo continuo. Dispondrás de asesoramiento para resolver
              cualquier duda en tu día a día.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section_cuatro;
