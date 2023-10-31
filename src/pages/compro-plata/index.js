import Head from "next/head";
import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/Home.module.css";
import Layout from "@/componentes/Layout/Layout";
import SEO from "@bradgarropy/next-seo";
import Section_uno from "@/componentes/Compro-plata/Section_1/Section_uno";
import Section_dos from "@/componentes/Compro-plata/Section_2/Section_dos";
import Section_tres from "@/componentes/Compro-plata/Section_3/Section_tres";
import Section_cuatro from "@/componentes/Compro-plata/Section_4/Section_cuatro";
import Section_Seis from "@/componentes/Compro-plata/Section_6/Section_seis";
import Section_seis_mobil from "@/componentes/Compro-plata/Section_6_mobil/Section_seis_mobil";
import Section_siete from "@/componentes/Compro-plata/Section_7/Section_siete";

export default function ComproPlata({ menu_list, ciudad, listadoUrlCiudad }) {
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
            urlUbicacionActual="/compro-plata/"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Compro Plata"
          />
          <Section_uno ciudad={ciudad} />
          <Section_tres ciudad={ciudad} listadoUrlCiudad={listadoUrlCiudad} />
          <Section_dos ciudad={ciudad} />
        </div>

        <Section_cuatro ciudad={ciudad} />
        <Section_Seis ciudad={ciudad} />
        <Section_seis_mobil ciudad={ciudad} />
        <Section_siete
          ciudad={ciudad}
          //listadoCiudadesServicios={listadoCiudadesServicios}
        />
      </Layout>
    </>
  );
}
const idTienda = "comproplata";
const idPaginaWp = "377";
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
  const Listado = await fetch(
    `https://panel.quickgold.es/ListadoDeUrlDeCiudad/listadoUrlCiudad.json`
  );
  const listadoUrlCiudad = await Listado.json();
  const general = await res.json();
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/

  const menu = await fetch(
    `https://panel.quickgold.es/wp-json/menus/v1/menus/2219`
  );
  const menu_list = await menu.json();

  return {
    props: {
      menu_list,
      ciudad,
      listadoUrlCiudad,
    },
    revalidate: 1,
  };
}
