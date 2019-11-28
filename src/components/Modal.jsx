import React from "react";
import "../styles/modal.css";
import close from "../icons/close.svg";

const Modal = ({ show, data, setModal }) => {
  const ShowHideClass = show ? "show modal" : "hide modal";

  console.log(data.author);

  return (
    <div className={ShowHideClass}>
      <img className="modal-image" src={data.download_url} alt="" />
      <img className="close" src={close} onClick={() => setModal(false)} />
      <div className="background" onClick={() => setModal(false)}></div>
    </div>
  );
};

export default Modal;
