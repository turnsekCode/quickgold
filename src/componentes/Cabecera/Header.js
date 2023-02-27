import React, { useState } from "react";
import styles from "./header.module.css";
//import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useScreenSize from "@/utilities/useScreenSize";
import MenuOrdenador from "../MenuOrdenador/MenuOrdenador";
import MenuMobil from "../MenuMobil/MenuMobil";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [menuAbieto, setMenuAbierto] = useState(false);
  const { width } = useScreenSize();
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
        <div className={styles.menuHamburquesa}>
          <MenuIcon onClick={() => setMenuAbierto(true)} />
        </div>
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
      {width <= 1190 ? (
        <MenuMobil menuAbieto={menuAbieto} setMenuAbierto={setMenuAbierto} />
      ) : (
        <MenuOrdenador />
      )}
    </header>
  );
};

export default Header;
