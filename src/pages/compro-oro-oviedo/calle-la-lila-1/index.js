import Head from "next/head";
import styles from "@/styles/Home.module.css";
import BreadcrumbsTiendas from "@/componentes/BreadcrumbsTiendas/Breadcrumbs.js";
import SEO from "@bradgarropy/next-seo";
import BotonLamarFijo from "@/componentes/BotonLlamarFijo/BotonLamarFijo";
import BotonesLlamar from "@/componentes/BotonesLlamarWT/BotonesLlamar";
import BannerWallapop from "@/componentes/BannerWallapop/BannerWallapop";
import Layout from "@/componentes/Layout/Layout";
import Html from "@/componentes/ComponenteHTML/Html";
import SeccionUno from "@/componentes/ComponentesPaginasDeTiendas/SeccionUno/SeccionUno";
import SeccionDos from "@/componentes/ComponentesPaginasDeTiendas/seccionDos/SeccionDos";
import SeccionTres from "@/componentes/ComponentesPaginasDeTiendas/SeccionTres/SeccionTres";
import BannerPromoTiendas from "@/componentes/BannerPromoTiendas/BannerPromoTiendas.js";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Script from "next/script.js";

export default function Oviedo({ menu_list, ciudad, tiendaGoogle, general }) {
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
        item: "https://quickgold.es/tiendas/compro-oro-oviedo",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "calle-la-lila-1",
        item: "https://quickgold.es/tiendas/compro-oro-oviedo/calle-la-lila-1",
      },
    ],
  };
  const schema = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Quickgold",
    url: "https://quickgold.es",
    sameAs: [
      "https://instagram.com/quickgold.es",
      "https://twitter.com/quickgoldqg",
      "https://www.facebook.com/quickgold.es",
    ],
    logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
    image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  };

  const schema_resenas = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: tiendaGoogle?.result?.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tiendaGoogle?.result?.rating,
      ratingCount: tiendaGoogle?.result?.user_ratings_total,
      worstRating: 1,
      bestRating: 5,
    },
    priceRange: "$",
    telephone: tiendaGoogle?.result?.formatted_phone_number,
    address: {
      "@type": "PostalAddress",
      addressLocality: tiendaGoogle?.result?.address_components[3]?.long_name,
      addressRegion: tiendaGoogle?.result?.address_components[4]?.long_name,
      streetAddress: tiendaGoogle?.result?.formatted_address,
    },
  };
  return (
    <>
      <SEO
        title={ciudad?.acf?.titulo_del_meta}
        description={ciudad?.acf?.descripcion_del_meta}
        icon="/favicon.png"
        facebook={{
          image: "/facebook.png",
          url: "https://www.facebook.com/quickgold.es/",
          type: "article",
        }}
        twitter={{
          image: "/twitter.png",
          site: "@quickgoldQG",
          card: "summary_large_image",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema_resenas) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumb) }}
        ></script>
        {ciudad?.acf?.nonscript_chat}
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
      <Script id="livechat">{ciudad?.acf?.script_chat}</Script>
      <Layout menu_list={menu_list} ciudad={ciudad}>
        <div className={styles.main}>
          <BreadcrumbsTiendas
            raiz="Quickgold"
            tiendas="Tiendas"
            urlNombreCiudad="https://quickgold.es/tiendas/compro-oro-oviedo/calle-la-lila-1"
            urlNombreTienda="https://quickgold.es/tiendas/compro-oro-oviedo"
            nombreCiudad={ciudad?.acf?.nombreCiudad}
            nombreTienda={ciudad?.acf?.ciudad_landing}
            ubicacionActual={ciudad?.acf?.nombre_tienda}
            iconoRaiz={<KeyboardArrowRightIcon />}
            iconoTiendas={<KeyboardArrowRightIcon />}
            //iconoUbiccionActual={<KeyboardArrowRightIcon />}
          />
          <SeccionUno ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
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
            <SeccionTres ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
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
const idPaginaWp = "16548";
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
  const tienda = ciudad?.acf?.tienda;
  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();
  //datos de google
  const google = await fetch(
    `https://panel.quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`
  );
  const tiendaGoogle = await google.json();
  return {
    props: {
      menu_list,
      ciudad,
      tiendaGoogle,
      general,
    },
    revalidate: 1,
  };
}
