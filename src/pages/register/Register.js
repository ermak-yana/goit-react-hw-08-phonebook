import RegForm from "../../components/RegForm/RegForm";
import css from "../register/Register.module.css";

const Register = () => {
  return (
    <div>
      <h2 className={css.title}>Registration</h2>
      <RegForm />
    </div>
  );
};

export default Register;
