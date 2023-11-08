import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/BreadcrumbsRaiz/Breadcrumbs.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SEO from "@bradgarropy/next-seo";
import Layout from "@/componentes/Layout/Layout";
import { useInView } from "react-intersection-observer";
import MapaDelSitio from "@/componentes/ComponenteMapaDelSitio/MapaDelSitio";

export default function ListadoUrls({ 
  menu_list,
  alcaladehenaresCiudad,
  alcaladehenaresTienda,
  alcobendasCiudad,
  alcobendasTienda,
  alcorconCiudad,
  alcorconTienda,
  alicanteCiudad,
  alfonso,
  sanfrancisco,
  almeriaCiudad,
  almeriaTienda,
 }) {
  const { ref: myRef, inView, entry } = useInView();
  return (
    <>
      <SEO
        title=""
        description=""
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
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
        <Breadcrumbs
            raiz="Quickgold"
            iconoRaiz={<KeyboardArrowRightIcon />}
            urlUbicacionActual="/mapa-del-sitio/"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Mapa del sitio"
          />
        </div>
        <MapaDelSitio 
        alcaladehenaresCiudad={alcaladehenaresCiudad}
        alcaladehenaresTienda={alcaladehenaresTienda}
        alcobendasCiudad={alcobendasCiudad}
        alcobendasTienda={alcobendasTienda}
        alcorconCiudad={alcorconCiudad}
        alcorconTienda={alcorconTienda}
        alicanteCiudad={alicanteCiudad}
        alfonso={alfonso}
        sanfrancisco={sanfrancisco}
        almeriaCiudad={almeriaCiudad}
        almeriaTienda={almeriaTienda}
        />
      </Layout>
    </>
  );
}
  


  
  export async function getStaticProps() {


//CIUDAD Alcalá de Henares
const alcaladehenaresCiudad_ = await fetch(
`https://panel.quickgold.es/wp-json/acf/v3/pages/6685`
);
const alcaladehenaresCiudad = await alcaladehenaresCiudad_.json();
//TIENDA Alcalá de Henares
const alcaladehenaresTienda_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/6686`
  );
const alcaladehenaresTienda = await alcaladehenaresTienda_.json();

//CIUDAD Alcobendas
const alcobendasCiudad_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/4399`
  );
const alcobendasCiudad = await alcobendasCiudad_.json();
//TIENDA Alcobendas
const alcobendasTienda_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/16944`
  );
const alcobendasTienda = await alcobendasTienda_.json();

//CIUDAD Alcorcón
const alcorconCiudad_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/16922`
  );
const alcorconCiudad = await alcorconCiudad_.json();
//TIENDA Alcorcón
const alcorconTienda_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/5357`
  );
const alcorconTienda = await alcorconTienda_.json();

//CIUDAD Alicante
const alicanteCiudad_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/4975`
  );
const alicanteCiudad = await alicanteCiudad_.json();
//TIENDA Alfonso el Sabio
const alfonso_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/5371`
  );
const alfonso = await alfonso_.json();
//TIENDA San Francisco
const sanfrancisco_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/5394`
  );
const sanfrancisco = await sanfrancisco_.json();

//CIUDAD Almería
const almeriaCiudad_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/4995`
  );
const almeriaCiudad = await almeriaCiudad_.json();
//TIENDA Almería
const almeriaTienda_ = await fetch(
  `https://panel.quickgold.es/wp-json/acf/v3/pages/5387`
  );
const almeriaTienda = await almeriaTienda_.json();


//INICIO MENÚ
    const menu = await fetch(
      `https://panel.quickgold.es/wp-json/menus/v1/menus/2219`
    );
    const menu_list = await menu.json();
//FIN MENÚ
  return {
    props: {
      menu_list,
      alcaladehenaresCiudad,
      alcaladehenaresTienda,
      alcobendasCiudad,
      alcobendasTienda,
      alcorconCiudad,
      alcorconTienda,
      alicanteCiudad,
      alfonso,
      sanfrancisco,
      almeriaCiudad,
      almeriaTienda,
    },
    revalidate: 1,
  };
}
