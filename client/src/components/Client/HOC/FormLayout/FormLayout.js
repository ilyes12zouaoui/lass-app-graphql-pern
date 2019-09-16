import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const FormLayout = ({ title, ...props }) => {
  return (
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
          <h1
            className="display-4 pb-2"
            style={{ color: "#007bffc9", fontSize: "40px" }}
          >
            {title || ""}
          </h1>
          <hr className="mb-4 mt-4" />
          {props.children || "nothing"}
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
