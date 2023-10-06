import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./accordion.module.css";
import CalculadoraOro from "../ConversorPlata/CalculadoraOro";
import ConversorDivisa from "../ConversorDivisa/ConversorDivisa";
import BloquePrecioPlata from "../ConversorPlata/BloquePrecioPlata";
import TablaLingotes from "../InvertirEnOro/Tabla2Lingotes";
import Empenos from "../BloqueInfo/Empenos";

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
    expandIcon={
      <ArrowDropDownIcon
        sx={{
          fontSize: "2.5rem",
          color: "#fff",
          background: "#061B2D",
          borderRadius: "50%",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded svg": {
    transform: "rotate(360deg)",
    background: "#0692D0",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function AccordionServicios({ ciudad }) {
  const [expanded, setExpanded] = React.useState("panel3");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className={styles.contenedorAccordion}>
      <Accordion
        style={{
          background: "#0F2D45",
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px 0 20px",
        }}
        className={styles.contendorAccordion3}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          style={{
            padding: "0",
            borderBottom: "2px solid #fff",
          }}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <div className={styles.contenedorTituloServicio}>
            <h2
              className={
                expanded === "panel3"
                  ? `${styles.tituloServicio} ${styles.accordionActivo}`
                  : `${styles.tituloServicio}`
              }
            >
              Cambio de Divisas
            </h2>
            <p className={styles.subTituloServicio}>
              Descubre el valor de la moneda que te interesa.
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <ConversorDivisa ciudad={ciudad} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          background: "#0F2D45",
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px 0 20px",
        }}
        className={styles.contendorAccordion1}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          style={{
            padding: "0",
            borderBottom: "2px solid #fff",
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <div className={styles.contenedorTituloServicio}>
            {" "}
            <h2
              className={
                expanded === "panel1"
                  ? `${styles.tituloServicio} ${styles.accordionActivo}`
                  : `${styles.tituloServicio}`
              }
            >
              Precio del Oro
            </h2>
            <p className={styles.subTituloServicio}>Conoce el precio del oro</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <CalculadoraOro ciudad={ciudad} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          background: "#0F2D45",
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px 0 20px",
        }}
        className={styles.contendorAccordion2}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          style={{
            padding: "0",
            borderBottom: "2px solid #fff",
          }}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <div className={styles.contenedorTituloServicio}>
            {" "}
            <h2
              className={
                expanded === "panel2"
                  ? `${styles.tituloServicio} ${styles.accordionActivo}`
                  : `${styles.tituloServicio}`
              }
            >
              Precio de la Plata
            </h2>
            <p className={styles.subTituloServicio}>
              ¿Cuánto cuesta ahora la plata?
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <BloquePrecioPlata ciudad={ciudad} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          background: "#0F2D45",
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px 0 20px",
        }}
        className={styles.contendorAccordion4}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          style={{
            padding: "0",
            borderBottom: "2px solid #fff",
          }}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <div className={styles.contenedorTituloServicio}>
            {" "}
            <h2
              className={
                expanded === "panel4"
                  ? `${styles.tituloServicio} ${styles.accordionActivo}`
                  : `${styles.tituloServicio}`
              }
            >
              Empeño de Joyas
            </h2>
            <p className={styles.subTituloServicio}>
              Calcula cuánto puedes obtener por tu joya.
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <Empenos ciudad={ciudad} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          background: "#0F2D45",
          borderRadius: "8px",
          border: "none",
          padding: "10px 20px 0 20px",
        }}
        className={styles.contendorAccordion5}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          style={{
            padding: "0",
            //borderBottom: "2px solid #fff",
          }}
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <div className={styles.contenedorTituloServicio}>
            {" "}
            <h2
              className={
                expanded === "panel5"
                  ? `${styles.tituloServicio} ${styles.accordionActivo}`
                  : `${styles.tituloServicio}`
              }
            >
              Invertir en Oro
            </h2>
            <p className={styles.subTituloServicio}>
              Da el paso e invierte en el oro
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ border: "none" }} className={styles.details}>
          <TablaLingotes ciudad={ciudad} />
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
