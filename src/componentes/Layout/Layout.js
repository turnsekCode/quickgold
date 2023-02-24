import styles from "./layout.module.css";
import Header from "../../componentes/Cabecera/Header";
import Footer from "../Footer/Footer";
import BotonLamarFijo from "../BotonLlamarFijo/BotonLamarFijo";

export default function Layout({ children }) {
  return (
    <>
      <main className={styles.contenedor}>
        <Header />
        {children}
        <Footer />
        <BotonLamarFijo />
      </main>
    </>
  );
}
