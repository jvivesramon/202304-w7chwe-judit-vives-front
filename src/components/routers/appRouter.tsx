import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import App from "../App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/user"} replace /> },
      { path: "/user", element: <HomePage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
