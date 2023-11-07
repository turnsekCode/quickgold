import React from "react";
import styles from "./htmlGeneral.module.css";

const HtmlGeneral = ({ general }) => {
  return (
    <section
      className={styles.contenedorHtml}
      dangerouslySetInnerHTML={{ __html: general?.acf?.html }}
    >
    </section>
  );
};

export default HtmlGeneral;
