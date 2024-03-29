import Head from "next/head";
import styles from "@/styles/Home.module.css";
import BreadcrumbsTiendas from "@/componentes/BreadcrumbsTiendas/Breadcrumbs.js";
import SEO from "@bradgarropy/next-seo";
import BotonLamarFijo from "@/componentes/BotonLlamarFijo/BotonLamarFijo";
import BotonesLlamar from "@/componentes/BotonesLlamarWT/BotonesLlamar";
import BannerWallapop from "@/componentes/BannerWallapop/BannerWallapop";
import Layout from "@/componentes/Layout/Layout";
import SeccionUno from "@/componentes/ComponentesPaginasDeTiendas/SeccionUno/SeccionUno";
import SeccionDos from "@/componentes/ComponentesPaginasDeTiendas/seccionDos/SeccionDos";
import SeccionTres from "@/componentes/ComponentesPaginasDeTiendas/SeccionTres/SeccionTres";
import BannerPromoTiendas from "@/componentes/BannerPromoTiendas/BannerPromoTiendas.js";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Script from "next/script";

export default function Granada({ menu_list, ciudad, tiendaGoogle, general }) {
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
        item: "https://quickgold.es/tiendas/compro-oro-granada",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "calle-puentezuelas-6",
        item: "https://quickgold.es/tiendas/compro-oro-granada/calle-puentezuelas-6",
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
    image: `/assets/img/${ciudad?.acf?.tienda}.jpg`,
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
          image: `/assets/img/${ciudad?.acf?.tienda}.jpg`,
          url: "https://www.facebook.com/quickgold.es/",
          type: "article",
        }}
        twitter={{
          image: `/assets/img/${ciudad?.acf?.tienda}.jpg`,
          site: "@quickgoldQG",
          card: "summary_large_image",
        }}
      />
      <Head>
        <meta name="robots" content="noindex"></meta>
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
        <script type="text/javascript">
          {`(function (d, t) {
      var v = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.voiceflow.chat
          .load({
            verify: { projectID: "6579657eb14e715c031d33a8" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
          })
          .then(() => {
            setTimeout(function () {
              window.voiceflow.chat.open();
            }, 1000);
          })
          .then(() => {
            window.voiceflow.chat.proactive.push({
              type: "text",
              payload: { message: "¡Que gusto verte por aqui! 👋🏼" },
            });
            window.voiceflow.chat.proactive.push({
              type: "text",
              payload: {
                message:
                  "Puedes consultar conmigo cualquier duda que tengas 😄",
              },
            });
          });;
      };
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");`}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={ciudad?.acf?.canonical} />
      </Head>
      <Layout menu_list={menu_list} ciudad={ciudad}>
        <div className={styles.main}>
          <BreadcrumbsTiendas
            raiz="Quickgold"
            tiendas="Tiendas"
            urlNombreCiudad="https://quickgold.es/tiendas/compro-oro-granada/calle-puentezuelas-6"
            urlNombreTienda="https://quickgold.es/tiendas/compro-oro-granada"
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
        {ciudad?.acf?.activar_banner_wallapop ? (
          <BannerWallapop ciudad={ciudad} />
        ) : null}
      </Layout>
    </>
  );
}
const idPaginaWp = "10223";
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
