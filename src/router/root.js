import { lazy, Suspense } from "react";
import Layout from "../components/layouts/Layout";
import adminRouter from "./adminRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const Main = lazy(() => import("../pages/public/Mainpage"));
const Admin = lazy(() => import("../pages/admin/AdminPage"));

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
      {
        path: "admin",
        element: (
          <Suspense fallback={<Loading />}>
            <Admin />
          </Suspense>
        ),
        children: adminRouter(),
      },
    ],
  },
]);

export default root;
