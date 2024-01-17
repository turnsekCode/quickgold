import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SEO from "@bradgarropy/next-seo";
import BotonLamarFijo from "@/componentes/BotonLlamarFijo/BotonLamarFijo";
import BotonesLlamar from "@/componentes/BotonesLlamarWT/BotonesLlamar";
import BannerWallapop from "@/componentes/BannerWallapop/BannerWallapop";
import Layout from "@/componentes/Layout/Layout";
import SeccionUno from "@/componentes/ComponentesTiendaIndividualDivisa/SeccionUno/SeccionUno";
import SeccionTres from "@/componentes/ComponentesTiendaIndividualDivisa/SeccionTres/SeccionTres";
import BannerPromoTiendas from "@/componentes/BannerPromoTiendas/BannerPromoTiendas.js";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Script from "next/script.js";
import Breadcrumbs from "@/componentes/BreadcrumbsServicioTienda/Breadcrumbs";
import SeccionDos from "@/componentes/ComponentesTiendaIndividualDivisa/seccionDos/SeccionDos";

export default function Plazadeespana2locala8({
  menu_list,
  ciudad,
  tiendaGoogle,
  general,
}) {
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
        name: "Cambio de divisas",
        item: "https://quickgold.es/cambio-divisas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: ciudad?.acf?.info_grupo?.ciudad_landing,
        item: "https://quickgold.es/cambio-divisas/alcala-de-henares",
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
    logo: "/assets/img/logo.jpg",
    image: "/assets/img/logo.jpg",
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
    image: `/assets/img/${ciudad?.acf?.info_grupo?.tienda}.jpg`,
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
        title={ciudad?.acf?.divisa_grupo?.title_meta_divisa}
        description={ciudad?.acf?.divisa_grupo?.description_meta_divisa}
        icon="/favicon.png"
        facebook={{
          image: `/assets/img/${ciudad?.acf?.info_grupo?.tienda}.jpg`,
          url: "https://www.facebook.com/quickgold.es/",
          type: "article",
        }}
        twitter={{
          image: `/assets/img/${ciudad?.acf?.info_grupo?.tienda}.jpg`,
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
        {ciudad?.acf?.info_grupo?.nonscript_chat}
        <meta
          name="keywords"
          content="cambio de divisas,cambio de divisas alcala de henares,cambio divisas,money exchange,precio dolar"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script id="livechat" property="lazyOnload">
        {ciudad?.acf?.info_grupo?.script_chat}
      </Script>
      <Layout menu_list={menu_list} ciudad={ciudad}>
        <div className={styles.main}>
          <Breadcrumbs
            raiz="Quickgold"
            tiendas="Cambio Divisa"
            urlNombreServicio="/cambio-divisas"
            ubicacionActual={ciudad?.acf?.info_grupo?.nombre_tienda}
            iconoRaiz={<KeyboardArrowRightIcon />}
            iconoTiendas={<KeyboardArrowRightIcon />}
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

        {ciudad?.acf?.info_grupo?.tienda === "" ? (
          <BotonLamarFijo ciudad={ciudad} />
        ) : (
          <BotonesLlamar ciudad={ciudad} />
        )}
        {ciudad?.acf?.activar_banner_wallapop ? (
          <BannerWallapop ciudad={ciudad} />
        ) : null}
      </Layout>
    </>
  );
}
const idPaginaWp = "6686";
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
  const tienda = ciudad?.acf?.info_grupo?.tienda;
  const menu = await fetch(
    `https://panel.quickgold.es/wp-json/menus/v1/menus/2219`
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
