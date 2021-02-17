import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import LoadComments from "./LoadComments";

const PhotoDetails = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="xl"
      centered
      backdrop="static"
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.photo.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={7}>
              <img
                // style={{ maxWidth: "600px" }}
                className="img-fluid"
                // className="img-fluid position-fixed"
                src={props.photo.photo}
                alt=""
              />
            </Col>
            <Col md={5}>
              <h5>
                <i style={{ fontSize: "15px" }}>photo by - </i>
                {props.photo.photographer}
              </h5>
              <p className="text-justify">{props.photo.description}</p>
              <LoadComments />
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default PhotoDetails;
