import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { selectUserLogin } from "../../redux/Auth/AuthSelectors";
import css from "../NavBar/NavBar.module.css";

const NavBar = () => {
  const isLogin = useSelector(selectUserLogin);

  return (
    <div className={css.box}>
      {isLogin ? (
        <Logo className={css.logo} />
      ) : (
        <NavLink to="/">
          <button className={css.button}>Home</button>
        </NavLink>
      )}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default NavBar;
