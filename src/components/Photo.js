import React from "react";
import { useState } from "react";
import { Card, Col } from "react-bootstrap";

const Photo = ({ photo }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Col md={4} className="p-2 align-content-center">
      <Card
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Card.Img src={photo.photo} />
        {show && (
          <Card.ImgOverlay className="d-flex align-content-center flex-wrap justify-content-center bg-blur">
            <Card.Title as="h1">{photo.title}</Card.Title>
          </Card.ImgOverlay>
        )}
      </Card>
    </Col>
  );
};

export default Photo;
