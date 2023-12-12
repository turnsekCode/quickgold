import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./accordionVenderMetales.module.css";
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

export default function AccordiosnVenderMetales() {
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
          <p className={styles.tituloAccordion}>¿Compramos monedas antiguas?</p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Compramos todo tipo de monedas de oro y plata, no importa el año o
            estado de conservación. Las monedas que compramos son aquellas que
            son de oro o plata. Las tasamos por su peso en el metal.
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
            ¿Qué metales preciosos puedo vender?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            En <strong>quickgold compramos oro y plata</strong>. De momento no
            compramos otros metales como el platino o el acero. Si no sabes de
            qué metales están hechas tus joyas, nos las puedes traer a la tienda
            en cualquier momento. Estaremos encantados de atenderte.
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
            ¿Es necesario pedir cita previa para vender metales?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Para vender oro o plata no es necesario que pidas cita previa.
            Puedes acudir directamente a la tienda más cercana y vender al
            momento tus joyas. Si necesitas vender o empeñar brillantes, sí
            necesitamos que nos confirmes tu asistencia para que nuestro
            gemólogo te pueda tasar los diamantes. Puedes crear tu cita llamando
            a tienda o a nuestro teléfono gratuito 900 373 629.
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
            ¿Cómo se valoran las piezas de plata?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            La tasación, como con cualquier otro metal, se realizará a la vista
            mediante diferentes comprobaciones para determinar la pureza de los
            objetos de plata que quieras vender. Se fijará el precio atendiendo
            a la cotización en bolsa del metal en el momento y se procederá a
            pagar al cliente el valor de su venta.
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
            ¿Cómo vendo oro en quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Para vender oro sólo necesitas acudir a tu tienda quickgold más
            cercana con tus joyas, ser mayor de edad y facilitarnos tu
            identificación personal en vigor. Nuestras compañeras tasarán a la
            vista, mediante diferentes comprobaciones, el metal. Según la
            cotización actual del oro valorarán tus piezas y si estás de acuerdo
            con el precio fijado se procederá a formalizar un acuerdo de
            compraventa. Obtendrás al momento tu dinero en efectivo o por
            transferencia según prefieras. Aprovecha y trae todas las piezas que
            quieras vender, cuantos más gramos, mejor precio obtendrás.
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
            ¿Qué tipo de oro puedo vender en quickgold?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            En quickgold puedes vender oro amarillo o blanco desde 14K hasta
            24K. Puedes consultarnos en cualquier momento el precio de tus joyas
            visitándonos en tienda o llamándonos al 900 373 629. Mediante la
            tasación de las mismas junto con el precio del oro del momento,
            valoraremos tus piezas.
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
            ¿Puedo vender joyas bañadas en oro?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            En quickgold compramos piezas de oro con una pureza mínima de 14K,
            por lo que no aceptamos joyas bañadas en oro, ya que su relleno no
            lo compone este metal.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
