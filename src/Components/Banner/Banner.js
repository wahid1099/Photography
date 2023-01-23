import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bannerimg from "./banner.jpg";
function Banner() {
  return (
    <div>
      <Container className="mt-4">
        <Row className="pt-4">
          <Col xs={12} md={6} lg={6}>
            <div className="text-left pt-5">
              <h4>
                <br />
                <br />
                <br />
                <br />
                "Capturing Life's Moments - Professional Photography for All
                Your Needs. From Weddings to Family Portraits, Let Us Help You
                Treasure Your Memories Forever."
              </h4>
              <p className="ms-0">
                "Creating lasting memories with our professional photography
                services - Weddings, portraits and more."
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img src={bannerimg} className="img-thumbnail" alt="banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
