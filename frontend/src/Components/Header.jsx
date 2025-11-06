import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Smart Study Hub</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/create-subject">Create Subject</Link>
      </nav>
    </header>
  );
}

export default Header;
