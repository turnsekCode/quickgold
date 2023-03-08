import React, { useState, useRef } from "react";
//import BloqueTiendas from "../BloqueTiendas/BloqueTiendas";
import styles from "./mapa.module.css";
//import dynamic from "next/dynamic";
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
const Mapa = ({ markers }) => {
  const marcador = markers.arrayMarker;
  const [viewState, setViewState] = useState({
    longitude: -3.6883264,
    latitude: 40.4535878,
    zoom: 11,
    cooperativeGestures: true,
  });
  const mapRef = useRef();
  const resetMap = () => {
    setShowPopup(false);
    mapRef.current?.flyTo({
      center: [-3.6883264, 40.4535878],
      duration: 2000,
      zoom: 11,
    });
  };
  const [showPopup, setShowPopup] = useState(null);
  const toggleTab = () => {
    setShowPopup(true);
  };

  const [showInfo, setShowInfo] = useState({
    longitude: "",
    latitude: "",
    tienda: "",
    telefono: "",
    direccion: "",
    comoLlegar: "",
    nombreTienda: "",
    duration: "",
    zoom: "",
  });

  const onSelectMarker = (marker) => {
    setShowInfo({
      longitude: marker.longitude,
      latitude: marker.latitude,
      tienda: marker.tienda,
      telefono: marker.telefono,
      direccion: marker.direccion,
      comoLlegar: marker.comoLlegar,
      nombreTienda: marker.nombreTienda,
      duration: marker.duration,
      zoom: marker.zoom,
    });
    mapRef.current?.flyTo({
      center: { lng: marker.longitude, lat: marker.latitude },
      duration: 1500,
      zoom: 11,
    });
  };
  return (
    <section id="contenedorMapa" className={styles.contenedorMapa}>
      <div className={styles.contenedorbloqueIzq}>
        <div className={styles.bloqueIzq}>
          <h2>
            Casas de cambio en <span className={styles.linea}>Madrid</span>
          </h2>
          <p>
            Tiendas Quickgold: <span>6</span>
          </p>
        </div>
        <div className={styles.contenedorTiendas}>
          {marcador.map((marker) => (
            <div
              className={styles.tienda}
              onClick={() => {
                toggleTab();
                onSelectMarker(marker);
              }}
            >
              <h3>{marker.nombreTienda}</h3>
              <p>{marker.direccion}</p>
              <a title="texto" href={`tel:${marker.telefono}`}>
                <p>Telefono: {marker.telefono}</p>
              </a>
              <a href={marker.direccion}>Cómo llegar</a>
            </div>
          ))}
        </div>
        {/*<BloqueTiendas />*/}
      </div>
      <div className={styles.bloqueDer}>
        <Map
          onStyleLoad
          ref={mapRef}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          className="mapa"
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
            Reset Map
          </button>
          {marcador.map((marker) => (
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
                  style={{ top: -25 }}
                  longitude={showInfo.longitude}
                  className="popup"
                  latitude={showInfo.latitude}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className="contenedor_popuop">
                    <p className="nombre_ciudad_popup">
                      {showInfo.nombreTienda}
                    </p>
                    <p className="nombre_ciudad_popup">Contacto:</p>
                    <a
                      title="texto"
                      href={showInfo.comoLlegar}
                      rel="noreferrer"
                      target="_blank"
                      className="direccion_popup"
                    >
                      {showInfo.direccion}
                    </a>
                    <br />
                    <a
                      title="texto"
                      href={showInfo.comoLlegar}
                      rel="noreferrer"
                      ƒ
                      className="boton_como_llegar"
                    >
                      Cómo llegar
                    </a>
                    <br></br>
                    <a
                      href={`tel:${showInfo.telefono}`}
                      className="telefono_popup"
                      title="texto"
                    >
                      <span>Llamar: </span>
                      {showInfo.telefono}
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
};

export default Mapa;
