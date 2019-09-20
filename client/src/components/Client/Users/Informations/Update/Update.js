import React from "react";
import Modal from "../../../UI/Modal";
import Button from "./Button/Button";
import GeneralInformationContainer from "./Form/GeneralInformationContainer";
import ModalFormLayout from "../../../HOC/FormLayout/ModalFormLayout";
const Update = () => {
  return (
    <div>
      <Modal
        ToogleComponent={props => (
          <Button {...props}>Update Informations</Button>
        )}
        ContentComponent={({ onCloseModal }) => (
          <ModalFormLayout title="Update Informations">
            <GeneralInformationContainer onCloseModal={onCloseModal} />
          </ModalFormLayout>
        )}
      />
    </div>
  );
};

export default Update;
