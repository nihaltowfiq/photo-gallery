import React from "react";
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

const Photo = ({ photo, modalShow }) => {
  const [showOption, setShowOption] = useState(false);

  return (
    <Col md={4} className="p-2 align-content-center">
      <Card
        onMouseOver={() => setShowOption(true)}
        onMouseEnter={() => setShowOption(true)}
        onMouseLeave={() => setShowOption(false)}
      >
        <Card.Img src={photo.photo} />
        {showOption && (
          <Card.ImgOverlay className="text-center align-content-bottom bg_cloudy">
            <Card.Title className="mt-5" as="h1">
              {photo.title}
            </Card.Title>
            <Button
              onClick={modalShow}
              className="btn_light font-weight-bold"
              variant="light"
            >
              View Details
            </Button>
          </Card.ImgOverlay>
        )}
      </Card>
    </Col>
  );
};

export default Photo;
