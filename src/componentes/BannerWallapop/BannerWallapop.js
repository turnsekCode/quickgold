import React from "react";
import styles from "./bannerWallapop.module.css";

const BannerWallapop = ({ ciudad }) => {
  return (
    <div className={styles.contenedorBannerWallapop}>
      <a target="_blank" href={ciudad?.acf?.url_del_banner_wallapop}>
        <img
          loading="lazy"
          className={styles.bannerWallapopDesktop}
          src={ciudad?.acf?.imagen_del_banner_wallapop}
          alt="Banner tienda"
        />
      </a>
      {/* <img
        className={styles.bannerMobil}
        src={ciudad?.acf?.foto_2}
        alt="Banner tienda mobil"
  />*/}
    </div>
  );
};

export default BannerWallapop;
