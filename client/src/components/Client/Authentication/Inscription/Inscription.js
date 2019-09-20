import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loading from "../../UI/Loading";
import GraphqlErrorHandler from "../../UI/GraphqlErrorHandler";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: yup
    .string()
    .min(5, "Too Short!")
    .notRequired(),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "too short!"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  day: yup.string().required("day is required"),
  month: yup.string().required("month is required"),
  year: yup.string().required("year is required"),
  telephone: yup.number().notRequired(),
  sexe: yup.string().required("required")
});

const initialValues = {
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirmation: "",
  email: "",
  day: "15",
  month: "06",
  year: "1995",
  telephone: "",
  sexe: "",
  description: "",
  address: ""
};

const Inscription = ({ createUser, error, data, loading }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        let data = {
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
          email: values.email,
          birthDate: `${values.year}-${values.month}-${values.day}`,
          ...(values.telephone && { telephone: values.telephone }),
          ...(values.address && { address: values.address }),
          sexe: values.sexe
        };
        createUser({ variables: { data } });
      }}
      render={({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldError
      }) => {
        const emailUsedError =
          error &&
          error.graphQLErrors &&
          error.graphQLErrors[0].message &&
          error.graphQLErrors[0].message.includes("same email address") &&
          error.graphQLErrors[0].message;
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email && !emailUsedError}
                isInvalid={(touched.email && !!errors.email) || emailUsedError}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.email || emailUsedError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formDateDay">
                <Form.Label>Day *</Form.Label>
                <Form.Control
                  className="background-image-none"
                  isValid={touched.day && !errors.day}
                  isInvalid={touched.day && !!errors.day}
                  onChange={handleChange}
                  name="day"
                  as="select"
                  value={values.day}
                >
                  <option value="">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </Form.Control>
                <Form.Control.Feedback>success</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.day}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formDateMonth">
                <Form.Label>Month *</Form.Label>
                <Form.Control
                  className="background-image-none"
                  isValid={touched.month && !errors.month}
                  isInvalid={touched.month && !!errors.month}
                  onChange={handleChange}
                  name="month"
                  as="select"
                  value={values.month}
                  as="select"
                >
                  <option value="">Month</option>
                  <option value="01"> January</option>
                  <option value="02"> February</option>
                  <option value="03"> March</option>
                  <option value="04"> April</option>
                  <option value="05"> May</option>
                  <option value="06"> June</option>
                  <option value="07"> July</option>
                  <option value="08"> August</option>
                  <option value="09"> September</option>
                  <option value="10"> October</option>
                  <option value="11"> November</option>
                  <option value="12"> December</option>
                </Form.Control>
                <Form.Control.Feedback>success</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.month}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formDateYear">
                <Form.Label>Year *</Form.Label>
                <Form.Control
                  className="background-image-none"
                  isValid={touched.year && !errors.year}
                  isInvalid={touched.year && !!errors.year}
                  onChange={handleChange}
                  name="year"
                  as="select"
                  value={values.year}
                  as="select"
                >
                  <option value="">Year</option>

                  <option value="1910">1910</option>
                  <option value="1911">1911</option>
                  <option value="1912">1912</option>
                  <option value="1913">1913</option>
                  <option value="1914">1914</option>
                  <option value="1915">1915</option>
                  <option value="1916">1916</option>
                  <option value="1917">1917</option>
                  <option value="1918">1918</option>
                  <option value="1919">1919</option>
                  <option value="1920">1920</option>
                  <option value="1921">1921</option>
                  <option value="1922">1922</option>
                  <option value="1923">1923</option>
                  <option value="1924">1924</option>
                  <option value="1925">1925</option>
                  <option value="1926">1926</option>
                  <option value="1927">1927</option>
                  <option value="1928">1928</option>
                  <option value="1929">1929</option>
                  <option value="1930">1930</option>
                  <option value="1931">1931</option>
                  <option value="1932">1932</option>
                  <option value="1933">1933</option>
                  <option value="1934">1934</option>
                  <option value="1935">1935</option>
                  <option value="1936">1936</option>
                  <option value="1937">1937</option>
                  <option value="1938">1938</option>
                  <option value="1939">1939</option>
                  <option value="1940">1940</option>
                  <option value="1941">1941</option>
                  <option value="1942">1942</option>
                  <option value="1943">1943</option>
                  <option value="1944">1944</option>
                  <option value="1945">1945</option>
                  <option value="1946">1946</option>
                  <option value="1947">1947</option>
                  <option value="1948">1948</option>
                  <option value="1949">1949</option>
                  <option value="1950">1950</option>
                  <option value="1951">1951</option>
                  <option value="1952">1952</option>
                  <option value="1953">1953</option>
                  <option value="1954">1954</option>
                  <option value="1955">1955</option>
                  <option value="1956">1956</option>
                  <option value="1957">1957</option>
                  <option value="1958">1958</option>
                  <option value="1959">1959</option>
                  <option value="1960">1960</option>
                  <option value="1961">1961</option>
                  <option value="1962">1962</option>
                  <option value="1963">1963</option>
                  <option value="1964">1964</option>
                  <option value="1965">1965</option>
                  <option value="1966">1966</option>
                  <option value="1967">1967</option>
                  <option value="1968">1968</option>
                  <option value="1969">1969</option>
                  <option value="1970">1970</option>
                  <option value="1971">1971</option>
                  <option value="1972">1972</option>
                  <option value="1973">1973</option>
                  <option value="1974">1974</option>
                  <option value="1975">1975</option>
                  <option value="1976">1976</option>
                  <option value="1977">1977</option>
                  <option value="1978">1978</option>
                  <option value="1979">1979</option>
                  <option value="1980">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                </Form.Control>
                <Form.Control.Feedback>success</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.month}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasicSexe">
              <Form.Label>Sexe *</Form.Label>
              <Form.Control
                className="background-image-none"
                isValid={touched.sexe && !errors.sexe}
                isInvalid={touched.sexe && !!errors.sexe}
                onChange={handleChange}
                name="sexe"
                as="select"
                value={values.sexe}
              >
                <option value="">Sexe</option>
                <option value="HOMME"> Homme</option>
                <option value="FEMME"> Femme</option>
                <option value="AUTRE"> Autre</option>
              </Form.Control>
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.sexe}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Password confirmation *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password confirmation"
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChange={handleChange}
                isValid={
                  touched.passwordConfirmation && !errors.passwordConfirmation
                }
                isInvalid={
                  touched.passwordConfirmation && !!errors.passwordConfirmation
                }
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.passwordConfirmation}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Label> address (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adrress"
                name="address"
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && !!errors.address}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicTelephone">
              <Form.Label>Telephone (optional)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Telephone"
                name="telephone"
                value={values.telephone}
                onChange={handleChange}
                isValid={touched.telephone && !errors.telephone}
                isInvalid={touched.telephone && !!errors.telephone}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.telephone}
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={touched.description && !!errors.description}
              />
              <Form.Control.Feedback>success</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group> */}

            <button
              className="bg-blue button-custom"
              disabled={loading}
              type="submit"
            >
              Inscription
            </button>
            {loading ? <Loading /> : null}
            {emailUsedError ? (
              <div className="error-color mt-2">wrong input(s) value(s)</div>
            ) : (
              <GraphqlErrorHandler error={error || null} />
            )}
            {!!data ? <div className="color-blue mt-2">success</div> : null}
          </Form>
        );
      }}
    />
  );
};

export default Inscription;
