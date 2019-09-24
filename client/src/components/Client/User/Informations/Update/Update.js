import React from "react";
import Modal from "../../../UI/ModalStyling";
import Button from "./Button/Button";
import GeneralInformationContainer from "./Form/GeneralInformationContainer";
import PasswordContainer from "./Form/PasswordContainer";
import ModalFormLayout from "../../../HOC/FormLayout/ModalFormLayout";
const Update = () => {
  return (
    <div>
      <Modal
        minHeight={"80%"}
        minWidth={"50%"}
        ToogleComponent={props => (
          <Button {...props}>Update Informations</Button>
        )}
        ContentComponent={({ onCloseModal }) => (
          <ModalFormLayout title="Update Informations">
            <GeneralInformationContainer onCloseModal={onCloseModal} />
          </ModalFormLayout>
        )}
      />

      <Modal
        minHeight={"80%"}
        minWidth={"50%"}
        ToogleComponent={props => <Button {...props}>Update Password</Button>}
        ContentComponent={({ onCloseModal }) => (
          <ModalFormLayout title="Update Password">
            <PasswordContainer onCloseModal={onCloseModal} />
          </ModalFormLayout>
        )}
      />
    </div>
  );
};

export default Update;
