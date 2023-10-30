import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./accordionEmpenos.module.css";
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

export default function AccordiosnEmpenos() {
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
            ¿Cuántas veces puedo renovar mi empeño?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Puedes renovar el contrato las veces que necesites hasta que puedas
            recuperar las piezas. Es necesario que te pongas en contacto
            directamente con la tienda con la que tienes formalizado el
            contrato.
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
            ¿Qué intereses tiene mi empeño en quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Disfruta, con quickgold, de 0% de interés durante el primer mes de
            empeños de joyas. Conoce el resto de condiciones de los mismos en tu
            tienda más cercana.
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
          <p className={styles.tituloAccordion}>¿Qué puedo empeñar?</p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Puedes empeñar <strong>joyas de oro o plata</strong> como:
            pendientes, pulseras, relojes, etc. Si tienes alguna duda, puedes
            llamar a tu tienda más cercana para que te expliquen, personalmente,
            cómo funcionan nuestros <strong>empeños de joyas</strong>.
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
            ¿Cuál es el proceso de tasación?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            La <strong>tasación de las joyas</strong> de empeños se realiza
            igual que con la compra de éstas. Se tasará, a la{" "}
            <strong>vista del cliente</strong>, los{" "}
            <strong>metales preciosos</strong>, facilitando toda la información
            requerida por éste. Una vez tasadas se fijará el precio según la
            cotización del metal en el momento y se realizará un contrato de
            empeños. Una vez firmado por ambas partes se entregará el dinero
            acordado y obtendrás toda la información necesaria para conocer cómo
            y cuándo se renueva el contrato y cómo lo podrás cancelar de la
            manera más sencilla y cómoda para ti.{" "}
            <Link href="/empeno-de-joyas/">
              <strong>
                Consulta toda la información sobre los empeños de quickgold
              </strong>
            </Link>
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
            ¿En cuántos meses puedo empeñar mis joyas?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            En <strong>quickgold</strong> te ofrecemos todas las facilidades
            necesarias para que puedas{" "}
            <strong>empeñar tus joyas en 1, 2 o 3 meses</strong>. Aprovecha
            nuestra promoción en empeños, con la que puedes dejarnos tus joyas
            de oro o plata{" "}
            <strong>sin pagar intereses durante el primer mes</strong>.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
