import { useEffect, useState } from "react";
import AddTeacher from "./AddTeacher";
import "./App.css";
import Dashboard from "./Dashboard";
import { searchBySkills } from "./Lib";

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
    setResult([...teachers,t])
  };
  const updateList =(list)=>{
    list = list.filter(a=> a.active).map((a)=>a.title)
    let data =searchBySkills(teachers,list);
    setResult(data)
  }
  return (
    <div className="App">
      <h1>Teacher App. / {teachers.length} are teachers here</h1>
      <div id="main">
        <AddTeacher data={skills} addTeacherFunction={add} />
        <Dashboard
          updateList={updateList}
          dataTeachers={result}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;
