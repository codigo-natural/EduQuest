import { Link } from "react-router-dom"
import { ResultTable } from "./ResultTable";
import { useDispatch } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

export const Result = () => {

  const dispatch = useDispatch()

  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="font-semibold text-3xl text-center text-blue-400 mb-4">Quiz Application</h1>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold">Username:</span>
            <span>Camilo_Dev</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold">Total Quiz Points:</span>
            <span>50</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold">Total Questions:</span>
            <span>0</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold">Total Attempts:</span>
            <span>03</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Quiz Result:</span>
            <span className="text-green-500">Passed</span>
          </div>
        </div>

        <div className="mt-4">
          <Link
            className="w-full flex justify-center items-center gap-2 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#00b4d8] via-[#48cae4] to-[#90e0ef] hover:shadow-lg hover:shadow-blue-400 hover:scale-105 duration-300 hover:from-[#2c7da0] hover:to-[#468faf]"
            onClick={onRestart}
            to={"/"}
          >
            Restart
          </Link>

        </div>
      </div>

      <div className="mt-4 w-full max-w-md">
        <ResultTable />
      </div>
    </div>
  );
};
