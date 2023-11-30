import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="body">
      <div className="wrapper-images">
        <div className="images-line">
          <div
            className="line large"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaZr9rQ8pbouGhcS9AJiBUAK6VfTHrVdTJOhivh2WegSylihnIGP986FXSORM4ufLo-c&usqp=CAU",
            }}
          />
          <div
            className="line"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxe-lXEOASF8URO8ZOpZSH58t70xGxoqc6JKoIxb6qiJEITpHW0xYLhyJERLfQ3wtnlE&usqp=CAU",
            }}
          />
          <div
            className="line"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/email-user-icon-sign-symbol-marketing-newsletter-concept-diagram-sending-email-bulk-mail-email-sms-marketing-concept-scheme-direct-sales-business-list-clients-mailing_150455-14761.jpg",
            }}
          />
          <div
            className="line large"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/industry-4-0-technology-concept-smart-factory-fourth-industrial-revolution_31965-30578.jpg",
            }}
          />
        </div>
      </div>
      <div className="container">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61205.png"
            alt="contactphoto"
          />
        </div>
        <nav className="menu">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact List</Link>
          <Link to="/add">Add Contact</Link>
          <a href="#">Login/Logout</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
