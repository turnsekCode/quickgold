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
          <a href="/" title="texto" target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src="https://quickgold.es/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={221}
              height={42}
            />
          </a>
        </figure>
        <div className={styles.contenedorEnlaces}>
          <div className={styles.enlaces}>
            <h4>servicios</h4>
            <ul>
              <li>
                <a title="texto" href="/">
                  Compra de oro{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Compra de divisas
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Compra de plata{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Compra de diamantes{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Oro de inversión{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h4>acerca de nosotros</h4>
            <ul>
              <li>
                <a title="texto" href="/">
                  Conoce Quickgold
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Localizador de tiendas{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Mapa del sitio{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Contacto{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Blog{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h4>únete a quickgold</h4>
            <ul>
              <li>
                <a title="texto" href="/">
                  Abrir un tienda Quickgold
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Dossier Franquicia{" "}
                </a>
              </li>
              <li>
                <a title="texto" href="/">
                  Trabaja con nosotros{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <p>Llama gratis al</p>
            <a href="te:900 373 629">900 373 629</a>
            <div className={styles.iconosRedes}>
              <a title="texto" href="/">
                <LinkedInIcon />
              </a>
              <a title="texto" className={styles.twitter} href="/">
                <TwitterIcon />
              </a>
              <a title="texto" href="/">
                <FacebookIcon />
              </a>
              <a title="texto" href="/">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.politicaPrivacidad}>
          <a title="texto" href="/">
            <p>
              <LockIcon /> política de privacidad
            </p>
          </a>
          <a title="texto" href="/">
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
