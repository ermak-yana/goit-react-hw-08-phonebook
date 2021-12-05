import { useState } from "react";
import { registerUser } from "../../redux/Auth/AuthOperation";
import { useDispatch } from "react-redux";
import css from "../RegForm/RegForm.module.css";
import Button from "../Button/Button";

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const regSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(registerUser(user));
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form className={css.form} onSubmit={regSubmit}>
      <label className={css.label}>
        <p className={css.description}>Enter you name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          onChange={handleChangeName}
          autoComplete="on"
        />
      </label>
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

      <Button text="Registration" />
    </form>
  );
};

export default RegForm;
