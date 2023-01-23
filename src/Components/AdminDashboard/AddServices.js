import React, { useRef } from "react";
import Navbar from "./Navbar.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddServices() {
  const notify = () => toast("Service Added Successfully!");

  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const descrptionRef = useRef();

  const handleAddservice = (e) => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const img = imgRef.current.value;
    const description = descrptionRef.current.value;

    const newservice = { name, img, description, price };
    console.log(name);

    fetch("https://photographybackend-production.up.railway.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newservice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      {/* <div className="d-flex align-items-center"></div> */}
      <h2 className="pt-5">Add services</h2>
      <Container className="d-flex align-items-center">
        <Form className="mx-auto" onSubmit={handleAddservice}>
          <Form.Group className="mb-3" controlId="addimage">
            <Form.Control
              type="text"
              placeholder="Enter Image Link"
              ref={imgRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addtitle">
            <Form.Control
              type="text"
              placeholder="Enter Servivce Title"
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3  " controlId="addprice">
            <Form.Control
              type="text"
              placeholder="Enter Service price"
              ref={priceRef}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="adddescription">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              ref={descrptionRef}
            />
          </Form.Group>
          <Button className="me-4" type="submit" onClick={notify}>
            Add Service
          </Button>
          <ToastContainer />
        </Form>
      </Container>
    </div>
  );
}

export default AddServices;
