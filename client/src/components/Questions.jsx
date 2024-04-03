import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export const Questions = ({ onChecked }) => {
  // Estado para almacenar las opciones seleccionadas para cada pregunta
  const [selectedOptions, setSelectedOptions] = useState({});

  // Obtener el índice de la pregunta actual y el resultado del store de Redux
  const { trace } = useSelector((state) => state.questions);
  // const result = useSelector((state) => state.result.result);

  // Utilizar el hook personalizado useFetchQuestion para obtener los datos de la pregunta
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  // Efecto para despachar la acción updateResult cada vez que cambie selectedOptions o trace
  useEffect(() => {
    dispatch(updateResult({ trace, checked: selectedOptions[trace] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions, trace]);

  // Función para manejar la selección de una opción
  function onSelect(index) {
    // Actualizar el estado selectedOptions con la opción seleccionada para la pregunta actual
    setSelectedOptions((prevState) => ({
      ...prevState,
      [trace]: index,
    }));
    onChecked(index); // Llamar a la función onChecked del componente padre
    dispatch(updateResult({ trace, checked: index })); // Despachar la acción updateResult
  }

  // Renderizar un mensaje de carga o un mensaje de error si es necesario
  if (isLoading) return <p>isLoading</p>;
  if (serverError) return <p>{serverError || "unknown Error"}</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-1/3">
      <h2 className="text-xl font-bold mb-4">{questions?.question}</h2>
      <ul className="list-none" key={questions?.id}>
        {questions?.options.map((question, index) => (
          <li className="flex items-center mb-2" key={index}>
            <input
              id={`q${index}-option`}
              type="radio"
              value={false}
              name="options"
              onChange={() => onSelect(index)} // Llamar a onSelect cuando se cambie la opción seleccionada
              checked={selectedOptions[trace] === index} // Marcar la opción como seleccionada si coincide con selectedOptions[trace]
              className="mr-2 h-5 w-5"
            />
            <label
              htmlFor={`q${index}-option`}
              className={`text-gray-700 ${selectedOptions[trace] === index ? 'text-blue-500' : '' // Aplicar el color azul al texto si la opción está seleccionada
                }`}
            >
              {question}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
