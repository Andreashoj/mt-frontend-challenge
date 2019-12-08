import React, { useEffect, useState } from "react";
import "../styles/imagegrid.css";
import Modal from "./Modal";

const ImageGrid = ({ setSpinner }) => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    // API call to fetch images (API key is visible for the sake of simplicity in this case)
    fetch(
      `https://api.unsplash.com/photos/?client_id=4c2cde9d8978a0102f79c14a5de80a843a9c6859959dfe6c835bde8a53eae073`
    )
      .then(res => res.json())
      // setTimeout is there just to show that the spinner is actually there
      .then(data => setTimeout(() => setImages(data), 1000))
      .then(setTimeout(() => setSpinner(false), 1000));
  }, [setSpinner]);

  // Set the two modal states that activates/deactivates and sets the data
  const handleModal = item => {
    setModal(!modal);
    setModalData(item);
  };

  return (
    <div className="grid-image">
      {images.map(image => {
        return (
          <img
            className="grid-image__item"
            src={image.urls.regular}
            alt={"image by: " + image.user.username}
            key={image.id}
            onClick={() => handleModal(image)}
          />
        );
      })}
      {modal ? (
        <Modal show={modal} setModal={setModal} data={modalData} />
      ) : null}
    </div>
  );
};

export default ImageGrid;
