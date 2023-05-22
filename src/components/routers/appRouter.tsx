import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../App/App";
import ContactsPage from "../pages/ContactsPage/ContactsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/user/login"} replace /> },
      { path: "/user/login", element: <LoginPage /> },
      { path: "/contacts", element: <ContactsPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
