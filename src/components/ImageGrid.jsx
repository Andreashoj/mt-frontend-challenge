import React, { useEffect, useState } from "react";
import "../styles/imagegrid.css";
import Modal from "./Modal";

const ImageGrid = ({ setSpinner }) => {
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=6")
      .then(res => res.json())
      .then(data => setImages(data))
      // setTimeout is there just to show that the spinner is actually there
      .then(() => setTimeout(() => setSpinner(false), 500));
  }, [setSpinner]);

  const handleModal = item => {
    setModal(!modal);
    setModalData(item);
  };

  return (
    <div className="grid-image">
      {images.map(item => {
        return (
          <img
            className="grid-image__item"
            src={item.download_url}
            alt={"image by: " + item.author}
            key={item.id}
            onClick={() => handleModal(item)}
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
