import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";

export default function Main() {
  return (
    <div className={styles.Main}>
      <Menu /> 
      <Outlet />
      <Footer /> 
    </div>
  );
}
