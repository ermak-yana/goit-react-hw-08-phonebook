import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/Auth/AuthOperation";
import Button from "../Button/Button";
import css from "../LoginForm/LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form className={css.form} onSubmit={loginSubmit}>
        <label className={css.label}>
          <p className={css.description}>Enter Email</p>
          <input
            className={css.input}
            type="text"
            name="email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>

        <label className={css.label}>
          <p className={css.description}>Password</p>
          <input
            className={css.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChangePassword}
            autoComplete="off"
          />
        </label>

        <Button text="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
