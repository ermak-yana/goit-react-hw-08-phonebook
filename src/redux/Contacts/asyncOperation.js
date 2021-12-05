import {
  fetchContact,
  fetchContactResolve,
  fetchContactReject,
  fetchAddContact,
  fetchAddContactResolve,
  fetchAddContactReject,
  fetchRemoveContact,
  fetchRemoveContactResolve,
  fetchRemoveContactReject,
} from "../Contacts/contactSlice";
import { selectUserToken } from "../Auth/AuthSelectors";

export const getPhoneContact = () => async (dispatch, getState) => {
  const token = selectUserToken(getState());
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  };
  dispatch(fetchContact());
  try {
    await fetch(
      `https://connections-api.herokuapp.com/contacts`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => dispatch(fetchContactResolve(response)));
  } catch (error) {
    dispatch(fetchContactReject(error.message));
  }
};

export const addContactAsync = (contact) => async (dispatch, getState) => {
  const token = selectUserToken(getState());
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  };
  dispatch(fetchAddContact());
  try {
    const data = await fetch(
      `https://connections-api.herokuapp.com/contacts`,
      requestOptions
    ).then((response) => response.json());
    dispatch(fetchAddContactResolve(data));
  } catch (error) {
    dispatch(fetchAddContactReject(error.message));
  }
};

export const removeContactAsync = (id) => async (dispatch, getState) => {
  const token = selectUserToken(getState());
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `${token}`,
    },
  };
  dispatch(fetchRemoveContact());
  try {
    await fetch(
      `https://connections-api.herokuapp.com/contacts/${id}`,
      requestOptions
    ).then((response) => response.json());
    dispatch(fetchRemoveContactResolve(id));
  } catch (error) {
    dispatch(fetchRemoveContactReject(error.message));
  }
};
