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
import image1 from "./images/Capture.PNG";
import image2 from "./images/Capture2.PNG";
import image3 from "./images/Capture3.PNG";
import image4 from "./images/Capture4.PNG";
import image5 from "./images/Capture5.PNG";
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
              that contains all the configuration needed, even websocket
              configuration to use GraphQL subscription, and a full
              athentication with account activation and reset password e-mails
              and Three role users ADMIN,STAFF,USER, client and admin space,
              upload image using graphQL, and for the styling i used bootstrap
              and my own custom css, so that you can easily modify it.
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              update this file "src/helpers/email/ConfigProd.js" with the
              correct email address and password, and update the path to where
              you want to save files at this directory "src/helpers/file" enjoy
              :D
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              project github link :{" "}
              <a
                href="https://github.com/ilyes12zouaoui/lass-app-graphql-pern"
                target="_blank"
              >
                https://github.com/ilyes12zouaoui/lass-app-graphql-pern
              </a>{" "}
              <br />
              running online project on heroku link :{" "}
              <a href=" https://lass-graphql-app.herokuapp.com" target="_blank">
                https://lass-graphql-app.herokuapp.com
              </a>
              <br />
            </p>
          </div>
        </Col>
      </Row>
      <Row className="fly-box mt-4">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Account activation email picture
            </h1>
            <hr />
            <img style={{ display: "block", width: "100%" }} src={image1} />
          </div>
        </Col>
      </Row>
      <Row className="fly-box mt-4">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Admin space picture
            </h1>
            <hr />
            <img style={{ display: "block", width: "100%" }} src={image2} />
          </div>
        </Col>
      </Row>
      <Row className="fly-box mt-4">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Admin users management picture
            </h1>
            <hr />
            <img style={{ display: "block", width: "100%" }} src={image3} />
          </div>
        </Col>
      </Row>
      <Row className="fly-box mt-4">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Update profile picture
            </h1>
            <hr />
            <img style={{ display: "block", width: "100%" }} src={image4} />
          </div>
        </Col>
      </Row>
      <Row className="fly-box mt-4">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          className="p-sm-5 p-4"
        >
          <div>
            <h1 className="color-blue text-center" style={{ fontSize: "24px" }}>
              Interactive form using formik and yup libraries
            </h1>
            <hr />
            <img style={{ display: "block", width: "100%" }} src={image5} />
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
