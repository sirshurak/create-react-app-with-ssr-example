import React, { lazy } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

const FirstPage = lazy(() => import("../pages/First"));
const SecondPage = lazy(() => import("../pages/Second"));

export default function LazyRoutes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<FirstPage />} />
      <Route path="second" element={<SecondPage />} />
    </ReactRoutes>
  );
}
