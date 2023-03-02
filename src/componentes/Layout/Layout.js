import styles from "./layout.module.css";
import Header from "../../componentes/Cabecera/Header";
import Footer from "../Footer/Footer";
import BotonLamarFijo from "../BotonLlamarFijo/BotonLamarFijo";

export default function Layout({ children, menu_list }) {
  return (
    <>
      <main className={styles.contenedor}>
        <Header menu_list={menu_list} />
        {children}
        <Footer />
        <BotonLamarFijo />
      </main>
    </>
  );
}
