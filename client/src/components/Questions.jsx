import React, { useState } from "react";

export const Questions = () => {
  const [checked, setChecked] = useState(false);

  function onSelected() {
    setChecked(true);
    console.log(`selected ${checked}`);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Simple Question 1</h2>

      <ul className="list-none">
        <li className="flex items-center mb-2">
          <input
            id="q1-option"
            type="radio"
            name="options"
            checked={checked}
            onChange={onSelected}
            className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="q1-option" className="text-gray-700">Option</label>
        </li>
      </ul>
    </div>
  );
};
