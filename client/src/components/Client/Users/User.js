import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./Image/Image";
import Informations from "./Informations/Informations";

const FormLayout = ({ ...props }) => {
  return (
    <Container className="pt-5 pb-5">
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box p-4">
        <Col
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 6 }}
          xs={{ span: 12 }}
          className="p-sm-5 p-4"
        >
          <Image />
        </Col>
        <Col
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 6 }}
          xs={{ span: 12 }}
          className="p-sm-5 p-4"
        >
          <Informations />
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
