import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion"
import { PushAnswer } from "../hooks/setResult"
import { Questions } from "./Questions"
import { Navigate } from "react-router-dom"

export const Quiz = () => {

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state => state.result.result)
  const { queue, trace } = useSelector(state => state.questions)
  const dispatch = useDispatch()

  // update the trace value by one using MoveNextAction
  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion())
      if (result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }

    // reset the value of the checked variable
    setChecked(undefined)
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }

  function onChecked(check) {
    setChecked(check)
  }

  // finished exam after the last question

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-auto">
      <h1 className="font-semibold text-3xl text-blue-400 my-4">Quiz Aplication</h1>

      <Questions onChecked={onChecked} />

      <div className="grid grid-cols-2 w-1/3">
        {
          trace > 0 ? <button
            onClick={onPrev}
            className="cursor-pointer flex items-center justify-start p-2 duration-200 hover:scale-125 active:scale-100" title="Go Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-blue-300 hover:stroke-blue-900"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19">
              </path>
            </svg>
          </button> : <div></div>
        }
        <button
          onClick={onNext}
          className="cursor-pointer flex items-center justify-end p-2 duration-200 hover:scale-125 active:scale-100" title="Go next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-blue-300 hover:stroke-blue-900 rotate-180"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M11 6L5 12M5 12L11 18M5 12H19">
            </path>
          </svg>
        </button>
      </div>
    </div>
  )
}