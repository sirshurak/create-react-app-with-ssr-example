import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import FirstPage from "../pages/First";
import SecondPage from "../pages/Second";

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<FirstPage />} />
      <Route path="second" element={<SecondPage />} />
    </ReactRoutes>
  );
}
