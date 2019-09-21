import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import style from "./Informations.module.css";
const FormLayout = ({ user, isOwner = false }) => {
  return (
    <>
      <Container className="pt-5 pb-5">
        {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
        <Row>
          <Col
            lg={{ offset: 2, span: 8 }}
            md={{ offset: 2, span: 8 }}
            sm={{ offset: 2, span: 8 }}
            xs={{ offset: 1, span: 10 }}
            className="fly-box p-sm-5 p-4"
          >
            <div>
              <h1 className="color-blue">Contact Informations:</h1>
              <hr />
              <div className={style["profile-information-lane"]}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="color-blue"
                  size="lg"
                />
                <span className={style["profile-information-lane-span"]}>
                  ilyes.zouaoui@esprit.tn
                </span>
              </div>

              <div className={style["profile-information-lane"]}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="color-blue"
                  size="lg"
                />
                <span className={style["profile-information-lane-span"]}>
                  +216 22 164 740
                </span>
              </div>
              <div className={style["profile-information-lane"]}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="color-blue"
                  size="lg"
                />
                <span className={style["profile-information-lane-span"]}>
                  Tunis, Bardo
                </span>
              </div>
            </div>
          </Col>
        </Row>
        {/* </div> */}
      </Container>
      <Container className="pt-5 pb-5">
        {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
        <Row>
          <Col
            lg={{ offset: 2, span: 8 }}
            md={{ offset: 2, span: 8 }}
            sm={{ offset: 2, span: 8 }}
            xs={{ offset: 1, span: 10 }}
            className="fly-box p-sm-5 p-4"
          >
            <div>
              <h1 className="color-blue">Our location:</h1>
              <hr />
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormLayout;
