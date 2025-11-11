import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", priority: "Medium" });

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data.sort((a, b) => a.priorityLevel - b.priorityLevel));
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", form);
    fetchTasks();
    setForm({ title: "", description: "", priority: "Medium" });
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const priorityValue = { High: 1, Medium: 2, Low: 3 };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-3">Add Study Task</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="title" placeholder="Task title" value={form.title} onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 w-full" />
        <select name="priority" value={form.priority} onChange={handleChange} className="border p-2 w-full">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
      </form>

      <h3 className="text-lg font-semibold mt-6">Task List</h3>
      <ul>
        {tasks
          .sort((a, b) => priorityValue[a.priority] - priorityValue[b.priority])
          .map((task) => (
            <li key={task._id} className="border-b py-2 flex justify-between items-center">
              <div>
                <strong>{task.title}</strong> ({task.priority})
                <p className="text-sm">{task.description}</p>
              </div>
              <button onClick={() => deleteTask(task._id)} className="text-red-500">Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
