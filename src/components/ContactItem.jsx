import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/operations";

const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
