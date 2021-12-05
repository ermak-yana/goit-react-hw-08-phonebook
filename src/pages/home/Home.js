import { selectUserLogin } from "../../redux/Auth/AuthSelectors";
import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "../home/Home.module.css";

const Home = () => {
  const isLogin = useSelector(selectUserLogin);

  return (
    <div>
      {isLogin ? (
        <Contact />
      ) : (
        <div className={css.box}>
          <h1>PhoneBook</h1>
          <p className={css.description}>
            You need to register or log into your account for further use of the
            application
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
