import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import Header from "../Navbar/head";
import { Link } from "react-router-dom";

function ServcieDetail() {
  const { serviceId } = useParams();
  const [servicedetails, setservicedtail] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(
      `https://photographybackend-production.up.railway.app/service/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setservicedtail(data);
        setIsloading(false);
      });
  }, []);

  const { _id, name, img, price, description } = servicedetails || {};

  return (
    <div>
      <Header />
      <h1 className="text-center pt-4">Service Detail</h1>
      <hr />
      <Container className="text-align-center">
        <Row>
          <Col>
            <img src={img} className="img-thumbnail w-50 h-50" />
            <hr />
            <h3>Service Name:{name}</h3>
            <h3>Service Price:{price}$</h3>
            <p>Description:{description}</p>

            <div>
              <Link to={`/placeorder/${_id}`}>
                <Button variant="dark" className=" w-50">
                  Buy Now
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServcieDetail;
