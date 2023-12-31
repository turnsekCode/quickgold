import Head from "next/head";
import styles from "@/styles/Home.module.css";
//import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import Section_uno from "@/componentes/trabaja-con-nosotros/section_1/Section_uno.js";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SEO from "@bradgarropy/next-seo";
import Layout from "@/componentes/Layout/Layout";
import Section_dos from "@/componentes/trabaja-con-nosotros/section_2/Section_dos";
import Section_tres from "@/componentes/trabaja-con-nosotros/Section_3/Section_tres";
import Section_cuatro from "@/componentes/trabaja-con-nosotros/section_4/Section_cuatro";
import Section_cinco from "@/componentes/trabaja-con-nosotros/section_5/Section_cinco";

//import { ChakraProvider } from "@chakra-ui/react";

export default function TrabajaConNosotros({
  markers,
  menu_list,
  ciudad,
  general,
}) {
  return (
    <>
      <SEO
        title={ciudad?.acf?.titulo_del_meta}
        description={ciudad?.acf?.description_del_meta}
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
      </Layout>
    </>
  );
}
const idPaginaWp = "4770";
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
  /*const nombreCiudad = ciudad?.acf?.ciudad_minuscula;
  const marker = await fetch(
    `https://panel.quickgold.es/markersMapa/markers${nombreCiudad}.json`
  );
  const markers = await marker.json();*/

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
