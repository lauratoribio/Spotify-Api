import React from "react";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home";

const routes = [
  {
    path: "/",
    element: <Registration />,
    isPrivate: false
  },
  {
    path: "/*",
    element: <Home />,
    isPrivate: true
  },
];

export default routes;