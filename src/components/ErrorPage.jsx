import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <h1 style={{ fontSize: "5rem", color: "#dc3545" }}>404</h1>
          <h2>This Page Doesn't Exist</h2>
          <p>
          The page you’re looking for may have been moved, deleted, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg" className="mt-3">
              Go Back Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
