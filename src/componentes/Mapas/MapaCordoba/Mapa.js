import React, { useState, useRef } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import styles from "../../Mapas/mapa.module.css";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-scroll";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";

/*const DynamicBloqueTiendas = dynamic(() =>
  import("../BloqueTiendas/BloqueTiendas")
);*/
export default function MapaCordoba({ cordoba }) {
  const marcador = cordoba?.arrayMarker;
  const [viewState, setViewState] = useState({
    longitude: cordoba?.markerInicial[0].longitude,
    latitude: cordoba?.markerInicial[0].latitude,
    zoom: cordoba?.markerInicial[0].zoom,
    cooperativeGestures: true,
  });
  const mapRef = useRef();
  const resetMap = () => {
    setShowPopup(false);
    mapRef.current?.flyTo({
      center: [
        cordoba.markerInicial[0].longitude,
        cordoba.markerInicial[0].latitude,
      ],
      duration: 2000,
      zoom: cordoba?.markerInicial[0].zoom,
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
      id: marker?.id,
      longitude: marker?.longitude,
      latitude: marker?.latitude,
      tienda: marker?.tienda,
      telefono: marker?.telefono,
      direccion: marker?.direccion,
      comoLlegar: marker?.comoLlegar,
      nombreTienda: marker?.nombreTienda,
      duration: marker?.duration,
      zoom: marker?.zoom,
      url: marker?.url,
    });
    mapRef.current?.flyTo({
      center: { lng: marker?.longitude, lat: marker?.latitude },
      duration: 1500,
      zoom: marker?.zoom,
    });
    setActiveId(marker?.id);
  };
  const numeroDeTiendas = cordoba?.arrayMarker[cordoba?.arrayMarker.length - 1];
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
              <Link
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
              </Link>
              <Link
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
                  {/*<Link
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
              </Link>
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
          mapStyle="mapbox://styles/mapbox/streets-v9?optimize=true"
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
                  style={{ top: -25, maxWidth: 255 }}
                  longitude={showInfo.longitude}
                  className="popup"
                  latitude={showInfo.latitude}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className={styles.contenedor_popuop}>
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
                      title="Cómo llegar"
                      href={showInfo.comoLlegar}
                      rel="noreferrer"
                      className={styles.boton_como_llegar}
                    >
                      Cómo llegar
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
                      title="Sitio Web"
                      href={showInfo.url}
                      rel="noreferrer"
                      className={styles.boton_como_llegar}
                    >
                      Web
                    </a>
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
