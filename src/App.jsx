import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Layouts from "./components/Layouts/Layouts";
import ErrorPage from "./components/error/Error-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
