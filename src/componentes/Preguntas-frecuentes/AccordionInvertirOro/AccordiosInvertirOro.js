import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./accordionInvertirOro.module.css";
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

export default function AccordiosnInvertirOro() {
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
            ¿Tengo que reservar mi lingote?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Sí, necesitamos confirmar tu reserva ya que trabajamos con una
            fundidora que nos prepara los{" "}
            <strong>lingotes según demanda</strong>. Cada uno de ellos cuenta
            con certificado de garantía que acredita la pureza del mismo. Como
            nos encanta contar con tu satisfacción nos esforzamos por entregarte
            el lingote en menos de 72h. Acércate a nuestras oficinas o{" "}
            <a href="tel:900373629">
              <strong>llámanos al 900 373 629 para más información.</strong>
            </a>
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
            ¿Tengo que pagar IVA por comprar lingotes de oro?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            No, el oro de inversión está exento del cargo del IVA. Consulta{" "}
            <Link href="/invertir-en-oro">
              <strong>nuestro catálogo de lingotes de oro aquí</strong>
            </Link>
            .
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
          <p className={styles.tituloAccordion}>¿Por qué invertir en oro?</p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            El <strong>precio del oro</strong> está siempre en constante
            crecimiento por lo que si realizas una inversión en este metal
            precioso a posteriori la recuperarás y obtendrás, además, beneficio
            por ella. Si tienes cualquier duda, contáctanos.
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
            ¿Cómo comprar lingotes de oro en quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Para comprar tu <strong>lingote de oro</strong> en{" "}
            <strong>quickgold</strong>, necesitamos que realices tu reserva y
            conocer algunos datos. Para ello nos puedes llamar al 900 373 629 o
            al teléfono de tu tienda favorita que encontrarás en este
            <Link href="/contacto">
              <strong> directorio</strong>
            </Link>
            .
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
