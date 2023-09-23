import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/destination",
    element: <Destination />,
    // errorElement: <ErrorPage />,
  },

  {
    path: "/crew",
    element: <Crew />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/Technology",
    element: <Technology />,
    // errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

