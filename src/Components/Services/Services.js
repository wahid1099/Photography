import React, { useEffect, useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import Service from "./service";
import { Link } from "react-router-dom";
function Services() {
  const [service, setservice] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://photographybackend-production.up.railway.app/allservice")
      .then((res) => res.json())
      .then((data) => {
        setservice(data);
        setIsloading(false);
      });
  }, []);
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <Container>
        <hr />
        <h2 className="mt-4">Best Photography packeges</h2>

        <Row xs={1} md={3} className="g-4">
          {service.slice(0, 6).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>

        <Link to="/">
          <Button className=" w-50" variant="outline-danger">
            Explore All
          </Button>
        </Link>
        <hr />
      </Container>
    </div>
  );
}

export default Services;
