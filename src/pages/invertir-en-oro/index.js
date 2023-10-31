import Head from "next/head";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/Home.module.css";
import Layout from "@/componentes/Layout/Layout";
import SEO from "@bradgarropy/next-seo";
import Section_uno from "@/componentes/Invertir-en-oro/Section_1/Section_uno";
import Section_dos from "@/componentes/Invertir-en-oro/Section_2/Section_dos";
import Section_tres from "@/componentes/Invertir-en-oro/Section_3/Section_tres";
import Section_cuatro from "@/componentes/Invertir-en-oro/Section_4/Section_cuatro";

export default function InvertirEnOro({ menu_list, ciudad, popUpCiudades }) {
  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(
      `https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`,
      {
        cache: "no-cache",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(true);
      });
  }, []);
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
            urlUbicacionActual="/invertir-en-oro/"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Inversión en oro"
          />
          <Section_uno ciudad={ciudad} popUpCiudades={popUpCiudades} />
          <Section_dos ciudad={ciudad} data={data} loading={loading} />
          <Section_tres ciudad={ciudad} />
        </div>
        <Section_cuatro ciudad={ciudad} />
      </Layout>
    </>
  );
}
const idTienda = "invertirenoro";
const idPaginaWp = "2705";
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
  const menu = await fetch(
    `https://panel.quickgold.es/wp-json/menus/v1/menus/2219`
  );
  const menu_list = await menu.json();
  const ciudadPopUp = await fetch(
    `https://panel.quickgold.es/ciudadesDelPopUp/PopUpCiudades.json`
  );
  const popUpCiudades = await ciudadPopUp.json();

  return {
    props: {
      menu_list,
      ciudad,
      popUpCiudades,
    },
    revalidate: 1,
  };
}