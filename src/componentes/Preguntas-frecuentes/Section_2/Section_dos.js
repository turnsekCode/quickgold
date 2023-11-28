import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./sectionDos.module.css";
import AccordiosnFranquicia from "../AccordionFranquicia/AccordiosFranquicia";
import AccordiosnVenderMetales from "../AccordionVenderMetales/AccordiosVenderMetales";
import AccordiosnCambioDivisa from "../AccordionCambioDivisa/AccordiosCambioDivisa";
import AccordiosnEmpenos from "../AccordionEmpenos/AccordiosEmpenos";
import AccordiosnInvertirOro from "../AccordionInvertirOro/AccordiosInvertirOro";
import AccordiosnVenderDiamantes from "../AccordionVenderDiamantes/AccordiosVenderDiamantes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index ? (
        <Box sx={{ p: 3 }}>
          <article>{children}</article>
        </Box>
      ) : null}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Section_dos({ ciudad }) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.box}>
      <Box
        sx={{
          //flexGrow: 1,
          //bgcolor: "background.paper",
          display: "flex",
          height: "auto",
        }}
      >
        <Tabs
          className={styles.bloqueIzq}
          orientation="vertical"
          //variant="scrollable"
          value={value}
          onChange={handleChange}
          //aria-label="Vertical tabs example"
          //sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {" "}
          <p className={styles.bloqueIzqTexto}>Tabla de contenidos</p>
          <Tab
            className={styles.botonTabs}
            label="Franquicia"
            {...a11yProps(1)}
          />
          <Tab
            className={styles.botonTabs}
            label="Vender metales preciosos"
            {...a11yProps(2)}
          />
          <Tab
            className={styles.botonTabs}
            label="Cambio de divisa"
            {...a11yProps(3)}
          />
          <Tab className={styles.botonTabs} label="Empeños" {...a11yProps(4)} />
          <Tab
            className={styles.botonTabs}
            label="Invertir en oro"
            {...a11yProps(5)}
          />
          <Tab
            className={styles.botonTabs}
            label="Vender Diamantes"
            {...a11yProps(6)}
          />
        </Tabs>

        <TabPanel className={styles.contenidoTabs} value={value} index={1}>
          <AccordiosnFranquicia />
        </TabPanel>
        <TabPanel className={styles.contenidoTabs} value={value} index={2}>
          <AccordiosnVenderMetales />
        </TabPanel>
        <TabPanel className={styles.contenidoTabs} value={value} index={3}>
          <AccordiosnCambioDivisa />
        </TabPanel>
        <TabPanel className={styles.contenidoTabs} value={value} index={4}>
          <AccordiosnEmpenos />
        </TabPanel>
        <TabPanel className={styles.contenidoTabs} value={value} index={5}>
          <AccordiosnInvertirOro />
        </TabPanel>
        <TabPanel className={styles.contenidoTabs} value={value} index={6}>
          <AccordiosnVenderDiamantes />
        </TabPanel>
      </Box>
    </div>
  );
}
