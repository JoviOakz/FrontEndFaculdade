import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Cube from "../pages/CubePage"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <Cube />,
    }
]);