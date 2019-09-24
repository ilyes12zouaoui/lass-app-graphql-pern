import ReactModal from "react-responsive-modal";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faTimesCircle,
  faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import SlideIcon from "./SlideIcon";

import UserContainer from "./Links/UserContainer";
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SlideIcon
        onOpenModal={() => {
          setIsOpen(true);
        }}
      />
      <ReactModal
        styles={{
          overlay: { zIndex: 1041, padding: "0" },
          modal: { width: "270px", margin: "0", height: "100%", padding: "0" }
        }}
        // classNames={{
        //   transitionEnter: style.aa1,
        //   transitionEnterActive: style.aa2,
        //   transitionExit: style.aa2,
        //   transitionExitActive: style.aa1
        // }}
        focusTrapped={false}
        showCloseIcon={false}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        center
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "5px 5px 0px 0px"
            }}
          >
            <span
              style={{
                cursor: "pointer"
              }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="color-pink"
                size="2x"
              />
            </span>
          </div>
          <div>
            <UserContainer />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
