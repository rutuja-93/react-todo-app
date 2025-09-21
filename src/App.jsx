import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";
import { PlusIcon } from "@heroicons/react/24/outline";

function App() {
  const [selected, setSelected] = useState("all");
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("important");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, category, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setInput("");
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const filteredTasks = tasks.filter(task => {
    if (selected === "all") return true;
    if (selected === "important") return task.category === "important";
    if (selected === "now") return task.category === "now";
    if (selected === "completed") return task.completed;
  });

  return (
    <div className="flex">
      <Sidebar selected={selected} setSelected={setSelected} userName="Komal" />
      <div className="flex-1 p-6 bg-gray-900 min-h-screen text-white">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="New Task..."
            className="bg-gray-700 p-2 rounded w-full text-white"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="bg-gray-700 p-2 rounded text-white"
          >
            <option value="important">Important</option>
            <option value="now">Do It Now</option>
          </select>
          <button onClick={addTask} className="bg-green-500 px-4 rounded flex items-center gap-1">
            <PlusIcon className="w-5 h-5" /> Add
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={() => toggleComplete(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
