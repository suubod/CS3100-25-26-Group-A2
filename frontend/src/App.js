import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import CreateSubject from "./Pages/CreateSubject";
import Subjects from "./Subjects.jsx";
import Dashboard from "./Pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-subject" element={<CreateSubject />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
