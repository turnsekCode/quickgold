import React from "react";
import styles from "./sectionTres.module.css";

const Section_tres = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>
          ¿Por qué invertir en oro en{" "}
          <span className={styles.linea}>quickgold?</span>
        </h4>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>Rápido y eficaz</p>
          <p>
            El oro, como valor refugio está claramente por encima de otro tipo
            de inversiones (tales como inmuebles). Además, la gestión es rápida
            y eficaz, puesto que el oro de inversión es fácilmente convertible
            al precio del momento.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Valor al alza</p>
          <p>
            El preciado metal está predestinado a subir fuertemente de precio en
            los próximos años debido a la escasez en la que está produciéndose.
            En quince años se ha multiplicado por diez su valor, por tanto se
            trata de un valor siempre al alza en un período de tiempo a
            medio-largo plazo. <br></br> Observando los precios del oro, se ve
            que son insensibles a los movimientos de otras inversiones
            alternativas como la inmobiliaria o las acciones. Dadas las
            condiciones de esos dos sectores, bolsa y sector inmobiliario, no
            caben dudas de la elección : oro. Los bonos públicos más seguros dan
            rendimientos negativos, las acciones también. El oro tuvo un
            espectacular año en 2019 (subida del 23 % ) y en 2020 alcanzó su
            máximo histórico en el mes de agosto. Para el inversor no hay activo
            que se le pueda comparar.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>Inversión segura</p>
          <p>
            El oro mantiene el poder adquisitivo relativo, no está
            correlacionado con ninguna otra divisa y, su carácter tangible, así
            como su liquidez, consiguen que invertir en este metal sea
            -históricamente y hasta hoy- la mejor opción contra la incertidumbre
            y la volatilidad. Son momentos de grandes cambios: sé conservador,
            protégete.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_tres;
