import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataTableContainer from "./DataTable/DataTableContainer";
const FormLayout = () => {
  return (
    <Container className="pt-5 pb-5">
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box">
        <Col
          //   lg={{ offset: 3, span: 6 }}
          //   md={{ offset: 2, span: 8 }}
          //   sm={{ offset: 1, span: 10 }}
          xs={{ span: 12 }}
          className="p-sm-5 p-4"
        >
          <h1 className="color-pink text-center" style={{ fontSize: "24px" }}>
            Contact Us Messages
          </h1>
          <DataTableContainer />
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
