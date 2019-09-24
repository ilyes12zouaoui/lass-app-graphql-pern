import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
const FormLayout = () => {
  return (
    <Container className="pt-5 pb-5" style={{ maxWidth: "700px" }}>
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Welcome
            </h1>
            <hr />
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              Hello javascripters ! when we start developing a javascript
              project using React,Redux,Node,Express,Prisma and GraphQL, there
              is no ready to use starter project, so we must do the
              configuration and authentication by our selfs each time, that's
              why i decided to create a modular ready to use strater project,
              that contains all the configuration even websocket configuration
              to use GraphQL subscription, and a full athentication with account
              activation and reset password e-mails and Three role users
              ADMIN,STAFF,USER, and upload image, also for the styling i used
              bootstrap and my own custom css, so that you can easily change the
              user interface for your needs.
            </p>
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
