import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.background}>
        <img
          className={styles.logoMain}
          src="../img/LogoMain.png"
          alt="Logo"
        />
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/AddVideo">
              Nuevo video
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}