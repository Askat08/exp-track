import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "../Footer.css";

const Footer = props => {
  return (
    <div className="footer-container">
      <div className="text-center">
        <div className="row">
          <div className="title">
            <h5>XPNS App</h5>
            <p>Expense Tracker app made by Askat for portfolio project</p>
          </div>
          <div className="contact">
            <h5>CONTACT</h5>
            <a
              href="mailto:askatbakyev@gmail.com?Subject=Hello%20again"
              target="_top"
            >
              <span className="lead">askatbakyev@gmail.com</span>
            </a>
            <div className="social">
              <a
                href="https://github.com/Askat08"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 text-white"
              >
                <FaGithubSquare className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/askat-bakyev/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-white"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer text-center">ASKAT © 2020</div>
    </div>
  );
};

export default Footer;
