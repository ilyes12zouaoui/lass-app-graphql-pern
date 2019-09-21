import ContactForm from "./ContactForm";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_CONTACT_US_MESSAGE } from "../../../../graphql/mutations/contactUsMessage/createContactUsMessage";
import React from "react";
import FormLayout from "../../HOC/FormLayout/FormLayout";
const InscriptionContianer = () => {
  const [createContactUsMessage, { data, loading, error }] = useMutation(
    CREATE_CONTACT_US_MESSAGE
  );
  //   if (loading) return <div>Loading ...</div>;
  //   if (error) return <GraphqlErrorHandler error={error || null} />;
  return (
    <FormLayout title="Contact Form:">
      <ContactForm
        createContactUsMessage={createContactUsMessage}
        loading={loading}
        error={error}
        data={data}
      />
    </FormLayout>
  );
};
export default InscriptionContianer;
