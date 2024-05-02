import * as React from "react";

import { createBrowserRouter } from "react-router-dom";
import Counter from "../views/Counter";
import ABC from "../views/ABC";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Counter />,
    },
    {
        path: "/test",
        element: <ABC />,
    },
]);

export default router;
