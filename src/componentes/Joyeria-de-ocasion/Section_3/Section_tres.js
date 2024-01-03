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
            <a
              target="_blank"
              href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
            >
              <Image
                src="/assets/img/imagenjoyeria1.png"
                alt="Joyería de ocasión"
                className={styles.madridMobil}
                width={150}
                height={150}
              />
            </a>
            <p>Anillos</p>
          </div>
          <div className={styles.contenedorImagen}>
            <a
              target="_blank"
              href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
            >
              <Image
                src="/assets/img/imagenjoyeria2.png"
                alt="Joyería de ocasión"
                className={styles.madridMobil}
                width={150}
                height={150}
              />
            </a>
            <p>Pulseras</p>
          </div>
          <div className={styles.contenedorImagen}>
            <a
              target="_blank"
              href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
            >
              <Image
                src="/assets/img/imagenjoyeria3.png"
                alt="Joyería de ocasión"
                className={styles.madridMobil}
                width={150}
                height={150}
              />
            </a>
            <p>Gargantillas</p>
          </div>
          <div className={styles.contenedorImagen}>
            <a
              target="_blank"
              href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
            >
              <Image
                src="/assets/img/imagenjoyeria4.png"
                alt="Joyería de ocasión"
                className={styles.madridMobil}
                width={150}
                height={150}
              />
            </a>
            <p>Cadenas</p>
          </div>
          <div className={styles.contenedorImagen}>
            <a
              target="_blank"
              href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
            >
              <Image
                src="/assets/img/imagenjoyeria5.png"
                alt="Joyería de ocasión"
                className={styles.madridMobil}
                width={150}
                height={150}
              />
            </a>
            <p>Colgantes</p>
          </div>
          <div className={styles.contenedorImagen}>
            <a
              target="_blank"
              href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
            >
              <Image
                src="/assets/img/imagenjoyeria6.png"
                alt="Joyería de ocasión"
                className={styles.madridMobil}
                width={150}
                height={150}
              />
            </a>
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
              <strong>
                <a href="tel:661892443">661 89 24 43</a>
              </strong>{" "}
              y encuentra la joya que estás buscando.
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
