import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "./atena_logo1.png";
import avatar from "./atena_avatar1.png";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <img className={styles.logoAtena} src={logo} alt="logo Atena"></img>

      <div className={styles.navigationDetails}>
        <div className={styles.btnWrapper}>
          <NavLink to="signin">
            <button>Zaloguj się</button>
          </NavLink>
          <NavLink to="signup">
            <button>Zarejestruj się</button>
          </NavLink>
        </div>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatarAtena}
            src={avatar}
            alt="avatar Atena"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
