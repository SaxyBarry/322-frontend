import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Chatroom from "./pages/chatroom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Welcome to chatroom</h1>
        <Link to="Login">Login In</Link>
        <Link to="Signup">Signup</Link>
        <Link to="Chatroom">Chat</Link>
      </div>
    ),
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
  {
    path: "Signup",
    element: <SignupPage />,
  },
  {
    path: "Chatroom",
    element: <Chatroom />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);