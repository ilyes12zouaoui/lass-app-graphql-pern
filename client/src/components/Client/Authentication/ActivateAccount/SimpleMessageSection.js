import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../../UI/Loading";
import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";

const FormLayout = ({ data, loading, error, ...props }) => {
  let result = "";
  if (loading) result = <Loading />;
  else if (!!error) result = <GraphqlErrorHandler error={error || null} />;
  else if (!!data) {
    result = (
      <h1
        className="display-4 pb-2"
        style={{
          color: "#007bffc9",
          fontSize: "32px",
          textAlign: "center"
        }}
      >
        your account is now activated !
      </h1>
    );
  }
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
        >
          {result}
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
