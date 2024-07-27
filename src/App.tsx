import "./index.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { Home } from "./pages/Home";

const routes: RouteObject[] = [{ path: "/", element: <Home /> }];

const router = createBrowserRouter(routes);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
