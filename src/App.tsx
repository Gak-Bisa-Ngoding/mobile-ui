import "./index.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { Login } from "./pages/Login";

const routes: RouteObject[] = [{ path: "/", element: <Login /> }];

const router = createBrowserRouter(routes);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
