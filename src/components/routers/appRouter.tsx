import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/user"} replace /> },
      { path: "/user", element: <LoginPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
