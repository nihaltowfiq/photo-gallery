/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addComment, fetchComments } from '../redux/commentActions';
import LoadComments from './LoadComments';

const PhotoDetails = (props) => {
    const { show, onHide, photo, comments, addcomment, user, fetchcomments } = props;
    const { title, img, photographer, description, id } = photo;

    useEffect(() => fetchcomments(), [fetchcomments]);

    const commentInput = useRef();
    const handleCommentSubmit = (e) => {
        console.log(commentInput.current.value);
        e.preventDefault();
        const newComment = {
            comment: commentInput.current.value,
            author: user.name,
            userId: user.userId,
            photoId: id,
            date: new Date(),
        };

        axios.post(
            'https://database-for-projects-f2951-default-rtdb.firebaseio.com/comments.json',
            newComment
        );
        addcomment(newComment);
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = { fetchcomments: fetchComments, addcomment: addComment };

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetails);
