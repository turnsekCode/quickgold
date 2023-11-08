import React from "react";
import styles from "./MapaDelSitio.module.css";


const MapaDelSitio = ({
  alcaladehenaresCiudad,
  alcaladehenaresTienda,
  alcobendasCiudad,
  alcobendasTienda,
  alcorconCiudad,
  alcorconTienda,
  alicanteCiudad,
  alfonso,
  sanfrancisco,
  almeriaCiudad,
  almeriaTienda,
}) => {
  console.log(alfonso) 
  return (
    <section className={styles.contenidoMapa}>
      <h1 className={styles.tituloMapa}>Mapa del sitio</h1>

<ul>
  <li><h2 className={styles.tituloA}><a href="/" title="Página de inicio de Quickgold, empresa compro oro, cambio de divisas y empeños">Inicio</a></h2><p className={styles.tituloTexto}>Compro oro, empeños de joyas y cambio de divisas - Quickgold</p></li>
  <li><h2 className={styles.tituloA}>Servicios</h2><p className={styles.tituloTexto}>Servicios realizados por Quickgold:</p>
  <ul>
    <li><h3 className={styles.tituloA}><a href="/compro-oro" title="Servicio de compra de oro al mejor precio">Compra de oro</a></h3><p className={styles.tituloTexto}>El mejor precio del oro de tu ciudad. Compra de joyas de oro y oro en general - Quickgold</p></li>
    <li><h3 className={styles.tituloA}><a href="/cambio-divisas" title="Servicio de cambio de divisas sin comisiones">Cambio de divisas</a></h3><p className={styles.tituloTexto}>Cambio de divisas sin comisiones, money exchange no commission - Quickgold</p></li>
    <li><h3 className={styles.tituloA}><a href="/empeno-de-joyas" title="Servicio de empeño de joyas">Empeño de joyas</a></h3><p className={styles.tituloTexto}>Empeño de joyas sin interés el primer mes. Empeñar oro con la mejor opción - Quickgold</p></li>
    <li><h3 className={styles.tituloA}><a href="/compro-plata" title="Servicio de compra de plata al mejor precio">Compra de plata</a></h3><p className={styles.tituloTexto}>Compra de plata al mejor precio. La mejor opción para vender plata - Quickgold</p></li>
    <li><h3 className={styles.tituloA}><a href="/joyeria-de-ocasion" title="Servicio de venta de joyería">Joyería de ocasión</a></h3><p className={styles.tituloTexto}>Venta de joyería de ocasión a precios increíbles - Quickgold</p></li>
    <li><h3 className={styles.tituloA}><a href="/invertir-en-oro" title="Servicio de venta de lingotes de oro para inversión">Oro de inversión</a></h3><p className={styles.tituloTexto}>Venta de lingotes de oro para inversión - Quickgold</p></li>
    <li><h3 className={styles.tituloA}><a href="/vender-diamantes" title="Servicio de compra de diamantes">Compra de diamantes</a></h3><p className={styles.tituloTexto}>Vender diamantes de manera segura y cómoda - Quickgold</p></li>
  </ul>
  </li>
  <li><h2 className={styles.tituloA}><a href="/tiendas" title="">Tiendas</a></h2><p className={styles.tituloTexto}>Tiendas compro oro Quickgold - Más de 60 Tiendas en España:</p>
  <ul>
    <li><h3 className={styles.tituloA}><a href={`${alcaladehenaresCiudad?.acf?.canonical}`} title={`Tiendas Quickgold en ${alcaladehenaresCiudad?.acf?.ciudad_landing}`}>{alcaladehenaresCiudad?.acf?.ciudad_landing}</a>
    </h3><p className={styles.tituloTexto}>{alcaladehenaresCiudad?.acf?.titulo_del_meta}</p>
    <ul>
      <li><h4 className={styles.tituloA}><a href={`${alcaladehenaresTienda?.acf?.canonical}`} title={`Tienda Quickgold ${alcaladehenaresTienda?.acf?.ciudad_landing}`}>Tienda Quickgold {alcaladehenaresCiudad?.acf?.ciudad_landing}</a>
    </h4><p className={styles.tituloTexto}>{alcaladehenaresCiudad?.acf?.titulo_del_h1}</p>
      </li>
    </ul>
    </li>
    <li><h3 className={styles.tituloA}><a href={`${alcobendasCiudad?.acf?.canonical}`} title={`Tiendas Quickgold en ${alcobendasCiudad?.acf?.ciudad_landing}`}>{alcobendasCiudad?.acf?.ciudad_landing}</a>
    </h3><p className={styles.tituloTexto}>{alcobendasCiudad?.acf?.titulo_del_meta}</p>
    <ul>
      <li><h4 className={styles.tituloA}><a href={`${alcobendasTienda?.acf?.canonical}`} title={`Tienda Quickgold ${alcobendasTienda?.acf?.ciudad_landing}`}>Tienda Quickgold {alcobendasTienda?.acf?.ciudad_landing}</a>
    </h4><p className={styles.tituloTexto}>{alcobendasTienda?.acf?.titulo_del_h1}</p>
      </li>
    </ul>
    </li>
    <li><h3 className={styles.tituloA}><a href={`${alcorconCiudad?.acf?.canonical}`} title={`Tiendas Quickgold en ${alcorconCiudad?.acf?.ciudad_landing}`}>{alcorconCiudad?.acf?.ciudad_landing}</a>
    </h3><p className={styles.tituloTexto}>{alcorconCiudad?.acf?.titulo_del_meta}</p>
    <ul>
      <li><h4 className={styles.tituloA}><a href={`${alcorconTienda?.acf?.canonical}`} title={`Tienda Quickgold ${alcorconCiudad?.acf?.ciudad_landing}`}>Tienda Quickgold {alcorconCiudad?.acf?.ciudad_landing}</a>
    </h4><p className={styles.tituloTexto}>{alcorconTienda?.acf?.titulo_del_h1}</p>
      </li>
    </ul>
    </li>
    <li><h3 className={styles.tituloA}><a href={`${alicanteCiudad?.acf?.canonical}`} title={`Tiendas Quickgold en ${alicanteCiudad?.acf?.ciudad_landing}`}>{alicanteCiudad?.acf?.ciudad_landing}</a>
    </h3><p className={styles.tituloTexto}>{alicanteCiudad?.acf?.titulo_del_meta}</p>
    <ul>
      <li><h4 className={styles.tituloA}><a href={`${alfonso?.acf?.canonical}`} title={`Tienda Quickgold ${alfonso?.acf?.ciudad_landing}`}>Tienda {alfonso?.acf?.nombre_tienda}</a>
    </h4><p className={styles.tituloTexto}>{alfonso?.acf?.titulo_del_h1}</p>
      </li>
      <li><h4 className={styles.tituloA}><a href={`${sanfrancisco?.acf?.canonical}`} title={`Tienda Quickgold ${sanfrancisco?.acf?.ciudad_landing}`}>Tienda {sanfrancisco?.acf?.nombre_tienda}</a>
    </h4><p className={styles.tituloTexto}>{sanfrancisco?.acf?.titulo_del_h1}</p>
      </li>
    </ul>
    </li>
    <li><h3 className={styles.tituloA}><a href={`${almeriaCiudad?.acf?.canonical}`} title={`Tiendas Quickgold en ${almeriaCiudad?.acf?.ciudad_landing}`}>{almeriaCiudad?.acf?.ciudad_landing}</a>
    </h3><p className={styles.tituloTexto}>{almeriaCiudad?.acf?.titulo_del_meta}</p>
    <ul>
      <li><h4 className={styles.tituloA}><a href={`${almeriaTienda?.acf?.canonical}`} title={`Tienda Quickgold ${almeriaTienda?.acf?.ciudad_landing}`}>Tienda Quickgold {almeriaTienda?.acf?.ciudad_landing}</a>
    </h4><p className={styles.tituloTexto}>{almeriaTienda?.acf?.titulo_del_h1}</p>
      </li>
    </ul>
    </li>


  </ul>
  </li>
  
</ul>

    </section>
  );
};

export default MapaDelSitio;