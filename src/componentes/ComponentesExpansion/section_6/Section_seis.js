import React from "react";
import styles from "./section_seis.module.css";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

const Section_seis = () => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <h5>QUIERO ABRIR UNA TIENDA QUICKGOLD</h5>
      <div className={styles.contenedorBloques}>
        <div className={styles.bloqueIzq}>
          <p className={styles.bloqueIzqTitulo}>MAXIMIZAR FACTURACIÓN</p>
          <p className={styles.bloqueIzqTexto}>
            Amplio abanico de líneas de negocio. Óptima gestión del negocio.
            Correcta gestión de datos comerciales. Excelente atención al
            cliente.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <p className={styles.bloqueIzqTitulo}>MINIMIZAR GASTOS</p>
          <p className={styles.bloqueIzqTexto}>
            Control del gasto de publicidad y máximo rendimiento del mismo. Las
            nuevas líneas de negocio no originan gastos extra. Optimización de
            medios y recursos.
          </p>
        </div>
      </div>
      <div className={styles.contenedorBotonDossier}>
        <a target="_blank" href="doc/Dossier2020-Quickgold.pdf">
          DESCARGAR DOSSIER <DownloadForOfflineIcon />
        </a>
      </div>
    </section>
  );
};

export default Section_seis;
