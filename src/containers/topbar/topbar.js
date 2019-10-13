import React from "react";
import { Link } from "react-router-dom";

import "./topbar.scss";
import { Logo } from '../../assets/icons'

const Topbar = props => {
  return (
    <header className="topbar">
      <h1 className="brand">
        <Link to="/" className="home-link">
          <Logo />
        </Link>
      </h1>
      <Link to="/login">Login</Link>
    </header>
  );
};

export default Topbar;
