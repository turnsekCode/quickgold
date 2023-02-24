import React from "react";
import styles from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Footer = () => {
  return (
    <footer className={styles.contenedorFooter}>
      <div className={styles.contenedorContenidoFooter}>
        <figure>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={221}
              height={42}
            />
          </a>
        </figure>
        <div className={styles.contenedorEnlaces}>
          <div className={styles.enlaces}>
            <h5>servicios</h5>
            <ul>
              <a href="/">
                <li>Compra de oro</li>
              </a>
              <a href="/">
                <li>Compra de divisas</li>
              </a>
              <a href="/">
                <li>Compra de plata</li>
              </a>
              <a href="/">
                <li>Compra de diamantes</li>
              </a>
              <a href="/">
                <li>Oro de inversión</li>
              </a>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h5>acerca de nosotros</h5>
            <ul>
              <a href="/">
                <li>Conoce Quickgold</li>
              </a>
              <a href="/">
                <li>Preguntas frecuentes</li>
              </a>
              <a href="/">
                <li>Localizador de tiendas</li>
              </a>
              <a href="/">
                <li>Mapa del sitio</li>
              </a>
              <a href="/">
                <li>Contacto</li>
              </a>
              <a href="/">
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h5>únete a quickgold</h5>
            <ul>
              <a href="/">
                <li>Abrir un tienda Quickgold</li>
              </a>
              <a href="/">
                <li>Dossier Franquicia</li>
              </a>
              <a href="/">
                <li>Trabaja con nosotros</li>
              </a>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <p>Llama gratis al</p>
            <a href="te:900 373 629">900 373 629</a>
            <div className={styles.iconosRedes}>
              <a href="">
                <LinkedInIcon />
              </a>
              <a className={styles.twitter} href="">
                <TwitterIcon />
              </a>
              <a href="">
                <FacebookIcon />
              </a>
              <a href="">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.politicaPrivacidad}>
          <a href="">
            <p>
              <LockIcon /> política de privacidad
            </p>
          </a>
          <a href="">
            <p>
              <CheckCircleIcon />
              política de calidad
            </p>
          </a>
        </div>
        <hr className={styles.linea} />
        <p className={styles.registro}>
          © 2023 Quickgold | GRUNGO, S.L. - B53910071 - RONDA AUGUSTE Y LOUIS
          LUMIERE, 23, NAVE 9 46980 PATERNA, VALENCIA - central@quickgold.es -
          900 373 629 Registro Mercantil de Valencia , Tomo 9220, Libro 6503,
          Folio 215, Hoja V-140170, Inscripción 2ª.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
