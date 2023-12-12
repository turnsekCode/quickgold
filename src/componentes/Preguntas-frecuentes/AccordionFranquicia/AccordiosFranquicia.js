import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./accordionFranquicia.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<HorizontalRuleRoundedIcon sx={{ display: "none" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordiosnFranquicia() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          {expanded == "panel1" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿En qué se diferencia la franquicia quickgold de otras franquicias
            compro oro?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Además de la dilatada experiencia y grandes resultados en el sector,
            la diferencia principal radica en una central formada por excelentes
            profesionales en cada uno de sus departamentos, formación,
            administración, marketing, social media, etc. Trabajando para que tu
            negocio funcione de manera correcta. Esto se suma al hecho de tener
            establecimientos propios que nos hacen estar al corriente de forma
            diaria de todo lo que acontece en el sector.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          {" "}
          {expanded == "panel2" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Qué perfil de trabajador se necesita?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Desde la central de quickgold, os asesoramos y ayudamos en el
            proceso de contratación del personal, también os indicamos cual es
            el perfil idóneo para trabajar en nuestras tiendas.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          {" "}
          {expanded == "panel3" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Cómo aprenderé a tasar las piezas de oro y plata?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Tanto el franquiciado como los empleados que vayan a trabajar en el
            establecimiento, recibirán una formación completa sobre todos los
            procesos de comprobación y tasación de piezas, el curso incluye
            prácticas en nuestros establecimientos propios.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          {" "}
          {expanded == "panel4" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Qué licencias o permisos necesito para abrir un establecimiento
            quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Durante todo proceso de apertura del establecimiento te acompañamos,
            asesoramos e informamos de todas las licencias y permisos
            necesarios.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          {" "}
          {expanded == "panel5" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Cuánto tiempo se tarda en abrir un quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Una vez tengamos firmado el local, el proceso de apertura depende de
            la ciudad elegida y los permisos que sean necesarios, como media el
            proceso completo dura de 45 a 60 días aproximadamente.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel6d-content"
          id="panel6d-header"
        >
          {" "}
          {expanded == "panel6" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Me ayudan con la reforma del local?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Con la firma del contrato de franquicia, te haremos entrega de un
            manual constructivo para que tengas toda la información necesaria
            para instalar un establecimiento quickgold, además, te asesoramos y
            facilitamos proveedores, si los necesitas, para la reforma del
            local.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel7d-content"
          id="panel7d-header"
        >
          {" "}
          {expanded == "panel7" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Tendrá mi tienda zona de exclusividad?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Todos los establecimientos de quickgold disponen de una zona de
            exclusividad, esta zona se delimita con la firma del acuerdo previo
            y se consolida de forma definitiva, con la firma del local y el
            contrato de franquicia.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel8d-content"
          id="panel8d-header"
        >
          {" "}
          {expanded == "panel8" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Cuántos metros tiene que tener el local?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Los metros óptimos para un establecimiento quickgold son de 30 a 40
            m2, no obstante, a partir de 20 m2 podemos valorar la instalación
            del mismo.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel9d-content"
          id="panel9d-header"
        >
          {" "}
          {expanded == "panel9" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Me ayudan con la búsqueda del local?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Una vez elegida la zona donde se ubicará el establecimiento
            quickgold, te ayudaremos y asesoraremos en la búsqueda del local. Un
            integrante del departamento de Expansión se desplazará a la
            ubicación elegida para comprobar «in situ» que tanto la zona, como
            el local elegido están dentro de los parámetros adecuados para abrir
            un establecimiento quickgold.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.contenedorAccordion}
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary
          className={styles.contenedorTituloAccordion}
          aria-controls="panel10d-content"
          id="panel10d-header"
        >
          {" "}
          {expanded == "panel10" ? (
            <HorizontalRuleRoundedIcon />
          ) : (
            <AddRoundedIcon />
          )}
          <p className={styles.tituloAccordion}>
            ¿Puedo abrir un establecimiento quickgold en la ciudad que quiera?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Las poblaciones idóneas son aquellas que tienen 90.000 habitantes o
            más, dentro de esas ciudades y en función de su demografía, hacemos
            una previsión de las aperturas de establecimientos que podemos
            tener.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
