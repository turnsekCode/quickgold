import React from "react";
import styles from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.contenedorFooter}>
      <div className={styles.contenedorContenidoFooter}>
        <figure>
          <a href="/" title="texto" rel="noopener noreferrer">
            <Image
              src="/assets/img/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={221}
              height={42}
            />
          </a>
        </figure>
        <div className={styles.contenedorEnlaces}>
          <div className={styles.enlaces}>
            <h3>servicios</h3>
            <ul>
              <li>
                <a title="Ir a compro oro" href="/compro-oro">
                  Compra de oro
                </a>
              </li>
              <li>
                <a title="Ir a compra divisa" href="/cambio-divisas">
                  Compra de divisas
                </a>
              </li>
              <li>
                <a title="Ir a compra plata" href="/compro-plata">
                  Compra de plata
                </a>
              </li>
              <li>
                <a title="Ir a compra diamantes" href="/vender-diamantes">
                  Compra de diamantes
                </a>
              </li>
              <li>
                <a title="Ir oro de inversión" href="/invertir-en-oro">
                  Oro de inversión
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h3>acerca de nosotros</h3>
            <ul>
              <li>
                <a title="Ir a conoce quickgold" href="/expansion">
                  Conoce Quickgold
                </a>
              </li>
              {/*<li>
                <a
                  title="Ir a preguntas frecuentes"
                  href="https://quickgold.es/preguntas-frecuentes"
                >
                  Preguntas frecuentes
                </a>
  </li>*/}
              <li>
                <a title="Ir a localizador tiendas" href="/tiendas">
                  Localizador de tiendas
                </a>
              </li>
              <li>
                <a title="Ir a mapa del sitio" href="/tiendas">
                  Mapa del sitio
                </a>
              </li>
              <li>
                <a title="Ir a contacto" href="/contacto">
                  Contacto
                </a>
              </li>
              {/*<li>
                <a title="Ir a blog" href="https://quickgold.es/blog">
                  Blog
                </a>
  </li>*/}
            </ul>
          </div>
          <div className={styles.enlaces}>
            <h3>únete a quickgold</h3>
            <ul>
              <li>
                <a title="Ir a abrir tienda quickgold" href="/expansion">
                  Abrir un tienda Quickgold
                </a>
              </li>
              {/*<li>
                <a title="texto" href="/">
                  Dossier Franquicia
                </a>
</li>*/}
              <li>
                <a
                  title="Ir a trabaja con nosotros"
                  href="/trabaja-con-nosotros"
                >
                  Trabaja con nosotros
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.enlaces}>
            <p>Llama gratis al</p>
            <a title="Teléfono" href="te:900373629">
              900 373 629
            </a>
            <div className={styles.iconosRedes}>
              <a
                target="_blank"
                title="Linkedin"
                href="https://www.linkedin.com/company/quickgold"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                title="Twitter"
                className={styles.twitter}
                href="https://twitter.com/quickgoldqg"
              >
                <TwitterIcon />
              </a>
              <a
                title="Facebook"
                href="https://www.facebook.com/quickgold.es/"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                title="Instagram"
                href="https://www.instagram.com/quickgold.es/"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.politicaPrivacidad}>
          <a title="política de privacidad" href="/politica-de-privacidad">
            <p>
              <LockIcon /> política de privacidad
            </p>
          </a>
          <a
            target="_blank"
            title="política de calidad"
            href="https://quickgold.es/doc/politica-calidad-quickgold.pdf"
          >
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
