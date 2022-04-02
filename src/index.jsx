import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LazyRoutes from "./routes/lazy_routes";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App Routes={LazyRoutes} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
