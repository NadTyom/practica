import { useEffect, useState } from "react";
import AddTeacher from "./AddTeacher";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [teachers, setTeachers] = useState([]);
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("teachers.json")
      .then((r) => r.json())
      .then((r) => {
        setTeachers(r.data);
        setResult(r.data);
      });
  }, []);
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
    setTeachers([...teachers, t]);
  };
  return (
    <div className="App">
      <h1>Teacher App. / {teachers.length} are teachers here</h1>
      <div id="main">
        <AddTeacher data={skills} addTeacherFunction={add} />
        <Dashboard dataTeachers={result} skills={skills} />
      </div>
    </div>
  );
}

export default App;
