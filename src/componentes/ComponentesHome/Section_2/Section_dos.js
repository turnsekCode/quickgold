import React from "react";
import styles from "./section_dos.module.css";
import Image from "next/image";
import Link from "next/link";

const Section_dos = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.bloqueSuperior}>
        <h3>Nuestros Servicios</h3>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.bloqueInferiorCard}>
          <div className={styles.bloqueInferiorImagen}>
            <Link href={"/compro-oro"}>
              <Image
                src="/assets/img/imagenSectionDosHome1.png"
                alt="VENDER ORO"
                className={styles.imagenHome}
                width={257}
                height={257}
              />
            </Link>
          </div>
          <div className={styles.bloqueInferiorTexto}>
            <Link href={"/compro-oro"}>
              <p>
                <strong>VENDER ORO</strong>
              </p>
            </Link>
            <p>
              En quickgold encontrarás nuestro principal servicio de Compro Oro,
              con el que tasamos todas las piezas a la vista para garantizarte
              una operación segura y un precio justo para todo el oro que
              quieras vender. No importa si están desemparejadas o rotas.Accede
              a toda la información para vender oro.
            </p>
          </div>
        </div>
        <div className={styles.bloqueInferiorCard}>
          <div className={styles.bloqueInferiorImagen}>
            <Link href={"/empeno-de-joyas"}>
              <Image
                src="/assets/img/imagenSectionDosHome2.png"
                alt="EMPEÑAR JOYAS
"
                className={styles.imagenHome}
                width={257}
                height={257}
              />
            </Link>
          </div>
          <div className={styles.bloqueInferiorTexto}>
            <Link href={"/empeno-de-joyas"}>
              <p>
                <strong>EMPEÑAR JOYAS</strong>
              </p>
            </Link>
            <p>
              Tráenos tus joyas y empéñalas al momento con las mejores
              condiciones adaptadas a ti. Podrás recuperarlas cómodamente y con
              total facilidad. Disfruta de empeños sin intereses durante el
              primer mes y obtén el dinero que necesitas al instante.Infórmate
              aquí de cómo tasamos tus joyas.
            </p>
          </div>
        </div>
        <div className={styles.bloqueInferiorCard}>
          <div className={styles.bloqueInferiorImagen}>
            <Link href={"/cambio-divisas"}>
              <Image
                src="/assets/img/imagenSectionDosHome3.png"
                alt="CAMBIAR DIVISA"
                className={styles.imagenHome}
                width={257}
                height={257}
              />
            </Link>
          </div>
          <div className={styles.bloqueInferiorTexto}>
            <Link href={"/cambio-divisas"}>
              <p>
                <strong>CAMBIAR DIVISA</strong>
              </p>
            </Link>
            <p>
              Realiza en quickgold tu cambio de moneda extranjera sin comisiones
              para siempre. Más de 25 divisas disponibles al instante para que
              puedas fijar tu precio de cambio. Consulta la cotización de la
              moneda que quieras con nuestro conversor online.Infórmate sobre
              nuestro servicio de cambio de divisa.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bloqueServicios}>
        <div className={styles.cardServicio}>
          <Link href={"/compro-plata"}>
            <Image
              src="/assets/img/imagenSectionDosHome4.png"
              alt="COMPRA DE PLATA"
              className={styles.imagenHome}
              width={257}
              height={257}
            />
            <p>COMPRA DE PLATA</p>
          </Link>
        </div>
        <div className={styles.cardServicio}>
          <Link href={"/joyeria-de-ocasion"}>
            <Image
              src="/assets/img/imagenSectionDosHome5.png"
              alt="JOYERÍA DE OCASIÓN"
              className={styles.imagenHome}
              width={257}
              height={257}
            />
            <p>JOYERÍA DE OCASIÓN</p>
          </Link>
        </div>
        <div className={styles.cardServicio}>
          <Link href={"/invertir-en-oro"}>
            <Image
              src="/assets/img/imagenSectionDosHome6.png"
              alt="ORO DE INVERSIÓN
"
              className={styles.imagenHome}
              width={257}
              height={257}
            />
            <p>ORO DE INVERSIÓN</p>
          </Link>
        </div>
        <div className={styles.cardServicio}>
          <Link href={"/vender-diamantes"}>
            <Image
              src="/assets/img/imagenSectionDosHome7.png"
              alt="COMPRA DE DIAMANTES"
              className={styles.imagenHome}
              width={257}
              height={257}
            />
            <p>COMPRA DE DIAMANTES</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
