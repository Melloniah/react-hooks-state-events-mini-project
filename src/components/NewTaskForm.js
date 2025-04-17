import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]); // Default to first category

  function handleInputChange(event) {
    setTaskName(event.target.value);
  }

  function handleCategoryChange(event) {
    setTaskCategory(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const newTask = {
      text: taskName,
      category: taskCategory,
    };

    if (taskName && taskCategory) {
      onTaskFormSubmit(newTask); // Send new task to App
      setTaskName(""); // Clear input after submission
      setTaskCategory(categories[0]); // Reset category to default
    } else {
      alert("Please fill in both fields.");
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
