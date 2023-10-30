import React from "react";
import styles from "./sectionTres.module.css";
import Image from "next/image";
import Link from "next/link";

const Section_tres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorSectionTresMargen}>
        <div className={styles.bloqueIzq}>
          <h2>El mejor sitio donde empeñar joyas en tu ciudad</h2>
          <p className={styles.textoUno}>
            *Para realizar cambios de divisa es necesario ser mayor de edad y
            aportar DNI en vigor.
          </p>
          <p className={styles.textoDos}>
            En quickgold llevamos casi dos décadas al frente del servicio de
            empeños. Somos los favoritos de nuestros clientes por nuestra
            atención personalizada, en la que nos adaptamos a tus necesidades.
            Además, contamos con un perfil profesional experto en el tratamiento
            de metales preciosos por lo que tu tasación siempre se hace de
            manera 100% segura y transparente.
          </p>
          <p className={styles.textoTres}>
            En quickgold puedes empeñar joyas o piezas de oro, plata, diamantes,
            etc. Vísitanos y descubre todas las facilidades en préstamos por
            joyas. Localiza tu tienda con nuestro{" "}
            <strong>
              <Link href="/tiendas">buscador.</Link>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_tres;
