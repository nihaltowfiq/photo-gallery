import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const formStyle = {
  border: "1px solid gray",
  margin: "auto",
  maxWidth: "600px",
};

const SignUp = () => {
  const history = useHistory();
  return (
    <div>
      <Form className="p-5 rounded mt-5" style={formStyle}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Your Name</Form.Label>
          <Form.Control required type="text" placeholder="Your Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Your Email</Form.Label>
          <Form.Control required type="email" placeholder="Your Email" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Your Password</Form.Label>
          <Form.Control required type="password" placeholder="Your Password" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} md="7" className="text-center ">
            <Button
              onClick={() => history.push("/login")}
              className="form-control btn_light"
              variant="light"
            >
              Already have an Account!
            </Button>
          </Form.Group>

          <Form.Group as={Col} md="5" className="">
            <Button className="form-control" variant="success">
              Sign Up
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SignUp;
