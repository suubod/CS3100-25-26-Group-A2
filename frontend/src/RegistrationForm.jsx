import React, { useState } from "react";
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    address: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Email already exists
      if (response.status === 409) {
        const text = await response.text();
        setErrorMessage(text || "Email already in use.");
        return;
      }

      // Other errors
      if (!response.ok) {
        const text = await response.text();
        setErrorMessage(text || "Registration failed.");
        return;
      }

      // Read backend message for success
      const message = await response.text();
      setSuccessMessage(message || "User registered successfully!");

      // Clear form after success
      setFormData({ email: "", password: "", role: "", address: "" });

    } catch (error) {
      setErrorMessage("Server error. Make sure the backend is running.");
    }
  };

  return (
    <div className="form-container">
      <h2>Register Account</h2>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role (e.g. student)"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
