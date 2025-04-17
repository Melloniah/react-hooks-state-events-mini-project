import React from "react";


function Task({text, category, onDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <span className="text">{text}</span>
      <button className="delete" onClick={()=>onDelete(text)}>X</button>
    </div>
  );
}

export default Task;
