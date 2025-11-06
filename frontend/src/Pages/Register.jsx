import React from "react";
import RegistrationForm from "../RegistrationForm";
import "../App.css";

function Register() {
  return (
    <main className="main-content">
      <p className="intro-text">
        Join Smart Study Hub today and get instant access to your study materials!
      </p>
      <RegistrationForm />
    </main>
  );
}

export default Register;
