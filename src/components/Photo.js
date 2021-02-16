import React from "react";
import { Card, Col } from "react-bootstrap";

const Photo = ({ photo }) => {
  return (
    <Col md={4} className="p-2">
      <Card>
        <Card.Img src={photo.photo} />
      </Card>
    </Col>
  );
};

export default Photo;
