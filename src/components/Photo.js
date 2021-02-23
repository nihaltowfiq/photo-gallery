import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Photo = ({ photo, modalShow, handleSelectedPhoto, user }) => {
    const [showOption, setShowOption] = useState(false);
    const history = useHistory();

    const viewDetailsEvent = () => {
        if (user.email) {
            modalShow();
            handleSelectedPhoto();
        } else {
            history.push('/login');
        }
    };
    // console.log(photo.photo);

    return (
        <Col md={4} className="p-2 align-content-center">
            <Card
                onMouseOver={() => setShowOption(true)}
                onMouseEnter={() => setShowOption(true)}
                onMouseLeave={() => setShowOption(false)}
            >
                <Card.Img src={photo.img} />
                {showOption && (
                    <Card.ImgOverlay className="text-center align-content-bottom bg_cloudy">
                        <Card.Title className="mt-5" as="h1">
                            {photo.title}
                        </Card.Title>
                        <Button
                            onClick={viewDetailsEvent}
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Photo);
