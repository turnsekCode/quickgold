import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import Section_uno from "@/componentes/Section_1/Section_uno";
import SectionCuatro from "@/componentes/Section_3/SectionTres.js";
import Layout from "@/componentes/Layout/Layout";
import Section_dos from "@/componentes/Section_2/Section_dos.js";
import Section_cinco from "@/componentes/Section_5/Section_cinco";
import Section_seis from "@/componentes/Section_6/Section_seis";
import SEO from "@bradgarropy/next-seo";

const schema = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: "Quickgold",
  url: "https://quickgold.es/cambio-dolares-euros/",
  sameAs: [
    "https://instagram.com/quickgold.es",
    "https://twitter.com/quickgoldqg",
    "https://www.facebook.com/quickgold.es",
  ],
  logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  description:
    "Cambia dólares por euros en nuestras oficinas de cambio de divisas Quickgold. Precio del dólar siempre actualizado y el mejor tipo de cambio de tu ciudad.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "España",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34 900 373 629",
    contactType: "info@quickgold.es",
  },
};

export default function Home({
  menu_list,
  ListadoCiudades,
  listadoCiudadesServicios,
}) {
  return (
    <>
      <SEO
        title="Cambiar dólares a euros | Precio del dólar hoy en Quickgold"
        description="Cambia dólares por euros en nuestras oficinas de cambio de divisas Quickgold. Precio del dólar siempre actualizado y el mejor tipo de cambio de tu ciudad."
        icon="../../../../assets/favicon.png"
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
        <meta
          name="TTBUdVkwdzVOOVRpSWV3Nk03anRNMj10"
          value="934244db009f8690634f7f94258d34e2"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs />
          <Section_uno />
          <SectionCuatro ListadoCiudades={ListadoCiudades} />
          <Section_dos />
          <Section_cinco />
          <Section_seis listadoCiudadesServicios={listadoCiudadesServicios} />
        </div>
      </Layout>
    </>
  );
}
//const idWp = "13848";
export async function getStaticProps() {
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/
  const Listado = await fetch(`https://quickgold.es/listadoCiudades.json`);
  const ListadoCiudades = await Listado.json();

  const listadoServicio = await fetch(
    `https://quickgold.es/listadoCiudadesServicio.json`
  );
  const listadoCiudadesServicios = await listadoServicio.json();

  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  // Pass data to the page via props
  return {
    props: {
      menu_list,
      ListadoCiudades,
      listadoCiudadesServicios,
    },
    revalidate: 1,
  };
}
