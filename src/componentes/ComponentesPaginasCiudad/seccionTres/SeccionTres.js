import React from "react";
import styles from "./seccionTres.module.css";
import Html from "@/componentes/ComponenteHTML/Html";
import HtmlGeneral from "@/componentes/ComponenteHTMLGeneral/HtmlGeneral";

const SeccionTres = ({ ciudad, general }) => {
  let html;
  if (ciudad?.acf?.html === "") {
    html = <HtmlGeneral general={general} />;
  } else if (general?.acf?.html === "") {
    html = <Html ciudad={ciudad} />;
  } else {
    html = <Html ciudad={ciudad} />;
  }
  /*return <article>{html}</article>;
  return <section>



  </section>;*/
  
};

export default SeccionTres;
