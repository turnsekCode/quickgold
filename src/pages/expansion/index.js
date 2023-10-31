import Head from "next/head";
import styles from "@/styles/Home.module.css";
//import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import Section_uno from "@/componentes/ComponentesExpansion/section_1/Section_uno.js";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SEO from "@bradgarropy/next-seo";
import Layout from "@/componentes/Layout/Layout";
import Section_dos from "@/componentes/ComponentesExpansion/section_2/Section_dos";
import Section_tres from "@/componentes/ComponentesExpansion/section_3/Section_tres";
import Section_cuatro from "@/componentes/ComponentesExpansion/section_4/Section_cuatro";
import Section_cinco from "@/componentes/ComponentesExpansion/section_5/Section_cinco";
import Section_seis from "@/componentes/ComponentesExpansion/section_6/Section_seis";
import Section_siete from "@/componentes/ComponentesExpansion/section_7/Section_siete";
import Section_ocho from "@/componentes/ComponentesExpansion/section_8/Section_ocho";

export default function Expansion({ menu_list, ciudad, general }) {
  const schema = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Quickgold",
    url: `https://quickgold.es/expansion`,
    sameAs: [
      "https://instagram.com/quickgold.es",
      "https://twitter.com/quickgoldqg",
      "https://www.facebook.com/quickgold.es",
    ],
    logo: "https://quickgold.es/assets/logo-pequeño.jpg",
    image: "https://quickgold.es/assets/logo-pequeño.jpg",
    description: ciudad?.acf?.description_del_meta,
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

  return (
    <>
      <SEO
        title={ciudad?.acf?.titulo_del_meta}
        description={ciudad?.description_del_meta}
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
          {/*  <Breadcrumbs
            raiz="Quickgold"
            iconoRaiz={<KeyboardArrowRightIcon />}
            urlUbicacionActual={"/expansion"}
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual={"Abrir una tienda Quickgold"}
    />*/}
        </div>
        <Section_uno />
        <Section_dos />
        <Section_tres />
        <Section_cuatro />
        <Section_cinco />
        <Section_seis />
        <Section_siete />
        <Section_ocho />
      </Layout>
    </>
  );
}
const idPaginaWp = "2700";
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
  const menu = await fetch(
    `https://panel.quickgold.es/wp-json/menus/v1/menus/2219`
  );
  const menu_list = await menu.json();

  return {
    props: {
      //markers,
      menu_list,
      ciudad,
      general,
    },
    revalidate: 1,
  };
}
