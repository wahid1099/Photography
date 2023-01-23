import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import OrderComponet from "./userorderComponents";

import Navbar from "./Navbar.jsx";

function Allorders() {
  const [allorder, setallorders] = useState([]);

  useEffect(() => {
    fetch("https://photographybackend-production.up.railway.app/allorder")
      .then((res) => res.json())
      .then((data) => {
        setallorders(data);
      });
  }, [allorder]);
  //   console.log();
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
                <th>UserName</th>
                <th>User-Email</th>
                <th>User-Email</th>
                <th>OrderStatus</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allorder.map((allorder) => (
                <OrderComponet
                  key={allorder._id}
                  order={allorder}
                ></OrderComponet>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Allorders;
