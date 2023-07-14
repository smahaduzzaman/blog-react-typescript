import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "../node_modules/react-router-dom/dist/index";
import App from "./App";
import "./index.css";
// import tailwind css
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
