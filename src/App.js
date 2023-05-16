import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import Login from "./page/Login";
import MainPage from "./page/MainPage";
import Signup from "./page/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <p>Not Found 😢</p>,
        children: [
            { index: true, element: <Login /> },
            { path: "SignUp", element: <Signup /> },
            { path: "MainPage", element: <MainPage /> },
            // { path: "kids", element: <KidsPage /> },
            // { path: "checkPage", element: <CheckPage /> },
        ],
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}
