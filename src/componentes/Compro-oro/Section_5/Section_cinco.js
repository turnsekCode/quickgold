import React from "react";
import styles from "./sectionCinco.module.css";

const Section_cinco = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>
          Cómo vender oro en <span className={styles.linea}>quickgold</span>
        </h4>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>
            Comprobación<br></br> inicial
          </p>
          <p>
            La comprobación del oro sigue un procedimiento riguroso y claro,
            independientemente de que se trate de nuestro servicio de
            compraventa o empeño. Nuestras compañeras, por seguridad, realizarán
            una comprobación previa de las piezas, para ver el estado y
            procedencia de éstas. No importa si están rotas o desparejadas.
            Utilizaremos un imán y una comprobación visual con lupa para revisar
            los contrastes de la pieza y para determinar si es oro y su calidad.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Valoración de las piezas de oro</p>
          <p>
            Una vez comprobadas las joyas de oro, se ofrece un importe basado en
            la cotización actual del mercado. Si estás de acuerdo con éste, tan
            sólo necesitamos tu DNI u otra identificación en vigor para realizar
            la compra de las piezas. Recuerda que debes ser mayor de edad y
            presentar DNI en vigor.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>
            Tasación<br></br> profesional a la vista
          </p>
          <p>
            Una vez realizada la comprobación previa continuaremos con el
            proceso, utilizando herramientas homologadas. Todos los pasos que
            nuestras compañeras van efectuando se detallan al cliente, además,
            cada uno de ellos se realiza a la vista para que resulte un proceso
            totalmente transparente. Utilizaremos densímetros ácidos para
            determinar el quilataje de las piezas.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#4</p>
          <p>
            Pago inmediato del <br></br>valor fijado y acordado
          </p>
          <p>
            Te realizaremos el pago del importe acordado en el momento, en
            efectivo o por transferencia bancaria. Te garantizamos, durante todo
            el proceso de venta, el mejor servicio y atención para tu
            satisfacción. Siempre con la sonrisa que nos provoca realizar el
            trabajo que nos encanta poder ofrecerte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
