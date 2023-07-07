import React, { useState } from "react";

export default function Filter({ skills, updateList }) {
  const [list, setList] = useState(
    skills.map((elm) => {
      return { title: elm, active: false };
    })
  );
  const toUpdate = (e, i) => {
    list[i].active = e.target.checked;
    setList([...list]);
    updateList(list);
  };
  return (
    <div>
      <p>
        Lets <span>go </span> to search!
      </p>
      <div className="checkbox-list">
        {list.map((elm, i) => {
          return (
            <div key={i}>
              <input type="checkbox" onChange={(e) => toUpdate(e, i)} />
              {elm.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
