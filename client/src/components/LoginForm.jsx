import React from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <div className="login-form">
    <h3>Login Page</h3>
      <Form>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={validateLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

// to do
const validateLogin = () => {
    console.log("validate Login function");
}

export default LoginForm;
