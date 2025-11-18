import React, { useState } from "react";
import "./AddTask.css";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = { title, description, priority };

    const priorityOrder = { High: 1, Medium: 2, Low: 3 };

    const updated = [...tasks, newTask].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    setTasks(updated);

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <div className="add-task-container">
      <h2>Add Task</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <h3>Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              <strong>{task.title}</strong> - {task.description} ({task.priority})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddTask;
