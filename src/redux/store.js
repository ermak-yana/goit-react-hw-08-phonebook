import { configureStore } from "@reduxjs/toolkit";
import { phoneBook } from "../redux/Contacts/contactSlice";
import user from "../redux/Auth/userSlice";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBook,
    user: user,
  },
});
