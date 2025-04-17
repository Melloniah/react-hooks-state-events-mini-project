import React, {useState} from "react";
import Task from "./Task"; // make sure to import it

function TaskList({ tasks:initialTasks }) {

const [tasks, setTasks] = useState(initialTasks);

function handleDelete(textdelete){
  const updatedTasks=tasks.filter(task=>task.text !==textdelete)
setTasks(updatedTasks);
}

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
