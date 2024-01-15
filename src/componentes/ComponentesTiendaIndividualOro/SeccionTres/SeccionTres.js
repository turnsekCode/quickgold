import React from "react";
import styles from "./seccionTres.module.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ResenasGoogle from "@/componentes/ResenasGoogle/ResenasGoogle";
import { useInView } from "react-intersection-observer";

const SeccionTres = ({ tiendaGoogle, ciudad }) => {
  const { ref: myRef, inView } = useInView();
  const diaSemana = tiendaGoogle?.result.opening_hours?.weekday_text[0];
  const diaSabado = tiendaGoogle?.result.opening_hours?.weekday_text[5];
  const diaDomingo = tiendaGoogle?.result.opening_hours?.weekday_text[6];
  const diaSemanaReemplazo = diaSemana?.replace("lunes:", "");
  const diaSabadoReemplazo = diaSabado?.replace("sábado:", "");
  const diaDomingoReemplazo = diaDomingo?.replace("domingo:", "");
  return (
    <aside className={styles.contenedorSeccionTres}>
      <section className={styles.contenedorInfoTienda}>
        <div className={styles.bloqueIzqInfoTienda}>
          <p className={styles.bloqueIzqTitulo}>Contacto</p>
          <p className={styles.bloqueIzqDireccion}>
            {tiendaGoogle?.result?.formatted_address}
          </p>

          <div className={styles.iconosTelefono}>
            <a
              title={`Llamar a Quickgold ${ciudad?.acf?.info_grupo?.ciudad_landing}`}
              href={`tel:${ciudad?.acf?.info_grupo?.telefono}`}
            >
              <span className={styles.bloqueIzqTel}>
                {ciudad?.acf?.info_grupo?.telefono}
              </span>
            </a>
            <div className={styles.contenedorIconos}>
              <a
                title={`Llamar a Quickgold ${ciudad?.acf?.info_grupo?.ciudad_landing}`}
                className={styles.telefonoIcon}
                href={`tel:${ciudad?.acf?.info_grupo?.telefono}`}
              >
                <PhoneInTalkIcon />
                <span className={styles.bloqueIzqTel}></span>
              </a>
              <a
                title="Escribir WhatsApp"
                className={styles.WhatsAppIcon}
                target="_blank"
                href={`https://wa.me/${ciudad?.acf?.info_grupo?.mobile?.replace(
                  /\s+/g,
                  ""
                )}`}
              >
                <WhatsAppIcon />
                {/*<span className={styles.bloqueIzqTel}>{ciudad?.acf?.mobile}</span>*/}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bloqueDerInfoTienda}>
          <p className={styles.bloqueDerTitulo}>Horario</p>
          <p className={styles.bloqueDerHorarioHabitual}>Horario Habitual</p>
          <p className={styles.bloqueDerdias}>Lunes a Viernes:</p>
          <p className={styles.bloqueDerHorario}>{diaSemanaReemplazo}</p>
          <p className={styles.bloqueDerSabado}>Sábado:</p>
          <p className={styles.bloqueDerSabadoHorario}>{diaSabadoReemplazo}</p>
          <p className={styles.bloqueDerDomingo}>Domingo:</p>
          <p className={styles.bloqueDerDomingoCerrado}>
            {diaDomingoReemplazo}
          </p>
        </div>
      </section>
      <section className={styles.contenedorMapa}>
        <iframe
          title="Mapa Tienda"
          src={ciudad?.acf?.info_grupo?.mapa_landing}
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </section>
      <section className={styles.contenedorResenasGoogle} ref={myRef}>
        {inView ? (
          <ResenasGoogle tiendaGoogle={tiendaGoogle} ciudad={ciudad} />
        ) : null}
      </section>
    </aside>
  );
};

export default SeccionTres;
