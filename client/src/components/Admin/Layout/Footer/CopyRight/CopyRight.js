import React from "react";
import facebookIcon from "./icons/facebook.png";
import githubIcon from "./icons/github.png";
import linkedInIcon from "./icons/linkedin.png";
import googlePlusIcon from "./icons/google-plus.png";
import { Modal, Button } from "react-bootstrap";
import style from "./CopyRight.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKissWinkHeart } from "@fortawesome/free-solid-svg-icons";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className="text-center"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          className="p-2"
          style={{ fontFamily: "sans serif", fontSize: "20px" }}
        >
          email address : ilyes.zouaoui@esprit.tn
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="m-auto" variant={"danger"} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <footer
        style={{
          minHeight: "55px",
          backgroundColor: "rgb(44, 49, 60)",
          position: "relative",
          // position: "sticky",
          bottom: 0,
          zIndex: 2,
          display: "flex",
          "justify-content": "center",
          "align-items": "center"
        }}
        className="page-footer font-small mdb-color p-2"
      >
        <div className="container text-center text-md-left">
          <div
            className="row d-flex align-items-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-md-7 col-lg-8 mb-md-0 mb-sm-2 mb-2">
              <p
                className={`text-center text-md-left m-0 ${
                  style["footer-animation"]
                }`}
                style={{
                  fontSize: "16px"
                }}
              >
                © 2019 Copyright : made by lass
                <FontAwesomeIcon
                  icon={faKissWinkHeart}
                  className={`${style["footer-animation"]} ml-1`}
                  size="lg"
                />
              </p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline" style={{ margin: 0 }}>
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/ilyes.zouaoui11"
                      target="_blank"
                    >
                      <img
                        src={facebookIcon}
                        style={{ width: "32px", height: "32px" }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ilyes-zouaoui"
                      target="_blank"
                    >
                      <img
                        src={linkedInIcon}
                        style={{ width: "32px", height: "32px" }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <img
                      onClick={() => setModalShow(true)}
                      src={googlePlusIcon}
                      style={{
                        width: "32px",
                        height: "32px",
                        cursor: "pointer"
                      }}
                    />
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/ilyes12zouaoui?tab=repositories"
                      target="_blank"
                    >
                      <img
                        src={githubIcon}
                        style={{ width: "32px", height: "32px" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
