import React, { useState } from "react";

const InfoModal = ({ data }) => {
  // If info modal is clicked, a class is set (same princip as the parent modal)
  const [infoModal, setInfoModal] = useState(false);
  const ShowHideinfo = infoModal ? "show-info" : "";

  // Constructs info modal based off the passed down props
  return (
    <>
      <div
        className={`info-modal ` + ShowHideinfo}
        onClick={() => setInfoModal(!infoModal)}
      >
        {infoModal ? (
          <div className="info-modal__container">
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
            <p>
              Find more at my instagram @
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${data.instagram_username}`}
              >
                {data.instagram_username}
              </a>
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default InfoModal;
