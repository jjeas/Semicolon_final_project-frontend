import { lazy, Suspense } from "react";
import Layout from "../components/layouts/Layout";

const { createBrowserRouter } = require("react-router-dom");

const Main = lazy(() => import("../pages/public/Mainpage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Main />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
