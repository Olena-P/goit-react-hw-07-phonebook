import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
