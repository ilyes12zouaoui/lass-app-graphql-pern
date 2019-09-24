import React from "react";

import { Container, Row, Col } from "react-bootstrap";
const NotFoundPage = () => {
  return (
    <Container className="pt-5 pb-5" style={{ maxWidth: "700px" }}>
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box">
        <Col
          // lg={{ offset: 3, span: 6 }}
          // md={{ offset: 3, span: 6 }}
          // sm={{ offset: 2, span: 8 }}
          // xs={{ offset: 1, span: 10 }}
          //   lg={{ offset: 3, span: 6 }}
          //   md={{ offset: 2, span: 8 }}
          //   sm={{ offset: 1, span: 10 }}
          // xs={{ span: 12 }}
          className="p-sm-5 p-4"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh"
            }}
          >
            <h1 className="color-pink text-center" style={{ fontSize: "24px" }}>
              Page Not Found !
            </h1>
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default NotFoundPage;
