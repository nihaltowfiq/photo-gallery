/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchComments } from '../redux/commentActions';
import './Home.css';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';

const Home = ({ photos, fetchComments, COMMENTS }) => {
    const [comments, setComments] = useState(COMMENTS);
    const [selectedCategory, setSelectedCategory] = useState('flower');
    const [showModal, setShowModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => fetchComments(), [fetchComments, comments]);
    console.log(comments);

    const selectedPhotos = photos.filter((photo) => photo.category === selectedCategory);
    // console.log(selectedPhotos);

    let commentsOfSelectedPhoto = null;
    if (selectedPhoto) {
        commentsOfSelectedPhoto = comments.comments.filter(
            (comment) => comment.photoId === selectedPhoto.id
        );
    }
    // commentsOfSelectedPhoto = comments.filter((comment) => {
    //     console.log(comment.photoId, selectedPhoto.id);
    //     return comment.photoId === selectedPhoto.id;
    // });

    const handleSelectedPhoto = (photo) => {
        setSelectedPhoto(photo);
        // console.log(selectedPhoto);
    };

    const addcomment = (comment) => {
        console.log(comment);
        setComments({ comments: [...comments, comment] });
    };
    return (
        <div>
            <nav className="mt-3 mb-1">
                <ul className="nav justify-content-center">
                    <li
                        onClick={() => setSelectedCategory('flower')}
                        className={
                            selectedCategory === 'flower' ? 'active nav-link mx-1' : 'nav-link mx-1'
                        }
                    >
                        Flower
                    </li>
                    <li
                        onClick={() => setSelectedCategory('fruits')}
                        className={
                            selectedCategory === 'fruits' ? 'active nav-link mx-1' : 'nav-link mx-1'
                        }
                    >
                        Fruit
                    </li>
                </ul>
            </nav>
            <Row>
                {selectedPhotos.map((photo) => (
                    <Photo
                        key={photo.id}
                        photo={photo}
                        modalShow={() => setShowModal(true)}
                        handleSelectedPhoto={() => handleSelectedPhoto(photo)}
                    />
                ))}
            </Row>
            {selectedPhoto && (
                <PhotoDetails
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    photo={selectedPhoto}
                    comments={commentsOfSelectedPhoto}
                    addComment={addcomment}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        photos: state.photos.photoState.photos,
        user: state.user,
        COMMENTS: state.comments,
    };
};

const mapDispatchToProps = { fetchComments };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
