import React, { useState } from "react";
import styles from "./sectionDos.module.css";
import MapaAlcobendas from "../../Mapas/MapaAlcobendas/Mapa";
import MapaAlcorcon from "../../Mapas/MapaAlcorcon/Mapa";
import MapaAlicante from "../../Mapas/MapaAlicante/Mapa";
import MapaAlcaladehenares from "../../Mapas/MapaAlcaladehenares/Mapa";
import MapaAlmeria from "../../Mapas/MapaAlmeria/Mapa";
import MapaBarcelona from "../../Mapas/MapaBarcelona/Mapa";
import MapaBenidorm from "../../Mapas/MapaBenidorm/Mapa";
import MapaBilbao from "../../Mapas/MapaBilbao/Mapa";
import MapaCadiz from "../../Mapas/MapaCadiz/Mapa";
import MapaCartagena from "../../Mapas/MapaCartagena/Mapa";
import MapaCastellon from "../../Mapas/MapaCastellon/Mapa";
import MapaCordoba from "../../Mapas/MapaCordoba/Mapa";
import MapaElche from "../../Mapas/MapaElche/Mapa";
import MapaGetafe from "../../Mapas/MapaGetafe/Mapa";
import MapaGijon from "../../Mapas/MapaGijon/Mapa";
import MapaGranada from "../../Mapas/MapaGranada/Mapa";
import MapaJerez from "../../Mapas/MapaJerez/Mapa";
import MapaLaCoruna from "../../Mapas/MapaLaCoruna/Mapa";
import MapaLeon from "../../Mapas/MapaLeon/Mapa";
import MapaLogrono from "../../Mapas/MapaLogrono/Mapa";
import MapaMadrid from "../../Mapas/MapaMadrid/Mapa";
import MapaMalaga from "../../Mapas/MapaMalaga/Mapa";
import MapaMarbella from "../../Mapas/MapaMarbella/Mapa";
import MapaMurcia from "../../Mapas/MapaMurcia/Mapa";
import MapaOviedo from "../../Mapas/MapaOviedo/Mapa";
import MapaPalma from "../../Mapas/MapaPalma/Mapa";
import MapaReus from "../../Mapas/MapaReus/Mapa";
import MapaRoquetasDeMar from "../../Mapas/MapaRoquetasDeMar/Mapa";
import MapaSantaCruz from "../../Mapas/MapaSantaCruz/Mapa";
import MapaSantander from "../../Mapas/MapaSantander/Mapa";
import MapaSantiago from "../../Mapas/MapaSantiago/Mapa";
import MapaSevilla from "../../Mapas/MapaSevilla/Mapa";
import MapaTarragona from "../../Mapas/MapaTarragona/Mapa";
import MapaValencia from "../../Mapas/MapaValencia/Mapa";
import MapaValladolid from "../../Mapas/MapaValladolid/Mapa";
import MapaVigo from "../../Mapas/MapaVigo/Mapa";
import MapaZaragoza from "../../Mapas/MapaZaragoza/Mapa";

const Section_dos = ({
  alcaladehenares,
  alcobendas,
  alcorcon,
  alicante,
  almeria,
  barcelona,
  benidorm,
  bilbao,
  cadiz,
  cartagena,
  castellon,
  cordoba,
  elche,
  getafe,
  gijon,
  granada,
  jerez,
  lacoruna,
  leon,
  logrono,
  madrid,
  malaga,
  marbella,
  murcia,
  oviedo,
  palma,
  reus,
  roquetasdemar,
  santacruzdetenerife,
  santander,
  santiagodecompostela,
  sevilla,
  tarragona,
  valencia,
  valladolid,
  vigo,
  zaragoza,
  ListadoCiudades,
}) => {
  const [ciudad, setCiudad] = useState(null);

  let mapa;
  if (ciudad === "alicante") {
    mapa = <MapaAlicante alicante={alicante} />;
  }
  if (ciudad === "alcobendas") {
    mapa = <MapaAlcobendas alcobendas={alcobendas} />;
  }
  if (ciudad === "alcorcon") {
    mapa = <MapaAlcorcon alcorcon={alcorcon} />;
  }
  if (ciudad === "alcaladehenares") {
    mapa = <MapaAlcaladehenares alcaladehenares={alcaladehenares} />;
  }
  if (ciudad === "almeria") {
    mapa = <MapaAlmeria almeria={almeria} />;
  }
  if (ciudad === "barcelona") {
    mapa = <MapaBarcelona barcelona={barcelona} />;
  }
  if (ciudad === "benidorm") {
    mapa = <MapaBenidorm benidorm={benidorm} />;
  }
  if (ciudad === "bilbao") {
    mapa = <MapaBilbao bilbao={bilbao} />;
  }
  if (ciudad === "cadiz") {
    mapa = <MapaCadiz cadiz={cadiz} />;
  }
  if (ciudad === "cartagena") {
    mapa = <MapaCartagena cartagena={cartagena} />;
  }
  if (ciudad === "castellon") {
    mapa = <MapaCastellon castellon={castellon} />;
  }
  if (ciudad === "cordoba") {
    mapa = <MapaCordoba cordoba={cordoba} />;
  }
  if (ciudad === "elche") {
    mapa = <MapaElche elche={elche} />;
  }
  if (ciudad === "getafe") {
    mapa = <MapaGetafe getafe={getafe} />;
  }
  if (ciudad === "gijon") {
    mapa = <MapaGijon gijon={gijon} />;
  }
  if (ciudad === "granada") {
    mapa = <MapaGranada granada={granada} />;
  }
  if (ciudad === "jerez") {
    mapa = <MapaJerez jerez={jerez} />;
  }
  if (ciudad === "lacoruna") {
    mapa = <MapaLaCoruna lacoruna={lacoruna} />;
  }
  if (ciudad === "leon") {
    mapa = <MapaLeon leon={leon} />;
  }
  if (ciudad === "logrono") {
    mapa = <MapaLogrono logrono={logrono} />;
  }
  if (ciudad === "madrid") {
    mapa = <MapaMadrid madrid={madrid} />;
  }
  if (ciudad === "malaga") {
    mapa = <MapaMalaga malaga={malaga} />;
  }
  if (ciudad === "marbella") {
    mapa = <MapaMarbella marbella={marbella} />;
  }
  if (ciudad === "murcia") {
    mapa = <MapaMurcia murcia={murcia} />;
  }
  if (ciudad === "oviedo") {
    mapa = <MapaOviedo oviedo={oviedo} />;
  }
  if (ciudad === "palma") {
    mapa = <MapaPalma palma={palma} />;
  }
  if (ciudad === "reus") {
    mapa = <MapaReus reus={reus} />;
  }
  if (ciudad === "roquetasdemar") {
    mapa = <MapaRoquetasDeMar roquetasdemar={roquetasdemar} />;
  }
  if (ciudad === "santacruzdetenerife") {
    mapa = <MapaSantaCruz santacruzdetenerife={santacruzdetenerife} />;
  }
  if (ciudad === "santander") {
    mapa = <MapaSantander santander={santander} />;
  }
  if (ciudad === "santiagodecompostela") {
    mapa = <MapaSantiago santiagodecompostela={santiagodecompostela} />;
  }
  if (ciudad === "sevilla") {
    mapa = <MapaSevilla sevilla={sevilla} />;
  }
  if (ciudad === "tarragona") {
    mapa = <MapaTarragona tarragona={tarragona} />;
  }
  if (ciudad === "valencia") {
    mapa = <MapaValencia valencia={valencia} />;
  }
  if (ciudad === "valladolid") {
    mapa = <MapaValladolid valladolid={valladolid} />;
  }
  if (ciudad === "vigo") {
    mapa = <MapaVigo vigo={vigo} />;
  }
  if (ciudad === "zaragoza") {
    mapa = <MapaZaragoza zaragoza={zaragoza} />;
  }

  const listadoCiudades = ListadoCiudades?.arrayMarker;
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.contenedorTextoSectionDos}>
        <h2 className={styles.TituloSectionDos}>
          Encuentra tu tienda quickgold
        </h2>
        <p className={styles.textoSectionDos}>
          Seleccione una ciudad y te mostraremos las tiendas más próximas.
        </p>
      </div>
      <select
        className={styles.select}
        onChange={(e) => {
          setCiudad(e.target.value);
        }}
      >
        {listadoCiudades?.map((ciudad, i) => (
          <option key={i} value={`${ciudad?.nombreMinusculas}`}>
            {ciudad?.nombre}
          </option>
        ))}
      </select>
      <p className={styles.lineaAdorno}></p>
      {mapa}
    </section>
  );
};

export default Section_dos;
