import { lazy, Suspense } from "react";
import Layout from "../components/layouts/Layout";
import adminRouter from "./adminRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const Main = lazy(() => import("../pages/public/Mainpage"));
const Admin = lazy(() => import("../pages/admin/AdminPage"));
const Login = lazy(() => import("../pages/auth/LoginPage"));
const Notice = lazy(() => import("../pages/notice/NoticeListPage"));
const NoticeDetail = lazy(() => import("../pages/notice/NoticeReadPage"));
const FAQ = lazy(() => import("../pages/faq/FaqListPage"));

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
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "notice",
        element: (
          <Suspense fallback={<Loading />}>
            <Notice />
          </Suspense>
        ),
      },
      {
        path: "notice/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <NoticeDetail />
          </Suspense>
        ),
      },
       {
        path: "faq",
        element: (
          <Suspense fallback={<Loading />}>
            <FAQ />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
