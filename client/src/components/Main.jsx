import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setUserId } from "../redux/result_reducer"

export const Main = () => {

  const inputRef = useRef(null)
  const dispatch = useDispatch()

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value))
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-semibold text-3xl text-blue-400">Quiz Aplication</h1>

      <ol className="my-4">
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one options.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form className="flex items-center justify-center my-4" id="form">
        <div className="relative">

          <input
            ref={inputRef}
            type="text"
            name="username"
            id="username"
            // placeholder="Username*"
            className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
          />
          <label
            htmlFor="username"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Username*</label>
        </div>
      </form>

      <button
        className="invert hover:rotate-2 w-1/4 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600"
      >
        <div
          className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full"
        >
          <Link
            to={"quiz"}
            onClick={startQuiz}
            className="group-hover:scale-100 group-hover:text-yellow-500 text-yellow-600 gap-1 w-full"
          >
            Start Quiz
          </Link>
        </div>
      </button>


    </div>
  )
}