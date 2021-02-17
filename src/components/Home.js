import React from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { PHOTOS } from "../data/photos";
import Photo from "./Photo";
import "./Home.css";
import PhotoDetails from "./PhotoDetails";

// const photos = PHOTOS;

const Home = () => {
  const [photos] = useState(PHOTOS);
  const [selectedCategory, setSelectedCategory] = useState("flower");
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const selectedPhotos = photos.filter(
    (photo) => photo.category === selectedCategory
  );

  const handleSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
  };
  console.log(selectedPhotos);
  return (
    <div>
      <nav className="mt-3 mb-1">
        <ul className="nav justify-content-center">
          <li
            onClick={() => setSelectedCategory("flower")}
            className={
              selectedCategory === "flower"
                ? "active nav-link mx-1"
                : "nav-link mx-1"
            }
          >
            Flower
          </li>
          <li
            onClick={() => setSelectedCategory("fruits")}
            className={
              selectedCategory === "fruits"
                ? "active nav-link mx-1"
                : "nav-link mx-1"
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
        />
      )}
    </div>
  );
};

export default Home;
