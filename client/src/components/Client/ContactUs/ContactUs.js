import React from "react";
import Informations from "./Informations/Informations";
import ContactFormContainer from "./ContactForm/ContactFormContainer";
const FormLayout = ({ user, isOwner = false }) => {
  return (
    <>
      <Informations />
      <ContactFormContainer />
    </>
  );
};

export default FormLayout;
