import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import Section_uno from "@/componentes/Section_1/Section_uno";
import SectionDos from "@/componentes/Section_2/SectionDos";
import SectionTres from "@/componentes/Section_3/SectionTres";
import SectionCuatro from "@/componentes/Section_4/SectionCuatro";
import Mapa from "@/componentes/Mapa/Mapa";
import Layout from "@/componentes/Layout/Layout";

const DynamicMapa = dynamic(() =>
  import(/*componente del mapa script*/ "../componentes/Mapa/Mapa.js")
);

export default function Home({ dataIdWp, markers, menu_list, datos }) {
  return (
    <>
      <Head>
        <title>Casas de Cambio en Madrid | Cambio de Divisas Madrid</title>
        <meta
          name="description"
          content="Casas de cambio en Madrid. Cambia dólares a euros en nuestras oficinas de cambio quickgold. Cambio de moneda extranjera al momento y sin comisiones. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs />
          <Section_uno />
          <SectionDos datos={datos} />
          <SectionTres />
          <SectionCuatro />
          <DynamicMapa markers={markers} />
          {/*<Mapa markers={markers} />*/}
        </div>
      </Layout>
    </>
  );
}
const idWp = "13848";
export async function getStaticProps() {
  const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();

  const marker = await fetch(`https://quickgold.es/markers.json`);
  const markers = await marker.json();

  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  const data = await fetch(
    `https://quickgold.es/archivos-cache/Fixingmadrid.txt`
  );
  const datos = await data.json();

  // Pass data to the page via props
  return { props: { dataIdWp, markers, menu_list, datos }, revalidate: 1 };
}
