import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Service(prpos) {
  const { _id, name, img, price, description } = prpos.service;
  return (
    <div className="pt-4">
      <Col>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src={img}
            className="img-fluid"
            style={{ height: "200px" }}
          />
          <Card.Body>
            <Card.Title>-{name}-</Card.Title>
            <Card.Text>
              <p className="text-start">
                {description?.slice(0, 200)}
                <span
                  className="text-blue
                "
                >
                  ....read more
                </span>
              </p>
            </Card.Text>

            <div className="d-flex">
              <h5 className="me-2">Price:{price}$</h5>
            </div>

            <Link to={`/placeorder/${_id}`}>
              <Button variant="outline-dark" className="float-start">
                Buy Now
              </Button>
            </Link>

            <Link to={`/serviceDetail/${_id}`}>
              <Button variant="outline-dark" className="float-start ms-5">
                Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
