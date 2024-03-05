import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App_page2 from "./App_page2.jsx";
import App_light from "./App_light.jsx";
import App_page2_light from "./App_page2_light.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page2",
    element: <App_page2 />,
  },
  {
    path: "/home",
    element: <App />,
  },
  { path: "/light_mode", element: <App_light /> },
  { path: "/creative_light", element: <App_page2_light /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
