import React from "react";
import styles from "./header.module.css";
//import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useSticky from "../../utilities/useSticky";

const Header = () => {
  const { sticky, stickyRef } = useSticky();

  return (
    <header className={styles.header}>
      <nav className={styles.contenedorLogo}>
        <figure>
          <a href="/" title="texto" target="_blank" rel="noopener noreferrer">
            <img
              src="https://quickgold.es/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={163}
              height={30}
            />
          </a>
        </figure>
        <div className={styles.contenedorRedes}>
          <div className={styles.contenedorIconos}>
            <a className={styles.linkedin} href="/" title="texto">
              <img
                src="https://quickgold.es/Vector12.png"
                alt="Quickgold Logo"
                className={styles.vector}
              />
              <LinkedInIcon />
            </a>
            <a href="/" title="texto">
              <FacebookIcon />
            </a>
            <a href="/" title="texto">
              <InstagramIcon />
            </a>
          </div>
          <div className={styles.botonLlamar}>
            <a href="tel:900 373 629" title="texto">
              LLAMA GRATIS AL 900 373 629
            </a>
          </div>
        </div>
      </nav>
      <nav
        ref={stickyRef}
        className={
          sticky
            ? `${styles.contenedorMenuSticky} ${styles.headersticky}`
            : `${styles.contenedorMenu}`
        }
      >
        <ul className={styles.contenedorMenu}>
          <li>
            <a href="/" title="texto">
              Compro Oro
            </a>
          </li>

          <li>
            <a href="/" title="texto">
              Cambio de divisas
            </a>
          </li>

          <li>
            <a href="/" title="texto">
              Empeño de joyas
            </a>
          </li>

          <li>
            <a href="/" title="texto">
              Otros servicios <KeyboardArrowDownIcon />
            </a>
          </li>

          <li>
            <a href="/" title="texto">
              Tiendas <KeyboardArrowDownIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
