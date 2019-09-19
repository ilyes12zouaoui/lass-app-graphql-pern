import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./Image/Image";
import Informations from "./Informations/Informations";

const FormLayout = ({ user, isOwner = false }) => {
  const src = `/images/users/${user.image}`;
  console.log("is the owner", isOwner);
  return (
    <Container className="pt-5 pb-5">
      {/* <div style={{ width: "70%", minWidth: "300px" }} className="fly-box"> */}
      <Row className="fly-box">
        <Col
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 5 }}
          xs={{ span: 12 }}
          className="p-0 "
        >
          <Image src={src} />
        </Col>
        <Col
          lg={{ span: 7 }}
          md={{ span: 7 }}
          sm={{ span: 7 }}
          xs={{ span: 12 }}
          className="p-sm-5 p-4"
        >
          <Informations {...user} isOwner={isOwner} />
        </Col>
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default FormLayout;
