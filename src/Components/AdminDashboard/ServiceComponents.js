import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import Navbar from "./Navbar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ServiceComponet(props) {
  const notify = () => toast("Service Added Successfully!");

  const { name, img, price, _id, description } = props.manageservice;
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    fetch(
      `https://photographybackend-production.up.railway.app/deleteservice/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setShow(false);
          setSuccess(true);
        }
      });
  };
  return (
    <>
      {success && (
        <Alert variant="success">Service deleted successfully!</Alert>
      )}

      <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{price}$</td>
        <td>{description}</td>

        <td>
          <Button variant="danger" onClick={handleShow}>
            Delete
          </Button>
          <ToastContainer />
        </td>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </tr>
    </>
  );
}

export default ServiceComponet;
