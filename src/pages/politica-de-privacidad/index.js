import Head from "next/head";
import styles from "./estilos.module.css";
import SEO from "@bradgarropy/next-seo";
import Layout from "@/componentes/Layout/Layout";

//import { ChakraProvider } from "@chakra-ui/react";

export default function PoliticaPrivacidad({ menu_list, ciudad }) {
  return (
    <>
      <SEO
        title={ciudad?.acf?.campos_para_compro_oro?.titulo_del_meta}
        description={ciudad?.acf?.campos_para_compro_oro?.description_del_meta}
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
          <h1 className={styles.titulo}>
            Política de privacidad y protección de datos
          </h1>
          <div>
            <p>
              A efecto del previsto en el Reglamento (UE) 2016/679, del
              Parlamento Europeo y del Consejo, de 27 de abril del 2016, GRUNGO
              SL con NIF B53910071 informa al Usuario que sus datos de carácter
              personal serán tratados con la finalidad de prestarle los
              servicios solicitados y enviarle la información sobre nuestra
              empresa que pueda ser de su interés. <br></br>
              <strong>Envío y registro de datos de carácter personal</strong>
            </p>
            <br></br>
            <p>
              El envío de datos de carácter personal es obligatorio para
              contactar y recibir información sobre los servicios prestados por
              GRUNGO SL. Así mismo, el no facilitar los datos personales
              solicitados o el no aceptar la presente política de protección de
              datos supone la imposibilidad de subscribirse, registrarse o
              recibir información de estos servicios. Cuando los datos de
              carácter personal sean obtenidos del afectado a través de redes de
              comunicaciones electrónicas o en el marco de la prestación de un
              servicio de la sociedad de la información, así como en aquellos
              otros supuestos expresamente establecidos por la ley o cuando así
              lo autorice la Agencia Española de Protección de Datos, el
              responsable del tratamiento podrá dar cumplimiento al deber de
              información establecido en el artículo 13 del Reglamento (UE)
              2016/679 facilitando al afectado almenos la información básica
              siguiente:
            </p>
            <ul className={styles.Listado}>
              <li>
                La identidad del responsable del tratamiento y de su
                representante, en su caso.
              </li>
              <li>La finalidad del tratamiento.</li>
              <li>
                La manera en que el afectado podrá ejercitar los derechos
                establecidos en los artículos 15 a 22 del Reglamento (UE)
                2016/679.
              </li>
            </ul>
            <p>
              Sin embargo, los responsables y encargados del tratamiento o, en
              su caso, sus representantes deberán mantener el registro de
              actividades de tratamiento a que se refiere el artículo 30 del
              Reglamento (UE) 2016/679, a menos que la empresa o organización
              ocupen menos de 250 personas, con la excepción de que el
              tratamiento que realice pueda suponer un riesgo para los derechos
              y libertades de los interesados, no sea ocasional, o incluya
              categorías especiales de datos personales indicados en el artículo
              9, apartado 1, o datos personales relativos a condenas e
              infracciones penales a que se refiere el artículo 10 del
              Reglamento (UE) 2016/679. Finalmente, el artículo 5.1.f) del
              Reglamento (UE) 2016/679 determina la necesidad de establecer
              garantías de seguridad adecuadas contra el tratamiento no
              autorizado o ilícito, contra la pérdida de los datos personales,
              la destrucción o el daño accidental. Esto implica el
              establecimiento de medidas técnicas y organizativas encaminadas a
              asegurar la integridad y confidencialidad de los datos personales
              y la posibilidad (artículo 5.2) de demostrar que estas medidas se
              han llevado a la práctica (responsabilidad proactiva).
            </p>
            <br></br>
            <strong>Exactitud y veracidad de los datos facilitados</strong>
            <p>
              El Usuario que envía la información a GRUNGO SL es el único
              responsable de la veracidad y corrección de los datos incluidos,
              exonerándose GRUNGO SL de cualquier responsabilidad sobre este
              tema. Los usuarios garantizan y responden, en cualquier caso, de
              la exactitud, vigencia y autenticidad de los datos personales
              facilitados, y se comprometen a mantenerlos debidamente
              actualizados. El Usuario acepta proporcionar información completa
              y correcta en el formulario de registro o suscripción. GRUNGO SL
              no responde de la veracidad de las informaciones que no sean de
              elaboración propia y de las cuales se indique otra fuente, por lo
              cual tampoco asume responsabilidad alguna en cuanto a hipotéticos
              perjuicios que pudieran originarse por el uso de esta información.
              Se exonera a GRUNGO SL de responsabilidad ante cualquier daño o
              perjuicio que pudiera sufrir el Usuario como consecuencia de
              errores, defectos u omisiones, en la información facilitada por
              GRUNGO SL siempre que proceda de fuentes ajenas a GRUNGO SL.
            </p>
            <br></br>
            <strong>Cesión de datos a terceros</strong>
            <p>
              GRUNGO SL no cederá los datos personales a terceros. Sin embargo,
              en el caso de ser cedidos a algún tercero se produciría una
              información previa solicitante el consentimiento expreso del
              afectado en virtud del artículo 4.11 del Reglamento (UE) 2016/679.
              Ejercicio de derechos de acceso, rectificación, supresión,
              limitación, portabilidad y oposición. Podrá dirigir sus
              comunicaciones y ejercitar los derechos de acceso, rectificación,
              supresión, limitación, portabilidad y oposición a través de correo
              postal en GRUNGO SL Ronda Auguste y Louis Lumiere, 23 Nave 9
              Paterna, Valencia o al email: central@panel.quickgold.es junto con
              prueba válida en derecho, como fotocopia del D.N.I. e indicando en
              el asunto «PROTECCIÓN DE DATOS».
            </p>
            <br></br>
            <strong>Cesión de datos a terceros</strong>
            <p>
              El Usuario declara haber sido informado de las condiciones sobre
              protección de datos de carácter personal, aceptando y consintiendo
              el tratamiento de las mismas por parte de GRUNGO SL, en la forma y
              para las finalidades indicadas en la presente Política de
              Protección de Datos Personales. Cambios en la presente política de
              privacidad. GRUNGO SL se reserva el derecho a modificar la
              presente política para adaptarla a novedades legislativas o
              jurisprudenciales, así como a prácticas de la industria. En dichos
              supuestos, GRUNGO SL anunciará en esta página los cambios
              introducidos con razonable antelación a su puesta en práctica.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
const idPaginaWp = "4843";
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
