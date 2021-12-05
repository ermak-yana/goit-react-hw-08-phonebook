import PropTypes from "prop-types";
import PhoneItem from "../PhoneItem/PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectContactItem,
  selectFilter,
} from "../../redux/Contacts/contactSelectors";
import { getPhoneContact } from "../../redux/Contacts/asyncOperation";
import { selectUserLogin } from "../../redux/Auth/AuthSelectors";
import css from "../PhoneList/PhoneList.module.css";

const CreateContactList = ({ title }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectUserLogin);
  const listConcacts = useSelector(selectContactItem);
  const payload = useSelector(selectFilter);

  useEffect(() => {
    if (isLogin) {
      dispatch(getPhoneContact());
    }
  }, [dispatch, isLogin]);

  const filterContact = () => {
    return listConcacts.filter(({ name }) =>
      name.toLowerCase().includes(payload)
    );
  };

  return (
    <section className={css.block}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {filterContact().map(({ id, name, number }) => (
          <PhoneItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </section>
  );
};

CreateContactList.propTypes = {
  title: PropTypes.string,
};

export default CreateContactList;
