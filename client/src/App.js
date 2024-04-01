import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./components/Main";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import { CheckUserExist } from "./helper/helper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
