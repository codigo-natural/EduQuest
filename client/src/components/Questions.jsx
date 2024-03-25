import React, { useEffect, useState } from "react";
import data from "../database/data";

export const Questions = () => {
  const [checked, setChecked] = useState(false);

  const question = data[0]

  useEffect(() => {
    console.log(data)
  })

  function onSelected() {
    setChecked(true);
    console.log(`selected ${checked}`);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>

      <ul
        className="list-none"
        key={question.id}
      >
        {
          question.options.map((question, index) => (
            <li
              className="flex items-center mb-2"
              key={index}
            >
              <input
                id={`q${index}`}
                type="radio"
                name="options"
                checked={checked}
                onChange={onSelected}
                className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`q${index}-option`}
                className="text-gray-700">
                {question}
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
