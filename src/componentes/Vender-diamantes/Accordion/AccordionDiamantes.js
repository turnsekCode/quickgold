import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./accordionDiamantes.module.css";
import Image from "next/image";

export default function AccordionDiamantes() {
  return (
    <div className={styles.contenedorAccordion}>
      <Accordion className={styles.contenedorContenidoAccordion}>
        <AccordionSummary
          className={styles.fondoTitulo}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <p>Talla brillante moderna</p>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Image
            src="/assets/img/diamanteBrillante.png"
            alt="Compra de diamantes"
            className={styles.imagenDiamantesBrillante}
            width={82}
            height={98}
          />
          <p className={styles.textoContenido}>
            Según el IGE (Instituto de Gemología Español): La talla brillante
            moderna se estructuró definitivamente después de la publicación en
            1919 de un estudio teórico realizado por Marcel Tolkowsky. En él se
            fijaban los ángulos correctos que había que dar a las facetas de la
            corona y de la culata con respecto al plano del filetín, y las
            proporciones adecuadas para que un diamante de esa talla presentara
            el máximo brillo y dispersión. Como la casi totalidad de las tallas,
            la talla brillante está constituida por dos partes principales, una
            superior denominada corona y otra inferior llamada culata. Ambas
            están separadas, o si se prefiere unidas, por una banda irregular
            llamada filetín, el cual puede quedar en su estado natural o ser
            pulido o facetado. El vértice de la culata por lo general se termina
            en punta. A veces puede estar ligeramente truncado, sobre todo en
            piedras grandes, tallándole una diminuta faceta que se denomina
            “culet”, con lo que el vértice queda mejor protegido de posibles
            golpes.
          </p>
          <iframe
            loading="lazy"
            className={styles.iframeVideo}
            src="http://players.brightcove.net/1799386198001/B1rweqatG_default/index.html?videoId=2890384735001"
          ></iframe>
          <p>
            <strong>
              {" "}
              Guía de tallas de GIA{" "}
              <a
                href="https://4cs.gia.edu/en-us/blog/gia-diamond-grading-scales/"
                target="_blank"
              >
                (Gemological Institute of America Inc.)
              </a>
            </strong>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.contenedorContenidoAccordion}>
        <AccordionSummary
          className={styles.fondoTitulo}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Color</p>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <p className={styles.textoContenido}>
            En los diamantes sin color, las diferencias sutiles en el color
            pueden hacer que el valor del brillante cambie considerablemente.
            Cuanto más se acerque a un diamante incoloro, mayor es su precio por
            quilate. Esta clasificación por color se realiza en condiciones
            controladas comparándolos con las llamadas “piedras muestras”.
          </p>
          <Image
            src="/assets/img/diamantes-guia-color-.jpg"
            alt="Compra de diamantes"
            className={styles.imagenDiamantes}
            width={6000}
            height={240}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.contenedorContenidoAccordion}>
        <AccordionSummary
          className={styles.fondoTitulo}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p>Claridad</p>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <p className={styles.textoContenido}>
            Un diamante tiene características internas, llamadas inclusiones e
            irregularidades en la superficie, llamadas imperfecciones. A esta
            combinación se le llama claridad. Cuanto menos inclusiones y manchas
            tengan los brillantes, mayor será su valor. La claridad ayuda a
            distinguir imitaciones de diamantes reales y está directamente
            relacionada con el concepto de rareza. Los diamantes sin defectos
            son los menos vistos.
          </p>
          <Image
            src="/assets/img/diamantes-claridad.jpg"
            alt="Compra de diamantes"
            className={styles.imagenDiamantes}
            width={1000}
            height={280}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.contenedorContenidoAccordion}>
        <AccordionSummary
          className={styles.fondoTitulo}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <p>Corte (Talla)</p>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <p className={styles.textoContenido}>
            Un brillante terminado es deslumbrante y depende de la habilidad y
            del cuidado puesto por el artesano. Cuando un diamante interactúa
            con la luz, cada ángulo, cada faceta afecta a la cantidad de luz
            devuelta al ojo, por eso es muy importante la proporción que tenga
            éste. Un diamante bien cortado muestra la belleza que los
            consumidores esperan ver en él. El brillo, el color y las áreas de
            luz y oscuridad son los aspectos esenciales que nos aportan
            información sobre su belleza. Por regla general, cuanto mayor sea el
            grado de corte, más brillante será el diamante. El término corte
            también describe la forma que tiene el brillante. Los más conocidos
            son el corte marquesa, princesa, pera, óvalo, corazón y esmeralda.
          </p>
          <Image
            src="/assets/img/tallas-diamantes.jpg"
            alt="Compra de diamantes"
            className={styles.imagenDiamantes}
            width={1000}
            height={320}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.contenedorContenidoAccordion}>
        <AccordionSummary
          className={styles.fondoTitulo}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <p>Peso en quilates</p>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <p className={styles.textoContenido}>
            Para pesar un diamante se necesita mucha precisión. Los pesos de
            éstos se expresan en quilates (ct), que en gemología es una medida
            de masa y equivale a 0,2 gramos. Los diamantes grandes son más raros
            que los diamantes pequeños. Por lo tanto, es un factor muy
            importante para determinar su valor.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
