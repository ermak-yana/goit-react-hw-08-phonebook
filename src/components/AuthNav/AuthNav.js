import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login">
        <button className={css.button}>Login</button>
      </NavLink>
      <NavLink to="/register">
        <button className={css.button}>Registration</button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
