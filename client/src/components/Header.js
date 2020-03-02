import React from "react";
import logo from "../img/XPNS-logo.png";
import { Link } from "react-router-dom";

const style = {
  header: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    background: "darkcyan"
    // background: "rgba(125, 125, 125, 0.7)"
  },
  a: {
    textDecoration: "none",
    marginRight: "1rem",
    fontSize: "2rem",
    color: "black"
  }
};

export const Header = () => {
  return (
    <div style={style.header} className="mobile">
      <Link to="/">
        <img src={logo} style={{ width: "7rem" }} alt="logo" />
      </Link>
      <Link to="/wallet" style={style.a}>
        Wallet
      </Link>
    </div>
  );
};
