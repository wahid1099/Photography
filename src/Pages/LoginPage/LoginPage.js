import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { Button, Form } from "react-bootstrap";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Header from "../../Components/Navbar/head";
const Login = () => {
  const location = useLocation();
  const history = useNavigate();

  const {
    signInWithEmail,
    singInwithGoogle,
    singInWithGithub,
    userEmail,
    userPassword,
    error,
    redicretlocation,
    setLocation,
  } = UseAuth();

  const handleGoogleSignIn = () => {
    singInwithGoogle(location, history);
  };
  return (
    <div>
      <Header />
      <div className="login mx-auto text-center">
        <div className="container mx-auto mt-5 pt-4">
          <h1 className="text-decoration-none text-black">
            Photography<span className="text-success ">BD</span>
          </h1>

          <div>
            <h2 className="text-danger mt-4">LogIn To Your Account</h2>
            <Form>
              <Form.Group
                className="mb-3 w-50 mx-auto"
                controlId="formBasicEmail"
              >
                <Form.Label className="float-start">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={userEmail}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 w-50 mx-auto"
                controlId="formBasicPassword"
              >
                <Form.Label className="float-start">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={userPassword}
                />
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                className="w-50 mx-auto mt-4"
                onClick={signInWithEmail}
              >
                Log In
              </Button>
              <Link to="/singup">
                <p className="text-danger mt-2">Don't Have an Account?</p>
              </Link>
            </Form>
          </div>
          <p>{error}</p>
          <div>
            <Button
              variant="danger"
              className="w-25"
              onClick={handleGoogleSignIn}
            >
              <BsGoogle />
              Google
            </Button>
            <Button
              variant="secondary"
              className="w-25 m-4"
              onClick={singInWithGithub}
            >
              <BsGithub /> Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
