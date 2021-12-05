import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutUser } from "../../redux/Auth/AuthOperation";
import { selectUserMail } from "../../redux/Auth/AuthSelectors";
import css from "../UserMenu/UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const mail = useSelector(selectUserMail);

  return (
    <div className={css.box}>
      <p className={css.name}>{mail}</p>
      <NavLink to="/">
        <button className={css.button} onClick={() => dispatch(logOutUser())}>
          LogOut
        </button>
      </NavLink>
    </div>
  );
};

export default UserMenu;
