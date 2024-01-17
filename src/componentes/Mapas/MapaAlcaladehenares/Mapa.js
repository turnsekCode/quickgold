import React, { useState, useRef } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styles from "../../Mapas/mapa.module.css";
import CallIcon from "@mui/icons-material/Call";
import { Link as LinkMapa } from "react-scroll";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import Link from "next/link";
/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/
export default function MapaAlcaladehenares({ alcaladehenares }) {
  const marcador = alcaladehenares?.arrayMarker;
  const [viewState, setViewState] = useState({
    longitude: alcaladehenares?.markerInicial[0].longitude,
    latitude: alcaladehenares?.markerInicial[0].latitude,
    zoom: alcaladehenares?.markerInicial[0].zoom,
    cooperativeGestures: true,
  });
  const mapRef = useRef();
  const resetMap = () => {
    setShowPopup(false);
    mapRef.current?.flyTo({
      center: [
        alcaladehenares?.markerInicial[0].longitude,
        alcaladehenares?.markerInicial[0].latitude,
      ],
      duration: 2000,
      zoom: alcaladehenares?.markerInicial[0].zoom,
    });
  };
  const [showPopup, setShowPopup] = useState(null);
  const toggleTab = () => {
    setShowPopup(true);
  };

  const [showInfo, setShowInfo] = useState({
    id: "",
    longitude: "",
    latitude: "",
    tienda: "",
    telefono: "",
    direccion: "",
    comoLlegar: "",
    nombreTienda: "",
    duration: "",
    zoom: "",
    url: "",
  });
  const [activeId, setActiveId] = useState("");
  const onSelectMarker = (marker) => {
    setShowInfo({
      id: marker.id,
      longitude: marker.longitude,
      latitude: marker.latitude,
      tienda: marker.tienda,
      telefono: marker.telefono,
      direccion: marker.direccion,
      comoLlegar: marker.comoLlegar,
      nombreTienda: marker.nombreTienda,
      duration: marker.duration,
      zoom: marker.zoom,
      url: marker.url,
    });
    mapRef.current?.flyTo({
      center: { lng: marker.longitude, lat: marker.latitude },
      duration: 1500,
      zoom: marker.zoom,
    });
    setActiveId(marker.id);
  };
  const numeroDeTiendas =
    alcaladehenares?.arrayMarker[alcaladehenares.arrayMarker.length - 1];
  return (
    <section className={styles.contenedorMapa}>
      <div className={styles.contenedorbloqueIzq}>
        <div className={styles.contenedorTiendas}>
          {marcador?.map((marker) => (
            <div
              onClick={() => {
                toggleTab();
                onSelectMarker(marker);
              }}
              key={marker.id}
              className={
                activeId === marker.id && showPopup
                  ? `${styles.contenedorInfoTiendaMapa} ${styles.contenedorInfoTiendaMapaActivo}`
                  : ` ${styles.contenedorInfoTiendaMapa}`
              }
            >
              <LinkMapa
                onClick={() => {
                  toggleTab();
                  onSelectMarker(marker);
                }}
                to="contenedorMapa2"
                smooth={true}
                offset={-110}
                spy={true}
                duration={500}
              >
                {activeId === marker.id && showPopup ? (
                  <RadioButtonCheckedIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
                <h3>{marker.nombreTienda}</h3>
              </LinkMapa>
              <LinkMapa
                onClick={() => {
                  toggleTab();
                  onSelectMarker(marker);
                }}
                to="contenedorMapa2"
                smooth={true}
                offset={-110}
                spy={true}
                duration={500}
              >
                <div className={styles.tienda}>
                  <p>{marker.direccion}</p>
                  <p>Teléfono: {marker.telefono}</p>
                  {/* {/*<Link
                    onClick={() => {
                      toggleTab();
                      onSelectMarker(marker);
                    }}
                    to="contenedorMapa2"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                    className={styles.boton_como_llegar}
                  >
                    Ver Más
                  </Link>*/}
                </div>
              </LinkMapa>
            </div>
          ))}
        </div>
        {/*<BloqueTiendas />*/}
      </div>
      <div className={styles.bloqueDer} id="contenedorMapa2">
        <Map
          onStyleLoad
          ref={mapRef}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          className={styles.mapa}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPA}
        >
          <FullscreenControl /> <GeolocateControl /> <NavigationControl />
          <button
            className={styles.reset_map}
            onClick={() => {
              resetMap();
            }}
          >
            Resetear mapa
          </button>
          {marcador?.map((marker) => (
            <Marker
              key={marker.id}
              longitude={marker.longitude}
              latitude={marker.latitude}
              onClick={() => {
                onSelectMarker(marker);
                toggleTab();
              }}
            >
              {showPopup ? (
                <Popup
                  style={{ top: -25, maxWidth: 260 }}
                  longitude={showInfo.longitude}
                  className="popup"
                  latitude={showInfo.latitude}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className={styles.contenedor_popup}>
                    <p className={styles.nombre_ciudad_popup}>
                      {showInfo.nombreTienda}
                    </p>
                    <a
                      title="Dirección"
                      href={showInfo.comoLlegar}
                      rel="noreferrer"
                      target="_blank"
                      className={styles.direccion_popup}
                    >
                      {showInfo.direccion}
                    </a>
                    <div className={styles.contenedorBotones}>
                      <a
                        href={`tel:${showInfo.telefono}`}
                        className={styles.telefono_popup}
                        title="Teléfono"
                      >
                        <span>
                          <CallIcon></CallIcon>
                        </span>
                        {showInfo.telefono}
                      </a>
                      <a
                        title="Llamar"
                        href={`tel:${showInfo?.telefono}`}
                        rel="noreferrer"
                        className={styles.boton_como_llegar}
                      >
                        Llamar
                      </a>
                      <a
                        title="Cómo llegar"
                        href={showInfo.comoLlegar}
                        rel="noreferrer"
                        className={styles.boton_como_llegar}
                      >
                        Cómo llegar
                      </a>
                    </div>
                    <div className={styles.contenedorBotonesServicios}>
                      <Link
                        title="Llamar"
                        href="/compro-oro/alcala-de-henares"
                        rel="noreferrer"
                        className={styles.boton_servicios}
                      >
                        {" "}
                        Precio oro
                      </Link>
                      <Link
                        title="Llamar"
                        href="/cambio-divisas/alcala-de-henares"
                        rel="noreferrer"
                        className={styles.boton_servicios}
                      >
                        Precio divisa
                      </Link>
                      <Link
                        title="Cómo llegar"
                        href="/empeno-de-joyas/alcala-de-henares"
                        rel="noreferrer"
                        className={styles.boton_servicios}
                      >
                        Empeños
                      </Link>
                      <Link
                        title="Cómo llegar"
                        href="/invertir-en-oro/alcala-de-henares"
                        rel="noreferrer"
                        className={styles.boton_servicios}
                      >
                        Invertir en oro
                      </Link>
                      <Link
                        title="Cómo llegar"
                        href="/compro-plata/alcala-de-henares"
                        rel="noreferrer"
                        className={styles.boton_servicios}
                      >
                        Compro plata
                      </Link>
                    </div>
                    {/* <a
                      title="Sitio Web"
                      href={showInfo.url}
                      rel="noreferrer"
                      className={styles.boton_como_llegar}
                    >
                      Web
              </a>*/}
                  </div>
                </Popup>
              ) : null}
            </Marker>
          ))}
        </Map>
      </div>
    </section>
  );
}
