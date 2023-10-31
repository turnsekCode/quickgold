import React from "react";
import styles from "./seccionUno.module.css";
//import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
//import Image from "next/image";
//import FsLightbox from "fslightbox-react";

const SeccionUno = ({ ciudad }) => {
  //const [toggler, setToggler] = useState(false);
  return (
    <header className={styles.contenedorSeccionUno}>
      <div className={styles.bloqueDer}>
        <h1>
          {/*ciudad?.acf?.titulo_del_h1*/}
          {/*<span className={styles.linea}>{ciudad?.acf?.ciudad_landing}</span>*/}
          Tiendas Quickgold en {ciudad?.acf?.ciudad_landing}<br/>
          <span className={styles.textoMenos}>Compro oro. Cambio de divisa. Empeñar oro.</span>
        </h1>
      </div>
      {/*<FsLightbox
        toggler={toggler}
        sources={[
          ciudad?.acf?.foto_1,
          ciudad?.acf?.foto_2,
          ciudad?.acf?.foto_3,
        ]}
      />*/}
    </header>
  );
};

export default SeccionUno;
