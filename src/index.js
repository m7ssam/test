import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Error from "./pages/Error";
import Css from "./pages/css";
import Html from "./pages/html";
import JavaScript from "./pages/javascript";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
