import React, { useState } from "react";
import "./Addcontact.css";
import { useNavigate } from "react-router";
import { postContact } from "../../api/contactapi";

const Addcontact = () => {
  //nous permet de naviguer de l update a la homepage
  const navigate = useNavigate();

  //pour créer la fonction ajout : naamlou state lel kol input w baad l state =>{} l'objet qui s'ajoute à la fonction
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  // backend part function
  const handleAdd = async (value) => {
    await postContact(value);
    navigate("/Contact");
  };

  return (
    <div className="body2">
      <form
        method="get"
        action="javascript: void(0);"
        id="login-form"
        className="form"
        autoComplete="off"
        role="main"
      >
        <h1 className="atit">Add a contact</h1>
        <div>
          <div>
            <label className="label-email">
              <input
                type="text"
                className="text"
                name="email"
                placeholder="Name"
                tabIndex={1}
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="required">Name : </span>
            </label>
            <label className="label-email">
              <input
                type="text"
                className="text"
                name="email"
                placeholder="Last Name"
                tabIndex={1}
                required=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span className="required">Last Name: </span>
            </label>
            <label className="label-email">
              <input
                type="text"
                className="text"
                name="email"
                placeholder="Age"
                tabIndex={1}
                required=""
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <span className="required">Age : </span>
            </label>
            <label className="label-email">
              <input
                type="email"
                className="text"
                name="email"
                placeholder="Email"
                tabIndex={1}
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="required">Email : </span>
            </label>
          </div>

          <br />
          <center>
            <button
              class="button-29"
              type="button"
              onClick={() => handleAdd({ name, lastName, age, email })}
            >
              Add to contacts
            </button>
          </center>
        </div>

        <figure aria-hidden="true">
          <div className="person-body" />
          <div className="neck skin" />
          <div className="head skin">
            <div className="eyes" />
            <div className="mouth" />
          </div>
          <div className="hair" />
          <div className="ears" />
          <div className="shirt-1" />
          <div className="shirt-2" />
        </figure>
      </form>
    </div>
  );
};

export default Addcontact;
