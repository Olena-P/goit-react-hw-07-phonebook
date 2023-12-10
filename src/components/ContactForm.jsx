import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContactAsync } from "../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm, setErrors }) => {
    dispatch(addContactAsync(values))
      .unwrap()
      .then(() => resetForm())
      .catch((error) => setErrors({ name: error }));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .matches(
        /^[A-Za-z\s]+$/,
        "Invalid name format. Only letters and spaces are allowed."
      )
      .required("Name is required"),
    number: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" style={{ color: "red" }} />

        <Field type="tel" name="number" placeholder="Number" />
        <ErrorMessage name="number" component="div" style={{ color: "red" }} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
