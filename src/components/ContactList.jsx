import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../redux/selectors";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
