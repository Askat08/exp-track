import React from "react";
import logo from "../img/XPNS-logo.png";
import { Link } from "react-router-dom";

const style = {
  header: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "7rem",
    background: "rgba(0, 55, 55, 0.7)"
  },
  a: {
    fontFamily: "Comic Sans MS",
    textDecoration: "none",
    marginRight: "3rem",
    fontSize: "2rem",
    color: "white"
  }
};

export const Header = () => {
  return (
    <div style={style.header} className="mobile">
      <Link to="/">
        <img
          src={logo}
          style={{ width: "7rem", marginLeft: "1rem" }}
          alt="logo"
        />
      </Link>
      <Link to="/wallet" style={style.a}>
        wallet
      </Link>
    </div>
  );
};
