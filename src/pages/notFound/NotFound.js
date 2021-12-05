import NotRoute from "../../assets/NotFound.jpg";
import css from "../notFound/NotFound.module.css";

const NotFound = () => {
  return (
    <section className={css.section}>
      <img src={NotRoute} alt="404" />
    </section>
  );
};

export default NotFound;
