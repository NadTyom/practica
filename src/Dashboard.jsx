import React from "react";
import Teacher from "./Teacher";
import Filter from "./Filter";
export default function Dashboard({ dataTeachers, skills, updateList }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Filter updateList={updateList} skills={skills} />
      <div className="teachers">
        {dataTeachers.map((teach, index) => {
          return <Teacher key={index} {...teach} />;
        })}
      </div>
    </div>
  );
}
