import React from "react";
import Loading from "./Loading";
import { Row, Col, Container } from "react-bootstrap";

const LoadingFlyingBox = () => {
  return (
    <Container className="pt-5 pb-5">
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row>
        <Col
          lg={{ offset: 2, span: 8 }}
          md={{ offset: 2, span: 8 }}
          sm={{ offset: 2, span: 8 }}
          xs={{ offset: 1, span: 10 }}
          className="fly-box p-sm-5 p-4 text-center"
          style={{
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Loading />
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default LoadingFlyingBox;
