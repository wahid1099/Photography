import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";

import ServiceComponet from "./ServiceComponents";
import Navbar from "./Navbar.jsx";

const Allservice = () => {
  const [manageservice, setManageservice] = useState([]);

  useEffect(() => {
    fetch("https://photographybackend-production.up.railway.app/allservice")
      .then((res) => res.json())
      .then((data) => {
        setManageservice(data);
      });
  }, [manageservice]);
  //   console.log(managecar);
  return (
    <div>
      <Navbar />
      <Row>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#Id</th>
                <th>Service Name</th>
                <th>Service Price</th>
                <th>Service Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {manageservice.map((manageservice) => (
                <ServiceComponet
                  key={manageservice._id}
                  manageservice={manageservice}
                ></ServiceComponet>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Allservice;
