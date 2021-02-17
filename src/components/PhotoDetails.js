import React, { useRef } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import LoadComments from "./LoadComments";

const PhotoDetails = (props) => {
  const commentInput = useRef();

  const handleCommentSubmit = (e) => {
    console.log(commentInput.current.value);
    e.preventDefault();
  };
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
                className="img-fluid rounded"
                src={props.photo.photo}
                alt={props.photo.title}
              />
            </Col>
            <Col md={5}>
              <h5>
                <i style={{ fontSize: "15px" }}>photo by - </i>
                {props.photo.photographer}
              </h5>
              <p className="text-justify">{props.photo.description}</p>
              <hr />
              <LoadComments comments={props.comments} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Form onSubmit={handleCommentSubmit} className="mr-3">
          <InputGroup>
            <FormControl
              type="text"
              style={{ width: "350px" }}
              placeholder="Your Comment"
              required
              ref={commentInput}
            />

            <InputGroup.Append>
              <Button type="submit" variant="outline-success">
                Comment
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Modal.Footer>
    </Modal>
  );
};

export default PhotoDetails;
