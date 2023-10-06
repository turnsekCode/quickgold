import React from "react";
import styles from "./bannerPromoUno.module.css";

const BannerPromoTiendas = ({ ciudad }) => {
  return (
    <div className={styles.contenedorBannerUno}>
      <img
        className={styles.bannerDesktop}
        src={ciudad?.acf?.foto_1}
        alt="Banner tienda"
      />
      <img
        className={styles.bannerMobil}
        src={ciudad?.acf?.foto_2}
        alt="Banner tienda mobil"
      />
    </div>
  );
};

export default BannerPromoTiendas;
