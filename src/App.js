import { useState } from "react";
import AddTeacher from "./AddTeacher";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [teachers, setTeachers] = useState([]);
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Angular",
    "Node",
    "Python",
    "C#",
    "OOP",
    "SQL",
    "Django",
    "Java",
    "C++",
  ];
  const add = (t) => {
    setTeachers({ ...teachers, t });
  };
  console.log(teachers);
  return (
    <div className="App">
      <h1>Teacher App</h1>
      <div id="main">
        <AddTeacher data={skills} addTeacherFunction={add} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
