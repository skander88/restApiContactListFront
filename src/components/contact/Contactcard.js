import React from "react";
import "./Contactcard.css";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../../api/contactapi";

const Contactcard = ({ mini, getAll }) => {
  const navigate = useNavigate();
  const gotoupdate = () => {
    navigate(`/Update/${mini._id}`);
  };

  return (
    <div className="body23">
      <article className="profile">
        <div className="profile-image">
          <img src="https://assets.codepen.io/285131/neongirl.jpg" />
        </div>
        <h2 className="profile-username">{mini.name}</h2>
        <h2 className="profile-username">{mini.lastName}</h2>
        <small className="profile-user-handle">{mini.age}</small>
        <div className="profile-actions">
          <button className="btn btn--primary">{mini.email}</button>
          <div className="lesdeux">
            <button className="btn btn--icon" onClick={() => gotoupdate()}>
              update
              <i className="ph-export" />
            </button>
            <button
              className="btn btn--icon"
              onClick={async () => {
                await deleteContact(mini._id);
                getAll();
              }}
            >
              delete
              <i className="ph-dots-three-outline-fill" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contactcard;
