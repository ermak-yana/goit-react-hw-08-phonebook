import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/Contacts/contactSlice";
import { selectFilter } from "../../redux/Contacts/contactSelectors";
import css from "../Filter/Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.conteiner}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
