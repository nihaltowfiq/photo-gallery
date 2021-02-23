/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import LoadComments from './LoadComments';

const PhotoDetails = (props) => {
    const { photo, comments, addComment } = props;
    const { title, img, photographer, description, id } = photo;
    const commentInput = useRef();

    const handleCommentSubmit = (e) => {
        console.log(commentInput.current.value);
        e.preventDefault();
        const newComment = {
            comment: commentInput.current.value,
            author: 'Random Name',
            id: Math.random() * 10000,
            photoId: id,
            date: new Date(),
        };
        addComment(newComment);
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
                <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={7}>
                            <img className="img-fluid rounded" src={img} alt={title} />
                        </Col>
                        <Col md={5}>
                            <h5>
                                <i style={{ fontSize: '15px' }}>photo by - </i>
                                {photographer}
                            </h5>
                            <p className="text-justify">{description}</p>
                            <hr />
                            <LoadComments comments={comments} />
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Form onSubmit={handleCommentSubmit} className="mr-3">
                    <InputGroup>
                        <FormControl
                            type="text"
                            style={{ width: '350px' }}
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
