import React, { useState } from "react";

const InfoModal = ({ data }) => {
  const [infoModal, setInfoModal] = useState(false);
  const ShowHideinfo = infoModal ? "show-info" : "";

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
