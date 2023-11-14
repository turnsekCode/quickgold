import Head from "next/head";
import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/Home.module.css";
import Layout from "@/componentes/Layout/Layout";
import SEO from "@bradgarropy/next-seo";
import Section_uno from "@/componentes/Preguntas-frecuentes/Section_1/Section_uno";
import Section_dos from "@/componentes/Preguntas-frecuentes/Section_2/Section_dos";
import Section_dos_mobile from "@/componentes/Preguntas-frecuentes/Section_2_mobil/Section_dos_mobile";
import Section_3 from "@/componentes/Preguntas-frecuentes/Section_3/Section_3";

export default function PreguntasFrecuentes({ menu_list, ciudad }) {
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
      </Head>
      <Layout menu_list={menu_list} ciudad={ciudad}>
        <div className={styles.main}>
          <Breadcrumbs
            raiz="Quickgold"
            iconoRaiz={<KeyboardArrowRightIcon />}
            urlUbicacionActual="/preguntas-frecuentes"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Preguntas frecuentes"
          />
          <Section_uno ciudad={ciudad} />
          <Section_dos ciudad={ciudad} />
          <Section_dos_mobile ciudad={ciudad} />
        </div>
        <Section_3 />
      </Layout>
    </>
  );
}
const idPaginaWp = "2702";
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

  return {
    props: {
      menu_list,
      ciudad,
    },
    revalidate: 1,
  };
}
