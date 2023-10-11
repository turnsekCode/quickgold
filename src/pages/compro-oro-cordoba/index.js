import Head from "next/head";
import styles from "@/styles/Home.module.css";
import BreadcrumbsTiendas from "@/componentes/BreadcrumbsTiendas/Breadcrumbs.js";
import SEO from "@bradgarropy/next-seo";
import BotonLamarFijo from "@/componentes/BotonLlamarFijo/BotonLamarFijo";
import BotonesLlamar from "@/componentes/BotonesLlamarWT/BotonesLlamar";
import BannerWallapop from "@/componentes/BannerWallapop/BannerWallapop";
import Layout from "@/componentes/Layout/Layout";
import Html from "@/componentes/ComponenteHTML/Html";
import { useInView } from "react-intersection-observer";
import SeccionUno from "@/componentes/ComponentesPaginasCiudad/SeccionUno/SeccionUno";
import SeccionDos from "@/componentes/ComponentesPaginasCiudad/seccionDos/SeccionDos";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Mapa from "@/componentes/MapaCiudades/MapaCiudades.js";
import BannerPromoTiendas from "@/componentes/BannerPromoTiendas/BannerPromoTiendas.js";

export default function Cordoba({ markers, menu_list, ciudad, general }) {
  const { ref: myRef, inView, entry } = useInView();
  const breadCrumb = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Quickgold",
        item: "https://quickgold.es",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tiendas",
        item: "https://quickgold.es/tiendas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ciudad?.acf?.ciudad_landing,
        item: "https://quickgold.es/tiendas/compro-oro-cordoba",
      },
    ],
  };
  return (
    <>
      <SEO
        title={ciudad?.acf?.titulo_del_meta}
        description={ciudad?.acf?.descripcion_del_meta}
        icon="/favicon.png"
        facebook={{
          image: `/${ciudad?.acf?.tienda}.jpg`,
          url: "https://www.facebook.com/quickgold.es/",
          type: "article",
        }}
        twitter={{
          image: `/${ciudad?.acf?.tienda}.jpg`,
          site: "@quickgoldQG",
          card: "summary_large_image",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumb) }}
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet preload prefetch"
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          as="style"
        ></link>
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          />
        </noscript>
        <link rel="canonical" href={ciudad?.acf?.canonical} />
      </Head>
      <Layout menu_list={menu_list} ciudad={ciudad}>
        <div itemScope itemType="http://schema.org/Organization">
          <meta itemProp="name" content="Quickgold" />
          <meta itemProp="url" content="https://quickgold.es" />
          <meta
            itemProp="logo"
            content="https://quickgold.es/wp-content/uploads/img/logo.jpg"
          />
          <meta
            itemProp="image"
            content="https://quickgold.es/wp-content/uploads/img/logo.jpg"
          />
          <meta itemProp="telephone" content="+34 900 373 629" />
          <meta itemProp="email" content="info@quickgold.es" />
          <meta
            itemProp="sameAs"
            content="https://www.facebook.com/quickgold.es"
          />
          <meta itemProp="sameAs" content="https://twitter.com/quickgoldqg" />
          <meta
            itemProp="sameAs"
            content="https://instagram.com/quickgold.es"
          />
          <meta
            itemProp="address"
            content="Calle José Cruz Conde 32, local 4. Córdoba, Provincia de Córdoba, 14001"
          />
        </div>
        <div className={styles.main}>
          <BreadcrumbsTiendas
            raiz="Quickgold"
            tiendas="Tiendas"
            ubicacionActual={ciudad?.acf?.ciudad_landing}
            iconoRaiz={<KeyboardArrowRightIcon />}
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            urlNombreCiudad="https://quickgold.es/tiendas/compro-oro-cordoba"
            urlNombreTienda="https://quickgold.es/tiendas/compro-oro-cordoba"
          />
          <SeccionUno ciudad={ciudad} />
          {ciudad?.acf?.activar_banner_en_tiendas_y_ciudad &&
          general?.acf?.activar_promo_general ? (
            <BannerPromoTiendas ciudad={ciudad} />
          ) : null}
          {ciudad?.acf?.activar_banner_en_tiendas_y_ciudad == false &&
          general?.acf?.activar_promo_general ? (
            <BannerPromoGeneral general={general} />
          ) : null}
          {general?.acf?.activar_promo_general == false &&
          ciudad?.acf?.activar_banner_en_tiendas_y_ciudad ? (
            <BannerPromoTiendas ciudad={ciudad} />
          ) : null}
          <div className={styles.contenedorSeccionUnoDos}>
            <SeccionDos ciudad={ciudad} />
            <article className={styles.contenedorMapaVisible} ref={myRef}>
              {inView ? <Mapa markers={markers} ciudad={ciudad} /> : null}
            </article>
            {/*<Mapa markers={markers} />*/}
          </div>
        </div>

        {ciudad?.acf?.tienda === "" ? (
          <BotonLamarFijo ciudad={ciudad} />
        ) : (
          <BotonesLlamar ciudad={ciudad} />
        )}
        <Html ciudad={ciudad} />
        {ciudad?.acf?.activar_banner_wallapop ? (
          <BannerWallapop ciudad={ciudad} />
        ) : null}
      </Layout>
    </>
  );
}
const idPaginaWp = "13762";
const apiGeneral = "13848";
//datos de los campos personalizados de la ciudad

//const idWp = "13848";
export async function getStaticProps() {
  const ciudad1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();
  //fin datos de los campos personalizados de la ciudad
  // general para imagenes o promociones banner
  const general1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await general1.json();
  //fin general para imagenes o promociones banner
  const tienda = ciudad?.acf?.ciudad_oro;
  // datos para las ciudades del mapa
  const marker = await fetch(
    `https://panel.quickgold.es/markersMapa/markers${tienda}.json`
  );
  const markers = await marker.json();
  /*const marker = await fetch(`https://quickgold.es/markers${idTienda}.json`);
  const markers = await marker.json();*/
  //fin datos para las ciudades del mapa
  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  return {
    props: {
      markers,
      menu_list,
      ciudad,
      general,
    },
    revalidate: 1,
  };
}
