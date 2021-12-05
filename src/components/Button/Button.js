import css from "../Button/Button.module.css";

const Button = ({ text }) => {
  return (
    <button className={css.button} type="submit">
      {text}
    </button>
  );
};

export default Button;
