import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name component/Name";
import Price from "./Price Component/Price";
import Description from "./Description Component/Description";
import Image from "./Image Component/Image";

const App = () => {
  const firstName = "David"; // Replace with your name or leave it empty for testing

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col className="text-center">
          <h5>
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </h5>
          {firstName && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3fqSUt5WjQFlvLvyVR7dNY6vFIQqcbKu5w&s" // Replace with your preferred image URL
              alt="Greeting"
              style={{ marginTop: "10px", borderRadius: "50%" }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
