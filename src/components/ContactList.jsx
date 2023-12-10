import { useSelector } from "react-redux";
import { selectContacts } from "../redux/selectors";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
