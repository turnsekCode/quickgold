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
  console.log(sticky);
  return (
    <header className={styles.header}>
      <nav className={styles.contenedorLogo}>
        <figure>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="/logo.png"
              alt="Quickgold Logo"
              className={styles.logo}
              width={221}
              height={42}
              priority
            />
          </a>
        </figure>
        <div className={styles.contenedorRedes}>
          <div className={styles.contenedorIconos}>
            <a className={styles.linkedin} href="/">
              <img
                src="/Vector12.png"
                alt="Quickgold Logo"
                className={styles.vector}
                width={221}
                height={42}
                priority
              />
              <LinkedInIcon />
            </a>
            <a href="/">
              <FacebookIcon />
            </a>
            <a href="/">
              <InstagramIcon />
            </a>
          </div>
          <div className={styles.botonLlamar}>
            <a href="tel:900 373 629">LLAMA GRATIS AL 900 373 629</a>
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
          <a href="/">
            <li>Compro Oro</li>
          </a>
          <a href="/">
            <li>Cambio de divisas</li>
          </a>
          <a href="/">
            <li>Empeño de joyas</li>
          </a>
          <a href="/">
            <li>Otros servicios</li>
            <KeyboardArrowDownIcon />
          </a>
          <a href="/">
            <li>Tiendas</li>
            <KeyboardArrowDownIcon />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
