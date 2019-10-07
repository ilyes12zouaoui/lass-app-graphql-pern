import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import style from "./About.module.css";
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
              About
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
              Hello javascripters ! , my name is Ilyes Zouaoui i'm very
              passionate about web development and javascript technologies, to
              me web development and information technology is more then just a
              great field of work, it's the equaliser of the 21 centery, in the
              past school was the equaliser, getting a diploma from a great
              school is enought to improve your well being significatly, today
              that's not true anymone, i believe that information technology is
              the equaliser of today that can improve our well being
              signeficantly if we use it correctly, also it's sow much fun and i
              love it, creating beautiful user interface and efficent algorithms
              make me feel happy everytime.
            </p>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                // fontWeight: "500",
                lineHeight: "22px"
              }}
            >
              Currenlty i'm a software engeeniring student at{" "}
              <a
                className={style.aboutLink}
                target="_blank"
                href="http://esprit.tn/"
              >
                ESPRIT
              </a>{" "}
              (TWIN: Technology Web And Internet specialty ), this is my final
              year and i'm in active search for a final year internship at
              germany ( berlin ), also i'm the webmaster of IEEE ESPRIT club,
              and i worked as a part-time web instructor at{" "}
              <a
                className={style.aboutLink}
                href="https://www.gomycode.tn/"
                target="_blank"
              >
                GOMYCODE
              </a>{" "}
              for six months,and at my last internship that was three months and
              twenty days long, i learned GraphQl and Nextjs all by myself by
              watching tutorials and reading articles and documentations, and i
              was able to realise a professional web application using them, for
              more informations please don't hesitate to{" "}
              <Link className={style.aboutLink} to="/contact-us">
                contact me
              </Link>{" "}
              i would love to speak with you.
            </p>
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
