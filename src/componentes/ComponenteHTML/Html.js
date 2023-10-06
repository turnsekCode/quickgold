import React from "react";
import styles from "./html.module.css";

const Html = ({ ciudad }) => {
  return (
    <div
      className={styles.contenedorHtml}
      dangerouslySetInnerHTML={{ __html: ciudad?.acf?.html }}
    ></div>
  );
};

export default Html;
