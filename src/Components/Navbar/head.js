import React from "react";

import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

import { MdLogin } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  const { user, logOut, admin } = UseAuth();
  return (
    <div className="mx-auto bg-black">
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#" className="text-light">
              Drone Photography
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/" className="text-light">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  About us
                </Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
                <Nav.Link href="#" className="text-light">
                  Services
                </Nav.Link>
              </Nav>
              <div className="me-4">
                {user.accessToken ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FaUserAlt />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {user?.accessToken && (
                        <span className="text-primary ms-3">
                          <strong>Hello {user.displayName} </strong>{" "}
                        </span>
                      )}
                      <Dropdown.Item as={Link} to="/myorders">
                        My Orders
                      </Dropdown.Item>
                      {/* <Dropdown.Item
                        href="#/action-2"
                        as={Link}
                        to="/admindashboard"
                      >
                        Dashboard
                      </Dropdown.Item> */}

                      {user?.accessToken && admin && (
                        <Dropdown.Item as={Link} to="/admindashboard">
                          DashBoard
                        </Dropdown.Item>
                      )}

                      <Nav.Link
                        href="#deets"
                        className="text-black"
                        as={Link}
                        to="/"
                      >
                        <Button
                          variant="danger"
                          onClick={logOut}
                          className="ms-2"
                        >
                          Log Out
                        </Button>
                      </Nav.Link>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link
                    href="#deets"
                    className="text-black"
                    as={Link}
                    to="/login"
                  >
                    <Button variant="danger">
                      <MdLogin />
                      LogIn
                    </Button>
                  </Nav.Link>
                )}
              </div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
