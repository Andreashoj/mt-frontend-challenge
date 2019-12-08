import React from "react";
import "../styles/modal.css";
import close from "../icons/close.svg";
import InfoModal from "./InfoModal";

const Modal = ({ show, data, setModal }) => {
  // Makes modal visible based on the props that gets passed (if it's clicked or not)
  const ShowHideClass = show ? "show modal" : "hide modal";

  // Constructs modal with data from the props
  return (
    <div className={ShowHideClass} scroll="no">
      <div className="modal-container">
        <div className="image__container">
          <InfoModal data={data.user} />
          <img className="modal-image" src={data.urls.regular} alt="" />
        </div>
        <img
          className="close"
          src={close}
          onClick={() => setModal(false)}
          alt=""
        />
      </div>
      <div className="background" onClick={() => setModal(false)}></div>
    </div>
  );
};

export default Modal;
