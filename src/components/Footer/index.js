import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row icon-list">
          <button
            className="icon-button"
            name="linkedin"
            onClick={(e) => handleIconClick(e.target.name)}
          >
            <FaIcons.FaLinkedin className="icons" />
          </button>
          <button
            className="icon-button"
            name="github"
            onClick={(e) => handleIconClick(e.target.name)}
          >
            <FaIcons.FaGithub className="icons" />
          </button>
          <button
            className="icon-button"
            name="whatsapp"
            onClick={(e) => handleIconClick(e.target.name)}
          >
            <FaIcons.FaWhatsapp className="icons" />
          </button>
          <button
            className="icon-button"
            name="playstore"
            onClick={(e) => handleIconClick(e.target.name)}
          >
            <IoIcons.IoLogoGooglePlaystore className="icons" />
          </button>
        </div>
        <div className="row">
          <div className="row">
            <p className="author">
              Alexandre Karl Volkert Alves - {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleIconClick(name) {
  if (name === "linkedin") {
    window.open(
      "https://www.linkedin.com/in/alexandre-karl-volkert-alves-b90b84181/",
      "_blank"
    );
  }

  if (name === "github") {
    window.open(
      "https://github.com/alexandrekva",
      "_blank"
    );
  }

  if (name === "whatsapp") {
    window.open(
      "https://api.whatsapp.com/send/?phone=71996361186&text=Ol%C3%A1,%20Alexandre!",
      "_blank"
    );
  }

  if (name === "playstore") {
    window.open(
      "  https://play.google.com/store/apps/developer?id=Alexandre+Alves",
      "_blank"
    );
  }
}
