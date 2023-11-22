import Head from "next/head";
//import Image from "next/image";
import dynamic from "next/dynamic";
import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/Home.module.css";
import Layout from "@/componentes/Layout/Layout";
import { useInView } from "react-intersection-observer";
import SEO from "@bradgarropy/next-seo";
import Section_uno from "@/componentes/Cambio-divisas/Section_1/Section_uno";
import Section_dos from "@/componentes/Cambio-divisas/Section_2/Section_dos";
import SectionTres from "@/componentes/Cambio-divisas/Section_3/Section_tres";
import SectionCuatro from "@/componentes/Cambio-divisas/Section_4/SectionCuatro";
import Section_cinco from "@/componentes/Cambio-divisas/Section_5/Section_cinco";
import Section_cinco_mobil from "@/componentes/Cambio-divisas/Section_5_mobil/Section_cinco_mobil";
import Section_seis from "@/componentes/Cambio-divisas/Section_6/Section_seis";
import BotonLamarFijo from "@/componentes/BotonLlamarFijo/BotonLamarFijo";

export default function CambioDivisas({
  menu_list,
  ciudad,
  divisas_list,
  listadoUrlCiudad,
  listadoCiudadesServicios,
}) {
  const { ref: myRef, inView, entry } = useInView();
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
            urlUbicacionActual="/cambio-divisas"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Cambio Divisa"
          />
          <Section_uno ciudad={ciudad} />
          <Section_dos ciudad={ciudad} listadoUrlCiudad={listadoUrlCiudad} />
          <SectionTres ciudad={ciudad} />
          <SectionCuatro ciudad={ciudad} />
          <BotonLamarFijo ciudad={ciudad} />
        </div>

        <Section_cinco ciudad={ciudad} />
        <Section_cinco_mobil ciudad={ciudad} />
        <Section_seis
          ciudad={ciudad}
          divisas_list={divisas_list}
          listadoCiudadesServicios={listadoCiudadesServicios}
        />
      </Layout>
    </>
  );
}
const idPaginaWp = "404";
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

  const divisas = await fetch(
    `https://panel.quickgold.es/archivos-cache/Fixingmadrid.txt`
  );
  const divisas_list = await divisas.json();
  const Listado = await fetch(
    `https://panel.quickgold.es/ListadoDeUrlDeCiudad/listadoUrlCiudad.json`
  );
  const listadoUrlCiudad = await Listado.json();
  const listadoServicio = await fetch(
    `https://panel.quickgold.es/ListadoCiudadesServicio/listadoCiudadesServicioDivisa.json`
  );
  const listadoCiudadesServicios = await listadoServicio.json();

  return {
    props: {
      menu_list,
      ciudad,
      divisas_list,
      listadoUrlCiudad,
      listadoCiudadesServicios,
    },
    revalidate: 1,
  };
}
