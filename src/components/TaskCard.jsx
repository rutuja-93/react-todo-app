import React from "react";

const TaskCard = ({ task, toggleComplete, onDelete }) => {
  return (
    <div className="bg-gray-800 p-4 rounded flex justify-between items-center hover:scale-105 transition-all">
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
        <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
      </div>
      <button className="text-red-500" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskCard;
