import React from "react";
import styles from "./sectionTres.module.css";
import Image from "next/image";

const Section_tres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <h2>¿Dónde comprar joyería de ocasión a precios económicos?</h2>
      <p className={styles.contenedorSectionTresTexto}>
        Si estás buscando la mejor joya de oro o plata a precios económicos,
        quickgold es la tienda que necesitas.
      </p>
      <p className={styles.contenedorSectionTresTexto}>
        <strong>¿Qué piezas de joyería de ocasión vendemos?</strong>
      </p>
      <div className={styles.contenedorSectionTresMargen}>
        <div className={styles.bloqueIzq}>
          <div className={styles.contenedorImagen}>
            <Image
              src="/assets/img/imagenjoyeria1.png"
              alt="Joyería de ocasión"
              className={styles.madridMobil}
              width={150}
              height={150}
            />
            <p>Anillos</p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              src="/assets/img/imagenjoyeria2.png"
              alt="Joyería de ocasión"
              className={styles.madridMobil}
              width={150}
              height={150}
            />
            <p>Pulseras</p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              src="/assets/img/imagenjoyeria3.png"
              alt="Joyería de ocasión"
              className={styles.madridMobil}
              width={150}
              height={150}
            />
            <p>Gargantillas</p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              src="/assets/img/imagenjoyeria4.png"
              alt="Joyería de ocasión"
              className={styles.madridMobil}
              width={150}
              height={150}
            />
            <p>Cadenas</p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              src="/assets/img/imagenjoyeria5.png"
              alt="Joyería de ocasión"
              className={styles.madridMobil}
              width={150}
              height={150}
            />
            <p>Colgantes</p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              src="/assets/img/imagenjoyeria6.png"
              alt="Joyería de ocasión"
              className={styles.madridMobil}
              width={150}
              height={150}
            />
            <p>Pendientes</p>
          </div>
        </div>
        <div className={styles.bloqueDer}>
          <div className={styles.contenidoBloqueDer}>
            <p>
              Si necesitas <strong>ayuda</strong> o quieres conocer qué piezas
              disponemos en tu tienda más cercana, puedes llamarnos o enviarnos
              un Whatsapp. Te atenderemos de manera personalizada para
              resolverte cualquier duda que se te presente.
            </p>
            <p>
              En <strong>quickgold</strong> siempre buscamos facilidades para
              nuestros clientes. Llámanos a nuestro teléfono{" "}
              <strong>661 89 24 43</strong> y encuentra la joya que estás
              buscando.
            </p>
            <a
              className={styles.botonLlamar}
              href={`tel:${ciudad?.acf?.telefono}`}
              title="Teléfono"
            >
              Llama gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_tres;
