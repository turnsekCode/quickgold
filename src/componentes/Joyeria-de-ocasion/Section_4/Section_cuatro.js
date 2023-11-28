import React from "react";
import styles from "./sectionCuatro.module.css";
import Image from "next/image";

const Section_cuatro = () => {
  return (
    <section>
      <a
        target="_blank"
        href="https://es.wallapop.com/app/search?keywords=quickgold&order_by=most_relevance&filters_source=quick_filters&longitude=-3.69196&latitude=40.41956"
      >
        <Image
          src="/assets/img/Banner-wallapop.png"
          alt="Joyería de ocasión"
          className={styles.ImagenBanner}
          width={1280}
          height={356}
          priority
        />
        <Image
          src="/assets/img/Banner-wallapop-joyeria-ocasion-mobil.png"
          alt="Joyería de ocasión"
          className={styles.ImagenBannerMobil}
          width={325}
          height={248}
          priority
        />
      </a>
    </section>
  );
};

export default Section_cuatro;
