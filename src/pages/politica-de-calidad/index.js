import Head from "next/head";
import styles from "./estilos.module.css";
import SEO from "@bradgarropy/next-seo";
import Layout from "@/componentes/Layout/Layout";

//import { ChakraProvider } from "@chakra-ui/react";

export default function PoliticaCalidad({ menu_list, ciudad }) {
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
          <h1 className={styles.titulo}>Política de Calidad</h1>
          <div>
            <p>
              <strong>GRUNGO, S.L.</strong> aspira a conseguir una franquicia
              con un alto nivel de calidad en el sector de la compraventa de
              joyas, oro, metales preciosos y piedras preciosas, el empeño de
              metales preciosos y piedras preciosas y el cambio de divisas. Es
              por ello que nuestro principal objetivo es lograr la satisfacción
              de nuestros franquiciados ofreciéndoles soluciones y estrategias
              muy beneficiosas, mediante servicios de control y supervisión de
              la operativa y la calidad en los servicios.
            </p>
            <br></br>
            <br></br>
            <p>
              Para ello contamos con medios materiales y un equipo humano
              cualificado cuya misión es siempre cumplir con los requisitos
              acordados con el franquiciado y mantener un elevado grado de
              satisfacción con respecto a nuestras gestiones y atención
              personalizada.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>GRUNGO, S.L.</strong>, consciente de la importancia de la
              calidad, así como de la necesidad de una buena gestión de los
              recursos, se compromete a la difusión de dichos valores a toda la
              entidad. Para ello implanta y mantiene un SISTEMA DE GESTIÓN DE
              CALIDAD en base a los requisitos de la norma ISO 9001:2015. Dicho
              Sistema de Calidad tiene como objetivo garantizar el mejor
              cumplimiento posible de nuestros compromisos de forma que nuestros
              servicios y productos respondan mejor a las necesidades de los
              franquiciados de <strong>quickgold</strong>.
            </p>
            <br></br>
            <br></br>
            <ul className={styles.Listado}>
              <li>
                Promover un proceso de mejora continua de la eficacia del
                sistema de Gestión de Calidad.
              </li>
              <li>
                Atención continuada y personalizada desde todas las áreas de la
                organización, comprendiendo sus necesidades a través de una
                comunicación fluida.
              </li>
              <li>
                Cumplir con los requisitos del contrato de franquicia, de la
                norma ISO 9001:2015, de la legislación vigente y de otras partes
                interesadas.
              </li>
              <li>
                Mejorar continuamente nuestros servicios, realizando un
                constante esfuerzo de actualización en compraventa de joyas,
                oro, metales preciosos y piedras preciosas, empeño de metales
                preciosos y piedras preciosas y cambio de divisas que nos
                permita situarnos a la vanguardia de nuestro sector,
                adelantándonos así a las nuevas demandas y/o necesidades de los
                clientes de los franquiciados.
              </li>
              <li>
                Instruir, motivar e implicar a todo el personal en la gestión y
                desarrollo del Sistema de Gestión de la Calidad, fomentando la
                formación continua para asegurar un alto grado de cualificación
                de nuestros empleados.
              </li>
              <li>
                Facilitar el éxito de nuestros franquiciados, apoyándoles en
                todas las facetas del negocio.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
const idPaginaWp = "11074";
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
      menu_list,
      ciudad,
      general,
    },
    revalidate: 1,
  };
}
