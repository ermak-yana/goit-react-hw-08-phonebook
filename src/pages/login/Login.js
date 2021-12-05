import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectUserLogin } from "../../redux/Auth/AuthSelectors";
import css from "../login/Login.module.css";

const Login = () => {
  const isLogin = useSelector(selectUserLogin);

  return (
    <div>
      {isLogin ? (
        <Redirect to="/contact" />
      ) : (
        <div>
          <h2 className={css.title}>Login</h2>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default Login;
