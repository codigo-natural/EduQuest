import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./components/Main";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
