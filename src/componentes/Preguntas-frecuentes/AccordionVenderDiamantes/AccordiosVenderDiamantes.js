import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./accordionVenderDiamantes.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import Link from "next/link";

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

export default function AccordiosnVenderDiamantes() {
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
          <p className={styles.tituloAccordion}>¿Qué diamantes aceptamos?</p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Compramos brillantes de talla moderna, catalogados con color en
            escala H ó I, con una pureza superior a SI3 y quilataje superior a
            0,10ct. Para saber más detalles sobre el proceso de tasación y
            características de los diferentes diamantes, visita nuestra sección
            del servicio de{" "}
            <Link href="/vender-diamantes">
              <strong>compra de diamantes</strong>
            </Link>
            .
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
            ¿Cómo vender diamantes en quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Para que podamos tasar tu brillante necesitamos que concretes una
            <strong>cita previa con tu tienda más cercana</strong>. Nuestro
            experto gemólogo realizará unas comprobaciones detalladas y a la
            vista que ayudarán a conocer las características del diamante y
            saber el <strong>precio de compra</strong> del mismo.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
