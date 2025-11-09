import React, { useState } from "react";
import "./Subjects.css";

function Subjects() {
  const [subjectName, setSubjectName] = useState("");
  const [description, setDescription] = useState("");
  const [subjects, setSubjects] = useState([]);

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (subjectName.trim() === "") return;

    const newSubject = { name: subjectName, description: description };
    setSubjects([...subjects, newSubject]);
    setSubjectName("");
    setDescription("");
  };

  return (
    <div className="subjects-container">
      <h2>Create Study Subjects</h2>
      <form onSubmit={handleAddSubject}>
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Subject</button>
      </form>

      <h3>Subjects List</h3>
      <ul>
        {subjects.map((subj, index) => (
          <li key={index}>
            <strong>{subj.name}</strong> - {subj.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;
