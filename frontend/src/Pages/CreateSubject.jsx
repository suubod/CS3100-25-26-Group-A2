import React, { useState } from "react";
import "../App.css";

function CreateSubject() {
  const [subjectName, setSubjectName] = useState("");
  const [subjectDesc, setSubjectDesc] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!subjectName.trim()) {
    alert("Please enter a subject name.");
    return;
  }

  setLoading(true);
  setError("");
  setSuccessMessage("");

  try {
    const res = await fetch("/api/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: subjectName.trim(),
        description: (subjectDesc || "").trim(),
      }),
    });

    if (res.status === 409) {
      setError("A subject with this name already exists.");
      return;
    }
    if (res.status === 400) {
      setError("Name is required.");
      return;
    }
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(txt || "Failed to create subject");
    }

    const data = await res.json().catch(() => ({}));
    setSuccessMessage(`✅ Subject "${data.name || subjectName}" created successfully!`);
    setSubjectName("");
    setSubjectDesc("");
  } catch (err) {
    setError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <main>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Subject icon"
        width="100"
        style={{ marginBottom: "20px" }}
      />
      <h2>Create a New Subject</h2>
      <p style={{ color: "#555" }}>
        Add a new subject to keep your study materials organised.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          maxWidth: "450px",
          margin: "20px auto",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <label style={{ fontWeight: "bold" }}>Subject Name</label>
        <input
          type="text"
          placeholder="Enter subject name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <label style={{ fontWeight: "bold" }}>Description</label>
        <textarea
          placeholder="Enter subject description"
          value={subjectDesc}
          onChange={(e) => setSubjectDesc(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            resize: "none",
            marginBottom: "15px",
          }}
        />

        <button type="submit" disabled={loading || !subjectName.trim()}>
          {loading ? "Saving..." : "Save Subject"}
        </button>
        <br />
        <button
        type="button"
        onClick={() => window.history.back()}
        style={{
          marginTop: "10px",
          fontSize: "0.9rem",
          padding: "10px 16px",
          backgroundColor: "#ccc",
          border: "none",
          borderRadius: "10px",   
          cursor: "pointer",
          color: "#fff"
        }}
      >
        Cancel
      </button>

        {error && (
          <p
            style={{
              marginTop: "10px",
              color: "#e11d48",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
        )}

        {successMessage && (
          <p
            style={{
              marginTop: "15px",
              color: "#2ecc71",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {successMessage}
          </p>
        )}
      </form>
    </main>
  );
}

export default CreateSubject;
