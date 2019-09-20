import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const FormLayout = ({ title, ...props }) => {
  return (
    <Container className="pt-1 pb-4">
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row>
        <Col
          // lg={{ offset: 2, span: 8 }}
          // md={{ offset: 2, span: 8 }}
          // sm={{ offset: 1, span: 10 }}
          // xs={{ offset: 1, span: 10 }}
          className=" p-sm-4 p-4 "
        >
          <h1
            className="display-4 pb-2 color-blue"
            style={{ fontSize: "40px" }}
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
