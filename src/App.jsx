import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Layouts from "./components/Layouts/Layouts";
import ErrorPage from "./components/error/Error-page";
import About from "./components/About/About";

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
        {
          path: "/about",
          element: <About />,
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
