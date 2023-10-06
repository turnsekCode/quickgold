import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import Section_uno from "@/componentes/ComponentePaginaTienda/Section_1/Section_uno";
import Layout from "@/componentes/Layout/Layout";
import SEO from "@bradgarropy/next-seo";
import Section_dos from "@/componentes/ComponentePaginaTienda/Section_2/Section_dos";

const schema = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: "Quickgold",
  url: "https://quickgold.es/tiendas/",
  sameAs: [
    "https://instagram.com/quickgold.es",
    "https://twitter.com/quickgoldqg",
    "https://www.facebook.com/quickgold.es",
  ],
  logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  description:
    "Buscador de tiendas Quickgold. Encuentra tu tienda compro oro e infórmate de todos los servicios que se prestan en ella. Ubicación, teléfono, horarios y más",
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
  alcaladehenares,
  alcobendas,
  alcorcon,
  alicante,
  almeria,
  barcelona,
  benidorm,
  bilbao,
  cadiz,
  cartagena,
  castellon,
  cordoba,
  elche,
  getafe,
  gijon,
  granada,
  lacoruna,
  leon,
  logrono,
  madrid,
  malaga,
  marbella,
  murcia,
  oviedo,
  palma,
  reus,
  roquetasdemar,
  santacruzdetenerife,
  santander,
  santiagodecompostela,
  sevilla,
  tarragona,
  tenerife,
  valencia,
  valladolid,
  vigo,
  zaragoza,
}) {
  return (
    <>
      <SEO
        title="Tiendas compro oro Quickgold | Más de 60 Tiendas en España"
        description="Buscador de tiendas Quickgold. Encuentra tu tienda compro oro e infórmate de todos los servicios que se prestan en ella. Ubicación, teléfono, horarios y más"
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
        <link
          rel="stylesheet preload prefetch"
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          as="style"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs />
          <Section_uno />
          <Section_dos
            alcaladehenares={alcaladehenares}
            alcobendas={alcobendas}
            alcorcon={alcorcon}
            alicante={alicante}
            almeria={almeria}
            barcelona={barcelona}
            benidorm={benidorm}
            bilbao={bilbao}
            cadiz={cadiz}
            cartagena={cartagena}
            castellon={castellon}
            cordoba={cordoba}
            elche={elche}
            getafe={getafe}
            gijon={gijon}
            granada={granada}
            lacoruna={lacoruna}
            leon={leon}
            logrono={logrono}
            madrid={madrid}
            malaga={malaga}
            marbella={marbella}
            murcia={murcia}
            oviedo={oviedo}
            palma={palma}
            reus={reus}
            roquetasdemar={roquetasdemar}
            santacruzdetenerife={santacruzdetenerife}
            santander={santander}
            santiagodecompostela={santiagodecompostela}
            sevilla={sevilla}
            tarragona={tarragona}
            tenerife={tenerife}
            valencia={valencia}
            valladolid={valladolid}
            vigo={vigo}
            zaragoza={zaragoza}
            ListadoCiudades={ListadoCiudades}
          />
        </div>
      </Layout>
    </>
  );
}
//const idWp = "13848";
const idAlcladehenares = "alcaladehenares";
const idAlcobendas = "alcobendas";
const idAlicante = "alicante";
const idAlcorcon = "alcorcon";
const idAlmeria = "almeria";
const idBarcelona = "barcelona";
const idBenidorm = "benidorm";
const idBilbao = "bilbao";
const idCadiz = "cadiz";
const idCartagena = "cartagena";
const idCastellon = "castellon";
const idCordoba = "cordoba";
const idElche = "elche";
const idGetafe = "getafe";
const idGijon = "gijon";
const idGranada = "granada";
const idLaCoruna = "lacoruna";
const idLeon = "leon";
const idLogrono = "logrono";
const idMadrid = "madrid";
const idMalaga = "malaga";
const idMarbella = "marbella";
const idMurcia = "murcia";
const idOviedo = "oviedo";
const idPalma = "palma";
const idReus = "reus";
const idRoquetasDeMar = "roquetasdemar";
const idSantaCruz = "santacruzdetenerife";
const idSantander = "santander";
const idSantiago = "santiagodecompostela";
const idSevilla = "sevilla";
const idTarragona = "tarragona";
const idTenerife = "tenerife";
const idValencia = "valencia";
const idValladolid = "valladolid";
const idVigo = "vigo";
const idZaragoza = "zaragoza";
export async function getStaticProps() {
  const Listado = await fetch(`https://quickgold.es/listadoCiudades.json`);
  const ListadoCiudades = await Listado.json();
  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();
  //datos de las tiendas en mapas
  const alcaladehenares_ = await fetch(
    `https://quickgold.es/markers${idAlcladehenares}.json`
  );
  const alcaladehenares = await alcaladehenares_.json();
  const alcobendas_ = await fetch(
    `https://quickgold.es/markers${idAlcobendas}.json`
  );
  const alcobendas = await alcobendas_.json();
  const alcorcon_ = await fetch(
    `https://quickgold.es/markers${idAlcorcon}.json`
  );
  const alcorcon = await alcorcon_.json();
  const alicante_ = await fetch(
    `https://quickgold.es/markers${idAlicante}.json`
  );
  const alicante = await alicante_.json();
  const almeria_ = await fetch(`https://quickgold.es/markers${idAlmeria}.json`);
  const almeria = await almeria_.json();
  const barcelona_ = await fetch(
    `https://quickgold.es/markers${idBarcelona}.json`
  );
  const barcelona = await barcelona_.json();
  const benidorm_ = await fetch(
    `https://quickgold.es/markers${idBenidorm}.json`
  );
  const benidorm = await benidorm_.json();
  const bilbao_ = await fetch(`https://quickgold.es/markers${idBilbao}.json`);
  const bilbao = await bilbao_.json();
  const cadiz_ = await fetch(`https://quickgold.es/markers${idCadiz}.json`);
  const cadiz = await cadiz_.json();
  const cartagena_ = await fetch(
    `https://quickgold.es/markers${idCartagena}.json`
  );
  const cartagena = await cartagena_.json();
  const castellon_ = await fetch(
    `https://quickgold.es/markers${idCastellon}.json`
  );
  const castellon = await castellon_.json();
  const cordoba_ = await fetch(`https://quickgold.es/markers${idCordoba}.json`);
  const cordoba = await cordoba_.json();
  const elche_ = await fetch(`https://quickgold.es/markers${idElche}.json`);
  const elche = await elche_.json();
  const getafe_ = await fetch(`https://quickgold.es/markers${idGetafe}.json`);
  const getafe = await getafe_.json();
  const gijon_ = await fetch(`https://quickgold.es/markers${idGijon}.json`);
  const gijon = await gijon_.json();
  const granada_ = await fetch(`https://quickgold.es/markers${idGranada}.json`);
  const granada = await granada_.json();
  const lacoruna_ = await fetch(
    `https://quickgold.es/markers${idLaCoruna}.json`
  );
  const lacoruna = await lacoruna_.json();
  const leon_ = await fetch(`https://quickgold.es/markers${idLeon}.json`);
  const leon = await leon_.json();
  const logrono_ = await fetch(`https://quickgold.es/markers${idLogrono}.json`);
  const logrono = await logrono_.json();
  const madrid_ = await fetch(`https://quickgold.es/markers${idMadrid}.json`);
  const madrid = await madrid_.json();
  const malaga_ = await fetch(`https://quickgold.es/markers${idMalaga}.json`);
  const malaga = await malaga_.json();
  const marbella_ = await fetch(
    `https://quickgold.es/markers${idMarbella}.json`
  );
  const marbella = await marbella_.json();
  const murcia_ = await fetch(`https://quickgold.es/markers${idMurcia}.json`);
  const murcia = await murcia_.json();
  const oviedo_ = await fetch(`https://quickgold.es/markers${idOviedo}.json`);
  const oviedo = await oviedo_.json();
  const palma_ = await fetch(`https://quickgold.es/markers${idPalma}.json`);
  const palma = await palma_.json();
  const roquetasdemar_ = await fetch(
    `https://quickgold.es/markers${idRoquetasDeMar}.json`
  );
  const roquetasdemar = await roquetasdemar_.json();
  const reus_ = await fetch(`https://quickgold.es/markers${idReus}.json`);
  const reus = await reus_.json();
  const santacruz_ = await fetch(
    `https://quickgold.es/markers${idSantaCruz}.json`
  );
  const santacruzdetenerife = await santacruz_.json();
  const santander_ = await fetch(
    `https://quickgold.es/markers${idSantander}.json`
  );
  const santander = await santander_.json();
  const santiago_ = await fetch(
    `https://quickgold.es/markers${idSantiago}.json`
  );
  const santiagodecompostela = await santiago_.json();
  const sevilla_ = await fetch(`https://quickgold.es/markers${idSevilla}.json`);
  const sevilla = await sevilla_.json();
  const tarragona_ = await fetch(
    `https://quickgold.es/markers${idTarragona}.json`
  );
  const tarragona = await tarragona_.json();
  const tenerife_ = await fetch(
    `https://quickgold.es/markers${idTenerife}.json`
  );
  const tenerife = await tenerife_.json();
  const valencia_ = await fetch(
    `https://quickgold.es/markers${idValencia}.json`
  );
  const valencia = await valencia_.json();
  const valladolid_ = await fetch(
    `https://quickgold.es/markers${idValladolid}.json`
  );
  const valladolid = await valladolid_.json();
  const vigo_ = await fetch(`https://quickgold.es/markers${idVigo}.json`);
  const vigo = await vigo_.json();
  const zaragoza_ = await fetch(
    `https://quickgold.es/markers${idZaragoza}.json`
  );
  const zaragoza = await zaragoza_.json();
  // Pass data to the page via props
  return {
    props: {
      menu_list,
      ListadoCiudades,
      alcaladehenares,
      alcobendas,
      alcorcon,
      alicante,
      almeria,
      barcelona,
      benidorm,
      bilbao,
      cadiz,
      cartagena,
      castellon,
      cordoba,
      elche,
      getafe,
      gijon,
      granada,
      lacoruna,
      leon,
      logrono,
      madrid,
      malaga,
      marbella,
      murcia,
      oviedo,
      palma,
      reus,
      roquetasdemar,
      santacruzdetenerife,
      santander,
      santiagodecompostela,
      sevilla,
      tarragona,
      tenerife,
      valencia,
      valladolid,
      vigo,
      zaragoza,
    },
    revalidate: 1,
  };
}
