import { lazy, Suspense } from "react";
import Layout from "../components/layouts/Layout";
import adminRouter from "./adminRouter";
import memberMyPageRouter from "./memberMyPageRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const Main = lazy(() => import("../pages/public/Mainpage"));
const Admin = lazy(() => import("../pages/admin/AdminPage"));
const Login = lazy(() => import("../pages/auth/LoginPage"));
const Notice = lazy(() => import("../pages/notice/NoticeListPage"));
const NoticeDetail = lazy(() => import("../pages/notice/NoticeReadPage"));
const Program = lazy(() => import("../pages/program/ProgramListPage"));
const MemberMyPage = lazy(() => import("../pages/member/MemberMyPage"));

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
        path: `program/:programId`,
        element: (
          <Suspense fallback={<Loading />}>
            <Program />
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
        path: "member",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <MemberMyPage />
              </Suspense>
            ),
          },
          ...memberMyPageRouter(),
        ],
      },
    ],
  },
]);

export default root;
