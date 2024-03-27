import React, { useEffect, useState } from "react";
// custom Hook
import { useDispatch, useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector(state => state.questions)
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()

  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateResult({ trace, checked }))
  }, [checked])

  function onSelected(index) {
    onChecked(index)
    setChecked(index);
  }

  if (isLoading) return <p>isLoading</p>
  if (serverError) return <p>{serverError || "unknown Error"}</p>

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{questions?.question}</h2>

      <ul
        className="list-none"
        key={questions?.id}
      >
        {
          questions?.options.map((question, index) => (
            <li
              className="flex items-center mb-2"
              key={index}
            >
              <input
                id={`q${index}`}
                type="radio"
                value={false}
                name="options"
                // checked={checked}
                onChange={() => onSelected(index)}
                className="mr-2 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`q${index}-option`}
                className={`text-gray-700`}>
                {question}
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
