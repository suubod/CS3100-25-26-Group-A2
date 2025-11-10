import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Student illustration"
        width="120"
        style={{ marginBottom: "20px" }}
      />
      <h2>Welcome to Smart Study Hub</h2>
      <p>Access your study materials securely and easily!</p>
      <p style={{ color: "#555", fontStyle: "italic", marginBottom: "20px" }}>
        Your one-stop hub for managing subjects, tasks, and progress.
      </p>

      <button
        onClick={() => navigate("/register")}
        style={{
          backgroundColor: "#4b6bfb",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Sign Up
      </button>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          backgroundColor: "#0ea5a4",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </button>
    </main>
  );
}

export default Home;
