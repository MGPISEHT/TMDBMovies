import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Movies from "./pages/Movies";
import ChinaSeries from "./pages/ChinaSeries";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "anime",
        element: <Anime />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "china-series",
        element: <ChinaSeries />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>;
};

export default App;
