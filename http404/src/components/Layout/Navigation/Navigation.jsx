import { Link } from "react-router-dom";
import { auth } from "../../../Api/firebase";
import { signOut } from "firebase/auth";
import styles from "./Navigation.module.css";
import logo from "./atena_logo1.png";
import avatar from "./atena_avatar1.png";

const Navigation = ({ user }) => {
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <img className={styles.logoAtena} src={logo} alt="logo Atena"></img>
      </Link>
      <div className={styles.navigationDetails}>
        <div className={styles.btnWrapper}>
          {!user && (
            <>
              <Link to="auth/login">
                <button>Zaloguj się</button>
              </Link>
              <Link to="auth/register">
                <button>Zarejestruj się</button>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link to="auth/UserProfile">
                <button>Panel klienta</button>
              </Link>
              <Link to="/">
                <button onClick={() => signOut(auth)}>Wyloguj się</button>
              </Link>
            </>
          )}
        </div>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatarAtena}
            src={avatar}
            alt="avatar Atena"
          ></img>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
