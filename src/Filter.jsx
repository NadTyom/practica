import React, { useState } from "react";

export default function Filter({ skills }) {
  const [list, SetList] = useState(
    skills.map((elm) => {
      return { title: elm, active: false };
    })
  );
  return (
    <div>
      <p>Lets go to search!</p>
      <div className="checkbox-list">
        {skills.map((elm, i) => {
          return (
            <div key={i}>
              <input type="checkbox" />
              {elm.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
