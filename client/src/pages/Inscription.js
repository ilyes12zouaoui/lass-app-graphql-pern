import React from "react";
import InscriptionForm from "../components/Client/Authentication/Inscription/InscriptionContainer";

import FormLayout from "../components/Client/HOC/FormLayout/FormLayout";
const Inscription = () => {
  return (
    <FormLayout title="Inscription">
      <InscriptionForm />
    </FormLayout>
  );
};

export default Inscription;
