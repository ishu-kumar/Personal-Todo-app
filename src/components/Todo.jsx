import React from "react";

const Todo = ({ data, onToggle, onDelete }) => {
  return (
    <div className="h-fit text-gray-100 text-xl flex gap-4 items-center justify-center">
      {/* Checkbox */}
      <div
        onClick={() => onToggle(data.id)} // Optional: toggle complete
        className={`min-h-8 min-w-8 flex items-center justify-center border-2 rounded cursor-pointer transition
          ${data.complete ? "bg-green-500 border-green-500" : "border-gray-400"}
        `}
      >
        {data.complete && (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      <h4 className="w-full break-all">{data.text}</h4>
      <button
        onClick={() =>onDelete(data.id)}
        className="w-fit px-3 bg-red-600 text-base py-2 rounded-md"
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
