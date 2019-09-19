import { useMutation } from "@apollo/react-hooks";
import { RESET_PASSWORD_CHECK_TOKEN } from "../../../../graphql/mutations/authentication/resetPasswordChechToken";
import { RESET_PASSWORD_USING_TOKEN } from "../../../../graphql/mutations/authentication/resetPasswordUsingToken";
import ResetPassword from "./ResetPassword";
import FormLayout from "../../HOC/FormLayout/FormLayout";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../../UI/Loading";
import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
import { Container, Row, Col } from "react-bootstrap";

const LoginContainer = ({ match, ...props }) => {
  const { token } = match.params;
  const [resetPasswordChechToken, { data, loading, error }] = useMutation(
    RESET_PASSWORD_CHECK_TOKEN,
    { variables: { data: { token } } }
  );
  const [
    resetPasswordUsingToken,
    { data: data2, loading: loading2, error: error2 }
  ] = useMutation(RESET_PASSWORD_USING_TOKEN);

  useEffect(() => {
    resetPasswordChechToken();
  }, []);
  let result = "";
  if (loading) result = <Loading />;
  else if (!!error) result = <GraphqlErrorHandler error={error || null} />;
  else if (!!data && !error2) {
    return (
      <FormLayout title="Reset password">
        <ResetPassword
          token={token}
          resetPasswordUsingToken={resetPasswordUsingToken}
          loading={loading2}
          error={error2}
          data={data2}
        />
      </FormLayout>
    );
  } else if (!!error2) {
    result = <GraphqlErrorHandler error={error2 || null} />;
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
export default withRouter(LoginContainer);
