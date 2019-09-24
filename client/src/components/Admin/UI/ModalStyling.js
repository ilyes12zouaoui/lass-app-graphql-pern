import ReactModal from "react-responsive-modal";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
const Modal = ({
  ToogleComponent,
  ContentComponent,
  minHeight = "",
  minWidth = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ToogleComponent
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <ReactModal
        styles={{
          overlay: { zIndex: 1021 },
          modal: { minWidth: minWidth, minHeight: minHeight }
        }}
        focusTrapped={false}
        showCloseIcon={false}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        center
      >
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span
              style={{
                cursor: "pointer"
              }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="color-pink"
                size="2x"
              />
            </span>
          </div>
          <ContentComponent
            onCloseModal={() => {
              setIsOpen(false);
            }}
          />
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
