import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      console.log("No previous page to go back to.");
    }
  };

  return (
    <header
      style={{
        background: "#1e3a8a",
        padding: "20px 15px",
        color: "white",
        textAlign: "center",
        position: "relative",
      }}
    >
      
      <button
        onClick={goBack}
        title="Go Back"
        style={{
          position: "absolute",
          left: "25px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "white",
          color: "#1e3a8a",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#e0e7ff")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      
      <h1 style={{ margin: 0, fontSize: "1.9rem", fontWeight: "bold" }}>
        Smart Study Hub
      </h1>

      
      <nav style={{ marginTop: "10px" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>
      
        
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 15px",
  fontWeight: "bold",
  fontSize: "1rem",
};

export default Header;
