import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Student illustration"
        width="120"
      />
      <h2>Welcome to Smart Study Hub</h2>
      <p>Access your study materials securely and easily!</p>
      <p style={{ color: "#555", fontStyle: "italic" }}>
        Your one-stop hub for learning resources, class notes, and study support.
      </p>
      <button onClick={() => navigate("/register")}>Sign Up</button>
      <button onClick={() => navigate("/create-subject")}>Create Subject</button>
    </main>
  );
}

export default Home;
