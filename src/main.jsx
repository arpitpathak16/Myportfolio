import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App_page2 from "./App_page2.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App className="fadeIn" />,
  },
  {
    path: "/page2",
    element: <App_page2 className="fadeIn" />,
  },
  {
    path: "/home",
    element: <App className="fadeIn" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
