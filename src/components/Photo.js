import React from "react";
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

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
          <Card.ImgOverlay className="text-center align-content-bottom bg_cloudy">
            <Card.Title className="mt-5" as="h1">
              {photo.title}
            </Card.Title>
            <Button className="btn_light font-weight-bold" variant="light">
              View Details
            </Button>
          </Card.ImgOverlay>
        )}
      </Card>
    </Col>
  );
};

export default Photo;
