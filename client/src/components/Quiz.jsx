import { Questions } from "./Questions"

export const Quiz = () => {

  function onNext() {
    console.log('On next click')
  }

  function onPrev() {
    console.log('On prev click')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-semibold text-3xl text-blue-400 my-4">Quiz Component</h1>

      <Questions />

      <div className="grid grid-cols-2">
        <button
          onClick={onPrev}
          className="cursor-pointer flex items-center justify-start p-2 duration-200 hover:scale-125 active:scale-100" title="Go Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-blue-300"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M11 6L5 12M5 12L11 18M5 12H19">
            </path>
          </svg>
        </button>
        <button
          onClick={onNext}
          className="cursor-pointer flex items-center justify-end p-2 duration-200 hover:scale-125 active:scale-100" title="Go next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-blue-300 rotate-180"
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