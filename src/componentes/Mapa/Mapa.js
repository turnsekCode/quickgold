import React, { useState, useRef } from "react";
import BloqueTiendas from "../BloqueTiendas/BloqueTiendas";
import styles from "./mapa.module.css";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";

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
    mapRef.current?.flyTo({
      center: [-3.6883264, 40.4535878],
      duration: 2000,
      zoom: 11,
    });
  };
  /*const toggleTab = (index) => {
    setShowPopup(index);
  };*/

  const [showPopup, setShowPopup] = useState({
    longitude: "",
    latitude: "",
    tienda: "",
    estado: null,
  });

  const onSelectMarker = (marker) => {
    setShowPopup({
      longitude: marker.longitude,
      latitude: marker.latitude,
      tienda: marker.tienda,
    });
    mapRef.current?.flyTo({
      center: { lng: marker.longitude, lat: marker.latitude },
      duration: 1500,
      zoom: 11,
    });
  };

  return (
    <section className={styles.contenedorMapa}>
      <div className={styles.contenedorbloqueIzq}>
        <div className={styles.bloqueIzq}>
          <h2>
            Casas de cambio en <span className={styles.linea}>Madrid</span>
          </h2>
          <p>
            Tiendas Quickgold: <span>6</span>
          </p>
        </div>
        <BloqueTiendas />
      </div>
      <div className={styles.bloqueDer}>
        <Map
          ref={mapRef}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          className="mapa"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken="pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw"
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
              }}
            >
              {showPopup.tienda && (
                <Popup
                  style={{ top: -25 }}
                  longitude={showPopup.longitude}
                  className="popup"
                  latitude={showPopup.latitude}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className="contenedor_popuop">
                    <p className="nombre_ciudad_popup">{showPopup.tienda}</p>
                    <p className="nombre_ciudad_popup">Contacto:</p>
                    <a
                      href="http://bit.ly/3X3XYRj"
                      rel="noreferrer"
                      target="_blank"
                      className="direccion_popup"
                    >
                      direccion
                    </a>
                    <br />
                    <a
                      href="http://bit.ly/3X3XYRj"
                      rel="noreferrer"
                      ƒ
                      className="boton_como_llegar"
                    >
                      Cómo llegar
                    </a>
                    <br></br>
                    <a href="tel:" className="telefono_popup">
                      <span>Llamar: </span>
                      numero telefono
                    </a>
                  </div>
                </Popup>
              )}
              {/*showPopup === "san bernardo" && (
                <Popup
                  style={{ top: -35 }}
                  longitude={-3.7073656999999685}
                  latitude={40.4232377}
                  closeOnClick={false}
                  anchor={null}
                  onClose={() => setShowPopup(false)}
                >
                  <div className="contenedor_popuop">
                    <p className="nombre_ciudad_popup">San Bernardo</p>
                    <p className="nombre_ciudad_popup">Contacto:</p>
                    <a
                      href="http://bit.ly/3V13uCi"
                      rel="noreferrer"
                      target="_blank"
                      className="direccion_popup"
                    >
                      san bernardo
                    </a>
                    <br />
                    <a
                      href="http://bit.ly/3V13uCi"
                      rel="noreferrer"
                      className="boton_como_llegar"
                    >
                      Cómo llegar
                    </a>
                    <br></br>
                    <a href="tel:" className="telefono_popup">
                      <span>Llamar: </span>
                      numero sanbernardo
                    </a>
                  </div>
                </Popup>
              )*/}
            </Marker>
          ))}
        </Map>
      </div>
    </section>
  );
};

export default Mapa;
