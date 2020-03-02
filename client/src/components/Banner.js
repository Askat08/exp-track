import React from "react";

import "../Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="money-pic"></div>
      <div>
        <div className="card">
          <div className="text">
            Managing your finances can be difficult. Especially when there are
            many temptations to acquire something.{" "}
          </div>
          <div className="img one"></div>
        </div>
        <div className="card">
          <div className="img two"></div>
          <div className="text">
            <span>XPNS</span> app will help you keep track of small daily
            expenses.
          </div>
        </div>
        <div className="card">
          <div className="text">
            We hope that this app will help you cut your expenses.
          </div>
          <div className="img three"></div>
        </div>
        <div className="text quote">
          <p>
            <q>
              Beware of little expenses. A small leak will sink a great ship
            </q>{" "}
            ~ Benjamin Franklin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
