import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Table } from "react-bootstrap";
import Myorder from "./Myorder";
import Header from "../Navbar/head";
import Footer from "../Footer/Footer";

function Userorders() {
  const [myorders, setOrder] = useState([]);
  const { user } = UseAuth();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(
      `https://photographybackend-production.up.railway.app/myorders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <h3 className="mt-4">Your Order History</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Service Name</th>
            <th>Service Img</th>
            <th>Price</th>

            <th>Phone</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myorders.map((orders) => (
            <Myorder key={orders._id} orders={orders}></Myorder>
          ))}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

export default Userorders;
