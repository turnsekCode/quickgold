import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import Section_uno from "@/componentes/casasDeCambioDivisasCiudades/Section_1/Section_uno.js";
import SectionDos from "@/componentes/casasDeCambioDivisasCiudades/Section_2/SectionDos";
import SectionTres from "@/componentes/casasDeCambioDivisasCiudades/Section_3/SectionTres";
import SectionCuatro from "@/componentes/casasDeCambioDivisasCiudades/Section_4/SectionCuatro";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SEO from "@bradgarropy/next-seo";
import Layout from "@/componentes/Layout/Layout";
import { useInView } from "react-intersection-observer";
import Script from "next/script";

const DynamicMapa = dynamic(() =>
  import(
    /*componente del mapa script*/ "../../componentes/casasDeCambioDivisasCiudades/Mapa/Mapa.js"
  )
);

export default function CasaCambioValencia({
  markers,
  menu_list,
  ciudad,
  general,
}) {
  const schema = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Quickgold",
    url: `https://quickgold.es/casa-cambio-${ciudad?.acf?.ciudad_minuscula}/`,
    sameAs: [
      "https://instagram.com/quickgold.es",
      "https://twitter.com/quickgoldqg",
      "https://www.facebook.com/quickgold.es",
    ],
    logo: "https://quickgold.es/assets/logo-pequeño.jpg",
    image: "https://quickgold.es/assets/logo-pequeño.jpg",
    description: ciudad?.acf?.descripcion_del_meta,
    address: {
      "@type": "PostalAddress",
      addressLocality: ciudad?.acf?.ciudad,
      addressRegion: ciudad?.acf?.ciudad,
      addressCountry: "España",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+34 ${ciudad?.acf?.telefono}`,
      contactType: "info@quickgold.es",
    },
  };
  const { ref: myRef, inView, entry } = useInView();
  return (
    <>
      <Script id="livechat" strategy="afterInteractive">
        {ciudad?.acf?.script_chat}
      </Script>

      <SEO
        title={ciudad?.acf?.titulo_del_meta}
        description={ciudad?.acf?.descripcion_del_meta}
        icon="/assets/favicon.png"
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
        {ciudad?.acf?.nonscript_chat}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
      </Head>
      <Layout menu_list={menu_list} ciudad={ciudad}>
        <div className={styles.main}>
          <Breadcrumbs
            raiz="Quickgold"
            iconoRaiz={<KeyboardArrowRightIcon />}
            urlUbicacionActual={`/casas-cambio-${ciudad?.acf?.ciudad_minuscula}`}
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual={`Casas de Cambio ${ciudad?.acf?.ciudad}`}
          />
          <Section_uno ciudad={ciudad} general={general} />
          <SectionDos
            ciudad={ciudad}
            comprar={ciudad?.acf?.vende_divisa}
            general={general}
          />
          <SectionTres ciudad={ciudad} general={general} />
          <SectionCuatro ciudad={ciudad} general={general} />
          <div
            id="contenedorMapa"
            className={styles.contenedorMapaVisibleCasaCambio}
            ref={myRef}
          >
            {inView ? <DynamicMapa markers={markers} ciudad={ciudad} /> : null}
          </div>
          {/*<Mapa markers={markers} />*/}
        </div>
      </Layout>
    </>
  );
}
const idPaginaWp = "16222";
const apiGeneral = "13848";

//const idWp = "13848";
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const ciudad1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();
  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/
  const nombreCiudad = ciudad?.acf?.ciudad_minuscula;
  const marker = await fetch(
    `https://panel.quickgold.es/markersMapa/markers${nombreCiudad}.json`
  );
  const markers = await marker.json();

  const menu = await fetch(
    `https://panel.quickgold.es/wp-json/menus/v1/menus/2219`
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
