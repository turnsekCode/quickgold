import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./accordionCambioDivisa.module.css";
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

export default function AccordiosnCambioDivisa() {
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
            ¿Hay límite para cambiar divisa?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            En quickgold puedes cambiar cualquier cantidad de dinero, no tenemos
            una cantidad mínima. Si necesitas cambiar grandes cantidades, avisa
            a tu tienda para que prepare el efectivo y lo tenga todo listo para
            cuando nos visites. Necesitaremos documentación adicional para
            cantidades grandes de divisa. Puedes consultar toda la información
            relacionada en nuestro apartado del servicio:{" "}
            <a href="https://quickgold.es/cambio-divisas">
              <strong>cambio de divisa</strong>
            </a>
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
          <p className={styles.tituloAccordion}>¿Compramos monedas?</p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            No, de momento solo aceptamos billetes de divisa extranjera. Sí
            entregamos monedas en euros.
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
            ¿Es necesario reservar la divisa?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Si lo que necesitas es cambiar moneda extranjera a euros lo puedes
            hacer al momento sin necesidad de que realices una reserva. Si, por
            el contrario, quieres comprar moneda extranjera con euros,
            necesitaremos que te pongas en contacto con la tienda que puede
            realizar esta operación, y solicites tu cambio. Comprobaremos stock
            y te fijaremos el precio para que obtengas al mejor precio y cuánto
            antes tu divisa. En cualquiera de los casos, si se trata de
            cantidades grandes para cambiar, necesitamos que nos llames y nos
            informes de la operación que quieras realizar. Te informaremos y
            resolveremos todas tus dudas en el 900 373 629 o en el teléfono de
            tu tienda quickgold.
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
            ¿Necesito algún documento para cambiar divisa?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Para cambiar divisa es necesario que seas{" "}
            <strong>mayor de edad</strong> y que aportes tu documentación
            personal (<strong>DNI, NIE o Pasaporte</strong>) en vigor. Además,
            para cantidades grandes necesitamos un documento que acredite la
            procedencia de fondos y tu cargo profesional. Si fuera necesario por
            falta de efectivo, necesitaremos también un número de cuenta para
            abonarte el importe de tu cambio. Si tienes cualquier duda puedes
            visitar{" "}
            <a href="https://quickgold.es/cambio-divisas">
              <strong>nuestra página de servicio de cambio de divisa</strong>
            </a>
            o bien
            <strong>
              llamarnos gratuitamente al{" "}
              <a href="tel.900 373 629">900 373 629</a>
            </strong>
            , estaremos encantados de ayudarte.
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
            ¿Puedo comprar moneda extranjera?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            De momento puedes comprar moneda extranjera en algunas de{" "}
            <strong>nuestras oficinas</strong>. Tienes disponibles más de 30
            divisas diferentes. Estas son las tiendas en las que puedes realizar
            tu cambio de euros a divisa extranjera.
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
            ¿Qué comisión se paga en quickgold por el cambio de divisa?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            En quickgold cualquier cambio de divisa tiene{" "}
            <strong>0% comisiones</strong>, para siempre.
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
            ¿Por qué el precio de la divisa es diferente a la calculadora de
            Google?
          </p>
        </AccordionSummary>
        <AccordionDetails className={styles.contenerdorContenidoAccordion}>
          <p className={styles.contenidoAccordion}>
            Google nos ofrece la posibilidad de conocer el{" "}
            <strong>precio de cotización</strong>
            de la moneda que te interese, es decir, vemos el{" "}
            <strong>precio de bolsa</strong> de la divisa en el momento que
            realizas la búsqueda. Sobre ese precio las oficinas de cambio
            trabajamos unos márgenes. Cuánto más se acerque nuestro precio al
            que marca el de cotización en bolsa, mejor cambio recibirás. En
            <strong> quickgold</strong> te aseguramos{" "}
            <strong>la mejor tasa de cambio para tu moneda</strong>.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
