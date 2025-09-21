import React from "react";
import { HomeIcon, ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <div className="bg-gray-900 text-gray-300 w-64 min-h-screen p-6 flex flex-col justify-start">
      <div className="flex flex-col gap-4">
        <button
          className={`flex items-center gap-3 p-2 rounded ${selected==="all"?"bg-gray-800 text-white":""}`}
          onClick={()=>setSelected("all")}
        >
          <HomeIcon className="w-5 h-5" /> All
        </button>
        <button
          className={`flex items-center gap-3 p-2 rounded ${selected==="important"?"bg-gray-800 text-white":""}`}
          onClick={()=>setSelected("important")}
        >
          <ClipboardIcon className="w-5 h-5" /> Important
        </button>
        <button
          className={`flex items-center gap-3 p-2 rounded ${selected==="completed"?"bg-gray-800 text-white":""}`}
          onClick={()=>setSelected("completed")}
        >
          <CheckIcon className="w-5 h-5" /> Completed
        </button>
        <button
          className={`flex items-center gap-3 p-2 rounded ${selected==="now"?"bg-gray-800 text-white":""}`}
          onClick={()=>setSelected("now")}
        >
          <ClipboardIcon className="w-5 h-5" /> Do It Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
