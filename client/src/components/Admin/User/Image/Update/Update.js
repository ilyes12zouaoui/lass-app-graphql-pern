import React from "react";
import ModalStyling from "../../../UI/ModalStyling";
import Button from "./Button/Button";
import ImageContainer from "./Form/ImageContainer";
import ModalFormLayout from "../../../HOC/FormLayout/ModalFormLayout";
const Update = () => {
  return (
    <ModalStyling
      minHeight={"80%"}
      minWidth={"50%"}
      ToogleComponent={props => (
        <Button {...props}>Update profile Image</Button>
      )}
      ContentComponent={({ onCloseModal }) => (
        <ModalFormLayout title="Update Image">
          <ImageContainer onCloseModal={onCloseModal} />
        </ModalFormLayout>
      )}
    />
  );
};

export default Update;
