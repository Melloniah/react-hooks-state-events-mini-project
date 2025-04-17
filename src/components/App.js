import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  // Handle category change
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Handle task submission (when a new task is added)
  function handleTaskFormSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the existing list
  }

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} categories={CATEGORIES.filter(category => category !== "All")} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
