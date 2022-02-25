import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./MainNavigation.module.css";
import AuthContext from "../../../store/Auth/auth-context.js";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/reactauth/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/reactauth/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
